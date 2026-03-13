import type { Meta, StoryObj } from "@storybook/react-vite";

type TokenPair = {
  fill: string;
  foreground: string;
  label: string;
};

type TokenGroup = {
  title: string;
  tokens: TokenPair[];
};

function TokenSwatch({ fill, foreground, label }: TokenPair) {
  return (
    <div
      className="flex h-16 items-center justify-between rounded-lg border px-4 font-mono text-xs"
      style={{
        backgroundColor: `var(--${fill})`,
        color: `var(--${foreground})`,
        borderColor: "oklch(0.5 0 0 / 15%)",
      }}
    >
      <span>{label}</span>
      <span className="opacity-60">{fill}</span>
    </div>
  );
}

function TokenGroupSection({ title, tokens }: TokenGroup) {
  return (
    <div className="flex flex-col gap-2">
      <h4 className="heading-4">{title}</h4>
      <div className="flex flex-col gap-1.5">
        {tokens.map((token) => (
          <TokenSwatch key={token.fill} {...token} />
        ))}
      </div>
    </div>
  );
}

const brandGroups: TokenGroup[] = [
  {
    title: "Primary",
    tokens: [
      { fill: "primary", foreground: "primary-foreground", label: "Primary" },
      { fill: "primary-container", foreground: "primary-container-foreground", label: "Primary Container" },
    ],
  },
  {
    title: "Secondary",
    tokens: [
      { fill: "secondary", foreground: "secondary-foreground", label: "Secondary" },
      { fill: "secondary-container", foreground: "secondary-container-foreground", label: "Secondary Container" },
    ],
  },
  {
    title: "Tertiary",
    tokens: [
      { fill: "tertiary", foreground: "tertiary-foreground", label: "Tertiary" },
      { fill: "tertiary-container", foreground: "tertiary-container-foreground", label: "Tertiary Container" },
    ],
  },
];

const surfaceGroups: TokenGroup[] = [
  {
    title: "Surface",
    tokens: [
      { fill: "surface", foreground: "surface-foreground", label: "Surface" },
      { fill: "surface-variant", foreground: "surface-variant-foreground", label: "Surface Variant" },
    ],
  },
  {
    title: "Surface Containers",
    tokens: [
      { fill: "surface-container-lowest", foreground: "surface-foreground", label: "Lowest" },
      { fill: "surface-container-low", foreground: "surface-foreground", label: "Low" },
      { fill: "surface-container", foreground: "surface-foreground", label: "Base" },
      { fill: "surface-container-high", foreground: "surface-foreground", label: "High" },
      { fill: "surface-container-highest", foreground: "surface-foreground", label: "Highest" },
    ],
  },
];

const statusGroups: TokenGroup[] = [
  {
    title: "Danger",
    tokens: [
      { fill: "danger", foreground: "danger-foreground", label: "Danger" },
      { fill: "danger-container", foreground: "danger-container-foreground", label: "Danger Container" },
    ],
  },
  {
    title: "Success",
    tokens: [
      { fill: "success", foreground: "success-foreground", label: "Success" },
      { fill: "success-container", foreground: "success-container-foreground", label: "Success Container" },
    ],
  },
  {
    title: "Warning",
    tokens: [
      { fill: "warning", foreground: "warning-foreground", label: "Warning" },
      { fill: "warning-container", foreground: "warning-container-foreground", label: "Warning Container" },
    ],
  },
  {
    title: "Info",
    tokens: [
      { fill: "info", foreground: "info-foreground", label: "Info" },
      { fill: "info-container", foreground: "info-container-foreground", label: "Info Container" },
    ],
  },
];

function UtilityLine({ token, label }: { token: string; label: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="h-px w-full" style={{ backgroundColor: `var(--${token})` }} />
      <span className="shrink-0 font-mono text-xs text-muted-foreground">{label}</span>
    </div>
  );
}

function InputPair() {
  return (
    <div className="flex flex-col gap-2">
      <h4 className="heading-4">Input</h4>
      <div className="flex items-center gap-3">
        <div className="h-10 w-full rounded-lg border-2 bg-input border-input-border" />
        <div className="flex shrink-0 flex-col font-mono text-xs text-muted-foreground">
          <span>input (fill)</span>
          <span>input-border (stroke)</span>
        </div>
      </div>
    </div>
  );
}

function RingSwatch() {
  return (
    <div className="flex flex-col gap-2">
      <h4 className="heading-4">Ring</h4>
      <div className="flex items-center gap-3">
        <div
          className="size-10 rounded-lg"
          style={{
            boxShadow: "0 0 0 3px var(--ring)",
          }}
        />
        <span className="shrink-0 font-mono text-xs text-muted-foreground">ring</span>
      </div>
    </div>
  );
}

const meta: Meta = {
  title: "Styles/Theme",
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const BrandColors: Story = {
  render: () => (
    <div className="flex flex-col gap-8 p-8">
      <div>
        <h3 className="heading-3">Brand Colors</h3>
        <p className="text-sm text-muted-foreground">Primary, secondary, and tertiary with container variants</p>
      </div>
      <div className="grid grid-cols-3 gap-8">
        {brandGroups.map((group) => (
          <TokenGroupSection key={group.title} {...group} />
        ))}
      </div>
    </div>
  ),
};

export const Surfaces: Story = {
  render: () => (
    <div className="flex flex-col gap-8 p-8">
      <div>
        <h3 className="heading-3">Surfaces</h3>
        <p className="text-sm text-muted-foreground">Canvas, variant, and graduated container elevation scale</p>
      </div>
      <div className="grid grid-cols-2 gap-8">
        {surfaceGroups.map((group) => (
          <TokenGroupSection key={group.title} {...group} />
        ))}
      </div>
    </div>
  ),
};

export const StatusColors: Story = {
  render: () => (
    <div className="flex flex-col gap-8 p-8">
      <div>
        <h3 className="heading-3">Status Colors</h3>
        <p className="text-sm text-muted-foreground">Bold and container variants for each status</p>
      </div>
      <div className="grid grid-cols-2 gap-8">
        {statusGroups.map((group) => (
          <TokenGroupSection key={group.title} {...group} />
        ))}
      </div>
    </div>
  ),
};

export const UtilityTokens: Story = {
  render: () => (
    <div className="flex flex-col gap-8 p-8 max-w-lg">
      <div>
        <h3 className="heading-3">Utility Tokens</h3>
        <p className="text-sm text-muted-foreground">Borders, inputs, and focus rings</p>
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h4 className="heading-4">Border</h4>
          <UtilityLine label="border" token="border" />
        </div>
        <InputPair />
        <RingSwatch />
      </div>
    </div>
  ),
};
