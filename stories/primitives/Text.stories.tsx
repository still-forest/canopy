import Code from "@root/src/components/Code";
import OptionList from "@root/stories/templates/OptionList";
import OptionsByFamilyGrid from "@root/stories/templates/OptionsByFamilyGrid";
import { sampleLongText, sampleParagraphText, sampleText } from "@stories/support/sampleText";
import { asOptionalValue, summarizeValues } from "@stories/utils";
import type { Meta, StoryObj } from "@storybook/react";
import { Box, Flex, Grid, Text } from "@/main";

import {
  FONT_FAMILIES,
  FONT_SIZES,
  FONT_WEIGHTS,
  type FontFamily,
  type FontSize,
  type FontWeight,
  TEXT_ALIGNS,
  TEXT_LEADINGS,
  TEXT_TRACKINGS,
  type TextAlign,
  type TextLeading,
  type TextTracking,
  TYPOGRAPHY_ELEMENTS,
  TYPOGRAPHY_VARIANTS,
  type TypographyVariant,
} from "@/types";

const meta: Meta<typeof Text> = {
  title: "Primitives/Typography/Text",
  component: Text,
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
    size: {
      control: "select",
      options: asOptionalValue(FONT_SIZES),
      description: "Controls font size",
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
    truncate: {
      description: "If true, prevents text from wrapping by truncating overflowing text with an ellipsis (…) if needed",
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
    as: {
      control: "select",
      options: asOptionalValue(TYPOGRAPHY_ELEMENTS),
      description: "Specific HTML element to use",
      table: {
        type: { summary: summarizeValues(TYPOGRAPHY_ELEMENTS, true) },
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
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    children: "This is a Text component",
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
    size: "lg",
    family: "serif",
    weight: "normal",
    tracking: "tighter",
    variant: "muted",
    numeric: false,
    children: "This is a Text component",
  },
  decorators: [
    (Story) => (
      <Box className="min-w-[400px]">
        <Story />
      </Box>
    ),
  ],
};

export const Families: Story = {
  render: () => (
    <OptionList<FontFamily>
      options={FONT_FAMILIES as unknown as FontFamily[]}
      renderOption={(family: FontFamily) => <Text family={family}>{sampleText}</Text>}
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
          <Text family={family} size={option}>
            {sampleText}
          </Text>
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
          <Text family={family} weight={option}>
            {sampleText}
          </Text>
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
          <Text family={family} variant={option}>
            {sampleText}
          </Text>
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
          <Text family={family} variant={option} asForeground>
            {sampleText}
          </Text>
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

export const Alignments: Story = {
  render: () => (
    <OptionList<TextAlign>
      options={TEXT_ALIGNS as unknown as TextAlign[]}
      renderOption={(align: TextAlign) => (
        <>
          {sampleParagraphText.map((text, t) => (
            <Text align={align} size="sm" key={t}>
              {text}
            </Text>
          ))}
        </>
      )}
    />
  ),
};

export const Leading: Story = {
  render: () => (
    <OptionList<TextLeading>
      options={[undefined, ...TEXT_LEADINGS] as unknown as TextLeading[]}
      renderRowTitle={(option) => (
        <>
          {option === undefined && <Text>{"<no value"}</Text>}
          <Code>{option}</Code>
        </>
      )}
      renderOption={(leading: TextLeading) => (
        <Text leading={leading} size="sm">
          {sampleLongText}
        </Text>
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
        <Text align="center" family={family} tracking={option}>
          {sampleText}
        </Text>
      )}
    />
  ),
};

export const Truncation: Story = {
  render: () => (
    <OptionList<boolean>
      options={[true, false]}
      renderRowTitle={(option) => <Text>{option ? "Truncated" : "Not truncated"}</Text>}
      renderOption={(truncated) => (
        <Text truncate={truncated} size="sm">
          {sampleLongText}
        </Text>
      )}
    />
  ),
};

export const PolymorphicText: Story = {
  render: () => (
    <Grid cols="2" gap="2" className="w-full max-w-4xl">
      {TYPOGRAPHY_ELEMENTS.map((element, e) => (
        <Flex key={e} justify="center" className="w-16 p-1">
          <Text key={e} as={element} align="center" className="rounded border-1 border-accent border-dotted">
            {"<"}
            {element}
            {">"}
          </Text>
        </Flex>
      ))}
    </Grid>
  ),
};
