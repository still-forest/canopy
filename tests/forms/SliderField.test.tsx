import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";
import { SliderField } from "@/forms";

const getThumbInputs = () => screen.getAllByRole("slider", { hidden: true }) as HTMLInputElement[];

describe("SliderField", () => {
  // The underlying Base UI slider measures itself after mount; flush those updates
  // so they don't leak into the next test as act() warnings.
  afterEach(async () => {
    await act(async () => {});
  });

  it("renders with default props", () => {
    render(<SliderField name="some_slider" />);

    const slider = screen.getByRole("group");
    expect(slider).toHaveAttribute("id", "some_slider");
    expect(slider).toHaveAttribute("data-orientation", "horizontal");
    expect(slider).not.toHaveAttribute("aria-invalid");

    // With neither value nor defaultValue, the underlying slider renders a thumb
    // per [min, max] while Base UI's uncontrolled state holds a single value.
    const inputs = getThumbInputs();
    expect(inputs).toHaveLength(2);
    expect(inputs.map((input) => input.value)).toEqual(["0", "0"]);
    expect(inputs.every((input) => input.name === "some_slider")).toBe(true);
    expect(inputs[0].min).toBe("0");
    expect(inputs[0].max).toBe("100");
    expect(inputs[0].step).toBe("1");
  });

  it("renders a single thumb when given a numeric defaultValue", () => {
    render(<SliderField defaultValue={20} name="some_slider" />);

    const inputs = getThumbInputs();
    expect(inputs).toHaveLength(1);
    expect(inputs[0].value).toBe("20");
  });

  it("renders a single thumb when given a defaultValue array", () => {
    render(<SliderField defaultValue={[20]} name="some_slider" />);

    const inputs = getThumbInputs();
    expect(inputs).toHaveLength(1);
    expect(inputs[0].value).toBe("20");
  });

  it("renders a thumb per value when given multiple defaultValues", () => {
    render(<SliderField defaultValue={[20, 60]} name="some_slider" />);

    const inputs = getThumbInputs();
    expect(inputs).toHaveLength(2);
    expect(inputs.map((input) => input.value)).toEqual(["20", "60"]);
  });

  it("renders a controlled numeric value", () => {
    render(<SliderField name="some_slider" value={35} />);

    const inputs = getThumbInputs();
    expect(inputs).toHaveLength(1);
    expect(inputs[0].value).toBe("35");
  });

  it("renders controlled values given as an array", () => {
    render(<SliderField name="some_slider" value={[10, 40]} />);

    const inputs = getThumbInputs();
    expect(inputs.map((input) => input.value)).toEqual(["10", "40"]);
  });

  it("renders with min, max and step", () => {
    render(<SliderField defaultValue={5} max={10} min={1} name="some_slider" step={0.5} />);

    const [input] = getThumbInputs();
    expect(input.min).toBe("1");
    expect(input.max).toBe("10");
    expect(input.step).toBe("0.5");
  });

  it("renders with label", () => {
    render(<SliderField defaultValue={20} label="Volume" name="some_slider" />);

    const label = screen.getByText("Volume");
    expect(label.tagName).toBe("LABEL");
    expect(label).toHaveAttribute("for", "some_slider");
  });

  it("renders with label class name", () => {
    render(<SliderField label="Volume" labelClassName="text-blue-500" name="some_slider" />);

    expect(screen.getByText("Volume")).toHaveClass("text-blue-500");
  });

  it("renders with hint", () => {
    const { container } = render(<SliderField hint="Turn it up" label="Volume" name="some_slider" />);

    expect(container.querySelector("[data-slot='tooltip-trigger']")).toBeInTheDocument();
  });

  it("renders a hint without a label", () => {
    const { container } = render(<SliderField hint="Turn it up" name="some_slider" />);

    expect(container.querySelector("[data-slot='field-label-group']")).toBeInTheDocument();
    expect(container.querySelector("[data-slot='field-label']")).not.toBeInTheDocument();
  });

  it("omits the label group when there is no label or hint", () => {
    const { container } = render(<SliderField name="some_slider" />);

    expect(container.querySelector("[data-slot='field-label-group']")).not.toBeInTheDocument();
  });

  it("renders with note", () => {
    render(<SliderField name="some_slider" note="My cat's breath smells like cat food" />);

    const note = screen.getByText("My cat's breath smells like cat food");
    expect(note.tagName).toBe("P");
  });

  it("renders with an error message", () => {
    const { container } = render(<SliderField error="What'd you do?" name="some_slider" />);

    const error = screen.getByRole("alert");
    expect(error).toHaveTextContent("What'd you do?");

    expect(screen.getByRole("group")).toHaveAttribute("aria-invalid", "true");
    expect(container.querySelector("[data-slot='field']")).toHaveAttribute("data-invalid", "true");
  });

  it("is not marked invalid without an error", () => {
    const { container } = render(<SliderField name="some_slider" />);

    expect(screen.queryByRole("alert")).not.toBeInTheDocument();
    expect(container.querySelector("[data-slot='field']")).toHaveAttribute("data-invalid", "false");
  });

  it("uses the provided id in place of the name", () => {
    render(<SliderField id="custom_id" label="Volume" name="some_slider" />);

    expect(screen.getByRole("group")).toHaveAttribute("id", "custom_id");
    expect(screen.getByText("Volume")).toHaveAttribute("for", "custom_id");
    expect(getThumbInputs()[0].name).toBe("some_slider");
  });

  it.each([
    ["xs", "size-2", "data-[orientation=horizontal]:h-1 data-[orientation=vertical]:w-1"],
    ["sm", "size-3", "data-[orientation=horizontal]:h-1.5 data-[orientation=vertical]:w-1.5"],
    ["md", "size-4", "data-[orientation=horizontal]:h-2 data-[orientation=vertical]:w-2"],
    ["lg", "size-5", "data-[orientation=horizontal]:h-3 data-[orientation=vertical]:w-3"],
    ["xl", "size-6", "data-[orientation=horizontal]:h-4 data-[orientation=vertical]:w-4"],
  ] as const)("applies %s sizing to the thumb and track", (size, thumbClass, trackClasses) => {
    const { container } = render(<SliderField defaultValue={20} name="some_slider" size={size} />);

    expect(container.querySelector("[data-slot='slider-thumb']")).toHaveClass(thumbClass, "bg-primary");
    expect(container.querySelector("[data-slot='slider-track']")).toHaveClass(...trackClasses.split(" "));
  });

  it("defaults to md sizing", () => {
    const { container } = render(<SliderField defaultValue={20} name="some_slider" />);

    expect(container.querySelector("[data-slot='slider-thumb']")).toHaveClass("size-4");
  });

  it("combines custom thumb and track class names with generated classes", () => {
    const { container } = render(
      <SliderField
        defaultValue={20}
        name="some_slider"
        size="lg"
        thumbClassName="custom-thumb"
        trackClassName="custom-track"
      />,
    );

    const thumb = container.querySelector("[data-slot='slider-thumb']");
    expect(thumb).toHaveClass("size-5", "custom-thumb");

    const track = container.querySelector("[data-slot='slider-track']");
    expect(track).toHaveClass("custom-track");
  });

  it.each(["vertical", "horizontal"] as const)("renders a %s slider", (orientation) => {
    render(<SliderField defaultValue={20} name="some_slider" orientation={orientation} />);

    expect(screen.getByRole("group")).toHaveAttribute("data-orientation", orientation);
  });

  it("defaults to a horizontal slider", () => {
    render(<SliderField defaultValue={20} name="some_slider" />);

    expect(screen.getByRole("group")).toHaveAttribute("data-orientation", "horizontal");
  });

  it.each([
    ["vertical", "field--vertical"],
    ["horizontal", "field--horizontal"],
  ] as const)("renders a %s label layout", (labelOrientation, expectedClass) => {
    const { container } = render(<SliderField label="Volume" labelOrientation={labelOrientation} name="some_slider" />);

    expect(container.querySelector("[data-slot='field']")).toHaveClass(expectedClass);
  });

  it("defaults to a vertical label layout", () => {
    const { container } = render(<SliderField label="Volume" name="some_slider" />);

    expect(container.querySelector("[data-slot='field']")).toHaveClass("field--vertical");
  });

  it("passes through additional props to the underlying slider", () => {
    render(<SliderField disabled={true} name="some_slider" />);

    expect(screen.getByRole("group")).toHaveAttribute("data-disabled");
  });

  it("calls onValueChange when the value changes", async () => {
    const handleValueChange = vi.fn();
    render(<SliderField defaultValue={20} name="some_slider" onValueChange={handleValueChange} />);

    const [input] = getThumbInputs();
    input.focus();
    await userEvent.keyboard("{ArrowRight}");

    expect(handleValueChange).toHaveBeenCalledWith([21], expect.anything());
  });
});
