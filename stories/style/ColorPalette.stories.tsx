import type { Meta, StoryObj } from "@storybook/react-vite";

const customColors = ["hydrangea", "french-violet", "english-violet", "coral-reef", "forest"] as const;

const neutralColors = ["neutral", "mist", "olive", "stone", "taupe", "zinc", "gray", "slate", "mauve"] as const;

const baseColors = [
  "red",
  "orange",
  "amber",
  "yellow",
  "lime",
  "green",
  "emerald",
  "teal",
  "cyan",
  "sky",
  "blue",
  "indigo",
  "violet",
  "purple",
  "fuchsia",
  "pink",
  "rose",
] as const;

const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950] as const;

const standaloneColorGroups = [
  ["french-violet", "kensington-green", "oxford-white"],
  ["misted-green", "black-pepper", "chalk-white"],
  ["english-hyacinth", "chantilly-lace", "wolf-grey"],
  ["english-manor", "odessa-pink", "cloud-white"],
  ["wisteria", "white-dove", "portland-gray"],
  ["blue-heather", "paper-white", "white-dove"],
  ["ashland-slate", "simply-white", "october-sky"],
  ["oakwood-manor", "dune-white", "coventry-gray"],
  ["manor-blue", "distant-gray", "witching-hour"],
  ["manor-blue", "white-christmas", "dune-grass"],
  ["amherst-gray", "wythe-blue", "vanilla-milkshake"],
  ["amherst-gray", "porcelain", "oyster"],
] as const;

function ColorSwatch({ color, shade }: { color: string; shade: number }) {
  const varName = `--color-${color}-${shade}`;
  const isLight = shade <= 400;

  return (
    <div
      className="flex h-12 w-full items-center justify-center text-xs font-mono"
      style={{
        backgroundColor: `var(${varName})`,
        color: isLight ? "black" : "white",
      }}
    >
      {shade}
    </div>
  );
}

function StandaloneSwatch({ color }: { color: string }) {
  const varName = `--color-${color}`;

  return (
    <div className="flex flex-1 flex-col">
      <div
        className="h-16 w-full rounded-t border border-b-0 border-gray-200"
        style={{ backgroundColor: `var(${varName})` }}
      />
      <div className="rounded-b border border-gray-200 bg-white px-2 py-1.5 text-xs">
        <div className="font-medium capitalize">{color.replace(/-/g, " ")}</div>
        <div className="font-mono text-gray-500">{color}</div>
      </div>
    </div>
  );
}

function ColorRow({ color }: { color: string }) {
  return (
    <div className="flex flex-col">
      <div className="mb-1 text-sm font-medium capitalize">{color}</div>
      <div className="flex">
        {shades.map((shade) => (
          <ColorSwatch color={color} key={shade} shade={shade} />
        ))}
      </div>
    </div>
  );
}

function ColorSection({
  title,
  description,
  colors,
}: {
  title: string;
  description?: string;
  colors: readonly string[];
}) {
  return (
    <div className="flex flex-col gap-4 p-4">
      <h3 className="heading-3">{title}</h3>
      {description && <p className="text-sm text-gray-600">{description}</p>}
      <div className="flex flex-col gap-3">
        {colors.map((color) => (
          <ColorRow color={color} key={color} />
        ))}
      </div>
    </div>
  );
}

const meta: Meta = {
  title: "Styles/Color Palette",
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const CustomColors: Story = {
  render: () => (
    <ColorSection
      colors={customColors}
      description="Custom colors defined for the Canopy design system"
      title="Custom Colors"
    />
  ),
};

export const NeutralColors: Story = {
  render: () => <ColorSection colors={neutralColors} description="Neutral grayscale colors" title="Neutral Colors" />,
};

export const BaseColors: Story = {
  render: () => <ColorSection colors={baseColors} description="Standard color palette" title="Base Colors" />,
};

export const StandaloneColors: Story = {
  render: () => (
    <div className="flex flex-col gap-4 p-4">
      <h3 className="heading-3">Standalone Colors</h3>
      <p className="text-sm text-gray-600">Benjamin Moore and other standalone colors (grouped as color palettes)</p>
      <div className="grid grid-cols-2 gap-12">
        {standaloneColorGroups.map((group, idx) => (
          <div className="flex w-full gap-1" key={idx}>
            {group.map((color) => (
              <StandaloneSwatch color={color} key={color} />
            ))}
          </div>
        ))}
      </div>
    </div>
  ),
};
