import type { Meta, StoryObj } from "@storybook/react-vite";

const fontWeights = [100, 200, 300, 400, 500, 600, 700, 800, 900] as const;

const sampleText = "The quick brown fox jumps over the lazy dog";

function FontWeightRow({ weight, fontClass }: { weight: number; fontClass: string }) {
  const weightNames: Record<number, string> = {
    100: "Thin",
    200: "Extra Light",
    300: "Light",
    400: "Regular",
    500: "Medium",
    600: "Semibold",
    700: "Bold",
    800: "Extra Bold",
    900: "Black",
  };

  return (
    <div className="flex items-baseline gap-4">
      <div className="w-24 footnote-xs">
        {weight} {weightNames[weight]}
      </div>
      <div className={`${fontClass} text-3xl`} style={{ fontWeight: weight }}>
        {sampleText}
      </div>
    </div>
  );
}

function FontSection({ title, fontClass, fontVar }: { title: string; fontClass: string; fontVar: string }) {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <h3>{title}</h3>
        <p className="footnote-xs font-mono">{fontVar}</p>
      </div>
      <div className="flex flex-col gap-2">
        {fontWeights.map((weight) => (
          <FontWeightRow fontClass={fontClass} key={weight} weight={weight} />
        ))}
      </div>
    </div>
  );
}

function HeadingShowcase() {
  return (
    <div className="flex flex-col gap-4">
      <h3>Heading Styles</h3>
      <div className="flex flex-col gap-3">
        <div className="flex items-baseline gap-8">
          <div className="w-24 footnote-xs">h1 / .heading-1</div>
          <h1>Heading 1</h1>
        </div>
        <div className="flex items-baseline gap-8">
          <div className="w-24 footnote-xs">h2 / .heading-2</div>
          <h2>Heading 2</h2>
        </div>
        <div className="flex items-baseline gap-8">
          <div className="w-24 footnote-xs">h3 / .heading-3</div>
          <h3>Heading 3</h3>
        </div>
        <div className="flex items-baseline gap-8">
          <div className="w-24 footnote-xs">h4 / .heading-4</div>
          <h4>Heading 4</h4>
        </div>
        <div className="flex items-baseline gap-8">
          <div className="w-24 footnote-xs">h5 / .heading-5</div>
          <h5>Heading 5</h5>
        </div>
        <div className="flex items-baseline gap-8">
          <div className="w-24 footnote-xs">h6 / .heading-6</div>
          <h6>Heading 6</h6>
        </div>
      </div>
    </div>
  );
}

function BodyShowcase() {
  return (
    <div className="flex flex-col gap-4">
      <h3>Body Styles</h3>
      <div className="flex flex-col gap-3">
        <div className="flex items-baseline gap-8">
          <div className="w-24 footnote-xs">.heading-hero</div>
          <p className="heading-hero">Hero Heading</p>
        </div>
        <div className="flex items-baseline gap-8">
          <div className="w-24 footnote-xs">.heading-lead</div>
          <p className="heading-lead">Lead text for introductions and summaries</p>
        </div>
        <div className="flex items-baseline gap-8">
          <div className="w-24 footnote-xs">p / .body-base</div>
          <p>Regular body text for paragraphs and general content.</p>
        </div>
        <div className="flex items-baseline gap-8">
          <div className="w-24 footnote-xs">label / .label</div>
          <label htmlFor="example">Form Label</label>
        </div>
        <div className="flex items-baseline gap-8">
          <div className="w-24 footnote-xs">p.muted</div>
          <p className="muted">Muted text for secondary information</p>
        </div>
        <div className="flex items-baseline gap-8">
          <div className="w-24 footnote-xs">.footnote</div>
          <p className="footnote">Footnote text for small details</p>
        </div>
        <div className="flex items-baseline gap-8">
          <div className="w-24 footnote-xs">.footnote-xs</div>
          <p className="footnote-xs">Extra small footnote text</p>
        </div>
        <div className="flex items-baseline gap-8">
          <div className="w-24 footnote-xs">.eyebrow</div>
          <p className="eyebrow">Eyebrow text for section headings</p>
        </div>
        <div className="flex items-baseline gap-8">
          <div className="w-24 footnote-xs">code / .code</div>
          <p>
            Inline <code>code snippets</code> within text
          </p>
        </div>
      </div>
    </div>
  );
}

