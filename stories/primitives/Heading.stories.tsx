import Code from "@root/src/components/Code";
import OptionList from "@root/stories/templates/OptionList";
import OptionsByFamilyGrid from "@root/stories/templates/OptionsByFamilyGrid";
import { asOptionalValue, summarizeValues } from "@stories/utils";
import type { Meta, StoryObj } from "@storybook/react";
import { Box, Flex, Heading, Text } from "@/main";
import {
  FONT_FAMILIES,
  FONT_SIZES,
  FONT_WEIGHTS,
  type FontFamily,
  type FontSize,
  type FontWeight,
  HEADING_LEVELS,
  TEXT_ALIGNS,
  TEXT_LEADINGS,
  TEXT_TRACKINGS,
  type TextAlign,
  type TextLeading,
  type TextTracking,
  TYPOGRAPHY_VARIANTS,
  type TypographyVariant,
} from "@/types";

const meta: Meta<typeof Heading> = {
  title: "Primitives/Typography/Heading",
  component: Heading,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: asOptionalValue(TYPOGRAPHY_VARIANTS),
      description: "Controls text color, according to the theme",
      table: {
        type: { summary: summarizeValues(TYPOGRAPHY_VARIANTS, true) },
      },
    },
    level: {
      control: "select",
      options: asOptionalValue(HEADING_LEVELS),
      description: "Controls heading level to use, translating to usage of an `<hX>` HTML element",
      table: {
        type: { summary: summarizeValues(HEADING_LEVELS, true) },
      },
    },
    size: {
      control: "select",
      options: asOptionalValue(FONT_SIZES),
      description: "Controls font size on a more granular basis (this will override `level`)",
      table: {
        type: { summary: summarizeValues(FONT_SIZES, true) },
      },
    },
    family: {
      control: "select",
      options: asOptionalValue(FONT_FAMILIES),
      description: "Controls the font family",
      table: {
        type: { summary: summarizeValues(FONT_FAMILIES, true) },
      },
    },
    weight: {
      control: "select",
      options: asOptionalValue(FONT_WEIGHTS),
      description: "Controls font weight",
      nullable: true,
      table: {
        type: { summary: summarizeValues(FONT_WEIGHTS, true) },
      },
    },
    align: {
      control: "select",
      options: asOptionalValue(TEXT_ALIGNS),
      description: "Controls text alignment",
      table: {
        type: { summary: summarizeValues(TEXT_ALIGNS, true) },
      },
    },
    leading: {
      control: "select",
      options: asOptionalValue(TEXT_LEADINGS),
      description: "Controls the leading, or line height, of text",
      table: {
        type: { summary: summarizeValues(TEXT_LEADINGS, true) },
      },
    },
    tracking: {
      control: "select",
      options: asOptionalValue(TEXT_TRACKINGS),
      description: "Controls text tracking (a.k.a. letter spacing)",
      table: {
        type: { summary: summarizeValues(TEXT_TRACKINGS, true) },
      },
    },
    asForeground: {
      description:
        "Use foreground (lighter) variant for accent colors (info, warning, success, destructive).  No effect on other variants.",
      control: "boolean",
    },
    numeric: {
      description: "If true, use tabular numbers for even spacing",
    },
    className: {
      control: "text",
      description: "Comma-separated CSS class names",
      table: {
        type: { summary: "string" },
      },
    },
    children: {
      description: "Content (text) to render",
      table: {
        type: { summary: "string | React.ReactNode" },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Heading>;

const sampleHeading = "Old Man Yells At Cloud";
const sampleLongHeading = "Local Man Loses Pants, Life; Beaver Rescue Falls Short";
const sampleLongText =
  " \
  Now, to take the ferry cost a nickel, and in those days, nickels \
  had pictures of bumblebees on 'em. Gimme five bees for a quarter, \
  you'd say. Now where was I... oh yeah. The important thing was \
  that I had an onion tied to my belt, which was the style at the \
  time. You couldn't get white onions, because of the war. The only \
  thing you could get was those big yellow ones.";

export const Default: Story = {
  args: {
    children: "This is a Heading component",
  },
  decorators: [
    (Story) => (
      <Box className="min-w-[400px]">
        <Story />
      </Box>
    ),
  ],
};

export const WithSampleProps: Story = {
  args: {
    level: "3",
    family: "serif",
    weight: "normal",
    tracking: "tighter",
    variant: "muted",
    numeric: false,
    children: "This is a Heading component",
  },
  decorators: [
    (Story) => (
      <Box className="min-w-[400px]">
        <Story />
      </Box>
    ),
  ],
};

export const HeadingLevels: Story = {
  render: () => (
    <Flex direction="col" gap="4" className="max-w-2xl">
      {HEADING_LEVELS.map((level) => (
        <Heading key={level} level={level}>
          Heading Level {level} (h{level})
        </Heading>
      ))}
    </Flex>
  ),
};

export const Families: Story = {
  render: () => (
    <OptionList<FontFamily>
      options={FONT_FAMILIES as unknown as FontFamily[]}
      renderOption={(family: FontFamily) => (
        <Heading level="4" family={family}>
          {sampleHeading}
        </Heading>
      )}
    />
  ),
};

export const Sizes: Story = {
  render: () => (
    <>
      <OptionsByFamilyGrid<FontSize>
        options={FONT_SIZES.slice(0, 6) as unknown as FontSize[]}
        propKey="size"
        renderOption={(family, option) => (
          <Heading level="4" align="center" family={family} size={option}>
            {sampleHeading}
          </Heading>
        )}
      />
      <Text variant="muted" className="mt-8">
        Note: Options for{" "}
        <Text as="span" variant="muted" family="mono">
          {FONT_SIZES.slice(6).join(", ")}
        </Text>{" "}
        are not displayed.
      </Text>
    </>
  ),
};

export const Weights: Story = {
  render: () => (
    <>
      <OptionsByFamilyGrid<FontWeight>
        options={FONT_WEIGHTS as unknown as FontWeight[]}
        propKey="weight"
        renderOption={(family, option) => (
          <Heading level="4" align="center" family={family} weight={option}>
            {sampleHeading}
          </Heading>
        )}
      />
      <Text variant="muted" className="mt-8">
        Note: Certain fonts may not support all weights.
      </Text>
    </>
  ),
};

export const Variants: Story = {
  render: () => (
    <OptionsByFamilyGrid<TypographyVariant>
      options={TYPOGRAPHY_VARIANTS as unknown as TypographyVariant[]}
      propKey="variant"
      renderOption={(family, option) => {
        const Component = () => (
          <Heading level="4" align="center" family={family} variant={option}>
            {sampleHeading}
          </Heading>
        );

        if (option === "inherit") {
          return (
            <Box className="text-violet-400">
              <Component />{" "}
              <Text variant="muted" size="xs" className="italic">
                (container text color = violet-400)
              </Text>
            </Box>
          );
        }
        return <Component />;
      }}
    />
  ),
};

export const VariantsAsForeground: Story = {
  render: () => (
    <OptionsByFamilyGrid<TypographyVariant>
      options={TYPOGRAPHY_VARIANTS as unknown as TypographyVariant[]}
      propKey="variant"
      renderOption={(family, option) => {
        const Component = () => (
          <Heading level="4" align="center" family={family} variant={option} asForeground>
            {sampleHeading}
          </Heading>
        );

        if (option === "inherit") {
          return (
            <Box className="text-violet-400">
              <Component />{" "}
              <Text variant="muted" size="xs" className="italic">
                (container text color = violet-400)
              </Text>
            </Box>
          );
        }
        return <Component />;
      }}
    />
  ),
};

export const Leading: Story = {
  render: () => (
    <OptionList<TextLeading>
      options={[undefined, ...TEXT_LEADINGS] as unknown as TextLeading[]}
      gapY="0"
      renderRowTitle={(option) => (
        <>
          {option === undefined && <Text>{"<no value"}</Text>}
          <Code>{option}</Code>
        </>
      )}
      renderOption={(leading: TextLeading) => (
        <>
          <Heading leading={leading}>{sampleHeading}</Heading>
          <Text variant="muted" size="sm">
            {sampleLongText}
          </Text>
        </>
      )}
    />
  ),
};

export const Tracking: Story = {
  render: () => (
    <OptionsByFamilyGrid<TextTracking>
      options={TEXT_TRACKINGS as unknown as TextTracking[]}
      propKey="tracking"
      renderOption={(family, option) => (
        <Heading level="4" align="center" family={family} tracking={option}>
          {sampleHeading}
        </Heading>
      )}
    />
  ),
};

export const Truncation: Story = {
  render: () => (
    <Box className="max-w-[600px]">
      <OptionList<boolean>
        options={[true, false]}
        renderRowTitle={(option) => <Text align="right">{option ? "Truncated" : "Not truncated"}</Text>}
        renderOption={(truncated) => <Heading truncate={truncated}>{sampleLongHeading}</Heading>}
      />
    </Box>
  ),
};

export const Alignments: Story = {
  render: () => (
    <OptionList<TextAlign>
      options={TEXT_ALIGNS as unknown as TextAlign[]}
      gapY="0"
      renderOption={(align: TextAlign) => (
        <>
          <Heading align={align}>{sampleHeading}</Heading>
          <Text variant="muted" align={align} size="sm">
            {sampleLongText}
          </Text>
        </>
      )}
    />
  ),
};
