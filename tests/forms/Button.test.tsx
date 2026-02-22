import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import "@testing-library/jest-dom";

import { Button } from "@/buttons";

describe("Button", () => {
  test("renders a Button with an onClick action", async () => {
    const handleClick = vi.fn();

    render(<Button onClick={handleClick}>Test Button</Button>);

    expect(screen.getByRole("button")).toHaveTextContent("Test Button");
    expect(screen.getByRole("button")).toHaveAttribute("type", "button");
    expect(screen.getByRole("button")).not.toBeDisabled();

    fireEvent.click(screen.getByText("Test Button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("renders a disabled Button", async () => {
    render(<Button disabled={true}>Test Button</Button>);

    expect(screen.getByRole("button")).toHaveTextContent("Test Button");
    expect(screen.getByRole("button")).toBeDisabled();
  });

  test("renders a Button with submit type", async () => {
    render(<Button type="submit">Test Button</Button>);

    expect(screen.getByRole("button")).toHaveTextContent("Test Button");
    expect(screen.getByRole("button")).toHaveAttribute("type", "submit");
  });

  test("renders a Button with reset type", async () => {
    render(<Button type="reset">Test Button</Button>);

    expect(screen.getByRole("button")).toHaveTextContent("Test Button");
    expect(screen.getByRole("button")).toHaveAttribute("type", "reset");
  });

  test("renders a Button of size xs", async () => {
    render(<Button size="xs">Test Button</Button>);

    expect(screen.getByRole("button")).toHaveTextContent("Test Button");
    expect(screen.getByRole("button")).toHaveAttribute("type", "button");
    expect(screen.getByRole("button").className).toBe("btn btn--xs");
  });

  test("renders a Button of size sm", async () => {
    render(<Button size="sm">Test Button</Button>);

    expect(screen.getByRole("button")).toHaveTextContent("Test Button");
    expect(screen.getByRole("button")).toHaveAttribute("type", "button");
    expect(screen.getByRole("button").className).toBe("btn btn--sm");
  });

  test("renders a Button of size md", async () => {
    render(<Button size="md">Test Button</Button>);

    expect(screen.getByRole("button")).toHaveTextContent("Test Button");
    expect(screen.getByRole("button")).toHaveAttribute("type", "button");
    expect(screen.getByRole("button").className).toBe("btn btn--md");
  });

  test("renders a Button of size lg", async () => {
    render(<Button size="lg">Test Button</Button>);

    expect(screen.getByRole("button")).toHaveTextContent("Test Button");
    expect(screen.getByRole("button")).toHaveAttribute("type", "button");
    expect(screen.getByRole("button").className).toBe("btn btn--lg");
  });

  test("renders a Button of size xl", async () => {
    render(<Button size="xl">Test Button</Button>);

    expect(screen.getByRole("button")).toHaveTextContent("Test Button");
    expect(screen.getByRole("button")).toHaveAttribute("type", "button");
    expect(screen.getByRole("button").className).toBe("btn btn--xl");
  });

  test("renders a Button of size default", async () => {
    render(<Button>Test Button</Button>);

    expect(screen.getByRole("button")).toHaveTextContent("Test Button");
    expect(screen.getByRole("button")).toHaveAttribute("type", "button");
    expect(screen.getByRole("button").className).toBe("btn");
  });

  test("renders a Button of variant primary", async () => {
    render(<Button variant="primary">Test Button</Button>);

    expect(screen.getByRole("button")).toHaveTextContent("Test Button");
    expect(screen.getByRole("button")).toHaveAttribute("type", "button");
    expect(screen.getByRole("button").className).toBe("btn btn-primary");
  });

  test("renders a Button of variant secondary", async () => {
    render(<Button variant="secondary">Test Button</Button>);

    expect(screen.getByRole("button")).toHaveTextContent("Test Button");
    expect(screen.getByRole("button")).toHaveAttribute("type", "button");
    expect(screen.getByRole("button").className).toBe("btn btn-secondary");
  });

  test("renders a Button of variant muted", async () => {
    render(<Button variant="muted">Test Button</Button>);

    expect(screen.getByRole("button")).toHaveTextContent("Test Button");
    expect(screen.getByRole("button")).toHaveAttribute("type", "button");
    expect(screen.getByRole("button").className).toBe("btn btn-muted");
  });

  test("renders a Button of variant ghost", async () => {
    render(<Button variant="ghost">Test Button</Button>);

    expect(screen.getByRole("button")).toHaveTextContent("Test Button");
    expect(screen.getByRole("button")).toHaveAttribute("type", "button");
    expect(screen.getByRole("button").className).toBe("btn btn-ghost");
  });

  test("renders a Button of variant link", async () => {
    render(<Button variant="link">Test Button</Button>);

    expect(screen.getByRole("button")).toHaveTextContent("Test Button");
    expect(screen.getByRole("button")).toHaveAttribute("type", "button");
    expect(screen.getByRole("button").className).toBe("btn btn-link");
  });

  test("renders a Button of variant info", async () => {
    render(<Button variant="info">Test Button</Button>);

    expect(screen.getByRole("button")).toHaveTextContent("Test Button");
    expect(screen.getByRole("button")).toHaveAttribute("type", "button");
    expect(screen.getByRole("button").className).toBe("btn btn-info");
  });

  test("renders a Button of variant success", async () => {
    render(<Button variant="success">Test Button</Button>);

    expect(screen.getByRole("button")).toHaveTextContent("Test Button");
    expect(screen.getByRole("button")).toHaveAttribute("type", "button");
    expect(screen.getByRole("button").className).toBe("btn btn-success");
  });

  test("renders a Button of variant warning", async () => {
    render(<Button variant="warning">Test Button</Button>);

    expect(screen.getByRole("button")).toHaveTextContent("Test Button");
    expect(screen.getByRole("button")).toHaveAttribute("type", "button");
    expect(screen.getByRole("button").className).toBe("btn btn-warning");
  });

  test("renders a Button of variant danger", async () => {
    render(<Button variant="danger">Test Button</Button>);

    expect(screen.getByRole("button")).toHaveTextContent("Test Button");
    expect(screen.getByRole("button")).toHaveAttribute("type", "button");
    expect(screen.getByRole("button").className).toBe("btn btn-danger");
  });

  test("renders a Button with outline", async () => {
    render(<Button outline>Test Button</Button>);

    expect(screen.getByRole("button")).toHaveTextContent("Test Button");
    expect(screen.getByRole("button")).toHaveAttribute("type", "button");
    expect(screen.getByRole("button").className).toBe("btn btn--outline");
  });

  test("renders a Button with variant and outline", async () => {
    render(
      <Button outline variant="danger">
        Test Button
      </Button>,
    );

    expect(screen.getByRole("button")).toHaveTextContent("Test Button");
    expect(screen.getByRole("button")).toHaveAttribute("type", "button");
    expect(screen.getByRole("button").className).toBe("btn btn-danger btn--outline");
  });

  test("renders a Button with knockout", async () => {
    render(<Button knockout>Test Button</Button>);

    expect(screen.getByRole("button")).toHaveTextContent("Test Button");
    expect(screen.getByRole("button")).toHaveAttribute("type", "button");
    expect(screen.getByRole("button").className).toBe("btn btn--knockout");
  });

  test("renders a Button with variant and knockout", async () => {
    render(
      <Button knockout variant="danger">
        Test Button
      </Button>,
    );

    expect(screen.getByRole("button")).toHaveTextContent("Test Button");
    expect(screen.getByRole("button")).toHaveAttribute("type", "button");
    expect(screen.getByRole("button").className).toBe("btn btn-danger btn--knockout");
  });

  test("renders a Button with rounded", async () => {
    render(<Button rounded>Test Button</Button>);

    expect(screen.getByRole("button")).toHaveTextContent("Test Button");
    expect(screen.getByRole("button")).toHaveAttribute("type", "button");
    expect(screen.getByRole("button").className).toBe("btn btn--rounded");
  });

  test("renders a Button with fit", async () => {
    render(<Button fit>Test Button</Button>);

    expect(screen.getByRole("button")).toHaveTextContent("Test Button");
    expect(screen.getByRole("button")).toHaveAttribute("type", "button");
    expect(screen.getByRole("button").className).toBe("btn btn--fit");
  });

  test("renders a Button with asIcon", async () => {
    render(<Button asIcon>Test Button</Button>);

    expect(screen.getByRole("button")).toHaveTextContent("Test Button");
    expect(screen.getByRole("button")).toHaveAttribute("type", "button");
    expect(screen.getByRole("button").className).toBe("btn btn--icon");
  });

  test("renders a Button with className", async () => {
    render(<Button className="custom-class">Test Button</Button>);

    expect(screen.getByRole("button")).toHaveTextContent("Test Button");
    expect(screen.getByRole("button")).toHaveAttribute("type", "button");
    expect(screen.getByRole("button").className).toBe("btn custom-class");
  });
});