const meta: Meta = {
  title: "Styles/Typography",
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const BrandFont: Story = {
  render: () => (
    <div className="p-8">
      <FontSection
        fontClass="font-brand"
        fontVar="--font-brand: var(--font-serif) / Cardo"
        title="Brand Font (Serif)"
      />
    </div>
  ),
};

export const HeadingFont: Story = {
  render: () => (
    <div className="p-8">
      <FontSection
        fontClass="font-heading"
        fontVar="--font-heading: var(--font-serif) / Cormorant Garamond"
        title="Heading Font (Serif)"
      />
    </div>
  ),
};

export const BodyFont: Story = {
  render: () => (
    <div className="p-8">
      <FontSection
        fontClass="font-body"
        fontVar="--font-body: var(--font-sans) / Libre Franklin"
        title="Body Font (Sans)"
      />
    </div>
  ),
};

export const MonoFont: Story = {
  render: () => (
    <div className="p-8">
      <FontSection fontClass="font-mono" fontVar="--font-mono / Nimbus Mono PS" title="Mono Font" />
    </div>
  ),
};

export const Headings: Story = {
  render: () => (
    <div className="p-8">
      <HeadingShowcase />
    </div>
  ),
};

export const BodyStyles: Story = {
  render: () => (
    <div className="p-8">
      <BodyShowcase />
    </div>
  ),
};

export const CompositionHero: Story = {
  render: () => (
    <div className="p-8 max-w-3xl">
      <h3 className="mb-4">Hero Section</h3>
      <div className="flex flex-col gap-4">
        <p className="heading-hero">Welcome to Manor</p>
        <p className="heading-lead">
          A beautiful home management platform designed to help you organize, track, and maintain everything about your
          living space.
        </p>
        <p className="muted">Get started in minutes. No credit card required.</p>
      </div>
    </div>
  ),
};

export const CompositionArticle: Story = {
  render: () => (
    <div className="p-8 max-w-2xl">
      <h3 className="mb-4">Article Layout</h3>
      <article className="flex flex-col gap-4">
        <h1>The Art of Home Organization</h1>
        <p className="muted">Published on January 15, 2025</p>
        <p>
          Creating an organized home is more than just tidying up. It is about establishing systems that work for your
          lifestyle and maintaining them with minimal effort.
        </p>
        <h2>Getting Started</h2>
        <p>
          Begin by assessing each room in your home. Take note of what works and what does not. This initial audit will
          help you identify problem areas and prioritize your efforts.
        </p>
        <h3>The Kitchen</h3>
        <p>
          The kitchen is often the heart of the home. Start by organizing your pantry using clear containers and labels.
          Group similar items together and use the <code>FIFO</code> method (first in, first out) for perishables.
        </p>
        <p className="footnote">Note: These tips are general guidelines. Adjust based on your specific needs.</p>
      </article>
    </div>
  ),
};

export const CompositionCard: Story = {
  render: () => (
    <div className="p-8">
      <h3 className="mb-4">Card Layouts</h3>
      <div className="grid grid-cols-3 gap-6">
        <div className="rounded-lg border p-6 flex flex-col gap-2">
          <h4>Room Overview</h4>
          <p>Track and manage all the details about your living spaces.</p>
          <p className="footnote">12 rooms configured</p>
        </div>
        <div className="rounded-lg border p-6 flex flex-col gap-2">
          <h4>Maintenance Tasks</h4>
          <p>Stay on top of repairs and upkeep with scheduled reminders.</p>
          <p className="footnote">3 tasks due this week</p>
        </div>
        <div className="rounded-lg border p-6 flex flex-col gap-2">
          <h4>Inventory</h4>
          <p>Keep track of appliances, furniture, and important items.</p>
          <p className="footnote">156 items tracked</p>
        </div>
      </div>
    </div>
  ),
};

export const CompositionForm: Story = {
  render: () => (
    <div className="p-8 max-w-md">
      <h3 className="mb-4">Form Layout</h3>
      <form className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <label htmlFor="name">Room Name</label>
          <input className="rounded border px-3 py-2" id="name" placeholder="e.g., Living Room" type="text" />
          <p className="footnote-xs">Enter a descriptive name for this room</p>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="description">Description</label>
          <textarea
            className="rounded border px-3 py-2"
            id="description"
            placeholder="Optional notes about this room..."
            rows={3}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="size">Square Footage</label>
          <input className="rounded border px-3 py-2" id="size" placeholder="0" type="number" />
          <p className="footnote-xs">Approximate size in square feet</p>
        </div>
      </form>
    </div>
  ),
};

export const CompositionDocumentation: Story = {
  render: () => (
    <div className="p-8 max-w-2xl">
      <h3 className="mb-4">Documentation Layout</h3>
      <div className="flex flex-col gap-6">
        <div>
          <h2>API Reference</h2>
          <p className="heading-lead">Learn how to integrate with the Manor API.</p>
        </div>
        <div className="flex flex-col gap-2">
          <h4>Authentication</h4>
          <p>
            All API requests require a valid API key. Include your key in the <code>Authorization</code> header:
          </p>
          <pre className="rounded bg-gray-100 p-4 font-mono text-sm">Authorization: Bearer your-api-key</pre>
        </div>
        <div className="flex flex-col gap-2">
          <h5>Rate Limits</h5>
          <p>The API is rate limited to 100 requests per minute per API key.</p>
          <p className="muted">If you need higher limits, contact support to discuss enterprise options.</p>
        </div>
        <div className="flex flex-col gap-2">
          <h6>Error Handling</h6>
          <p>
            All errors return a JSON response with an <code>error</code> field containing a human-readable message.
          </p>
          <p className="footnote">See the Errors section for a complete list of error codes.</p>
        </div>
      </div>
    </div>
  ),
};
