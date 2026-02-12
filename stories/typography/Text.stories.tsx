import { sampleLongText, sampleParagraphText, sampleText } from "@stories/support/sampleText";
import OptionList from "@stories/templates/OptionList";
import OptionsByFamilyGrid from "@stories/templates/OptionsByFamilyGrid";
import { asOptionalValue, summarizeValues } from "@stories/utils";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Box, Flex, Grid } from "@/layout";
import {
  FONT_FAMILIES,
  FONT_WEIGHTS,
  type FontFamily,
  type FontWeight,
  TEXT_ALIGNS,
  TEXT_LEADINGS,
  TEXT_SIZES,
  TEXT_TRACKINGS,
  type TextAlign,
  type TextLeading,
  type TextSize,
  type TextTracking,
  TYPOGRAPHY_ELEMENTS,
  TYPOGRAPHY_VARIANTS,
  type TypographyVariant,
} from "@/types";
import { Code, Text } from "@/typography";

const meta: Meta<typeof Text> = {
  title: "Typography/Text",
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
      options: asOptionalValue(TEXT_SIZES),
      description: "Controls font size",
      table: {
        type: { summary: summarizeValues(TEXT_SIZES, true) },
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
      description:
        "If true, prevents text from wrapping by truncating overflowing text with an ellipsis (...) if needed",
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
    <OptionsByFamilyGrid<TextSize>
      optionLabel="Size"
      options={TEXT_SIZES as unknown as TextSize[]}
      renderOption={(family, option) => (
        <Text family={family} size={option}>
          {sampleText}
        </Text>
      )}
    />
  ),
};

export const Weights: Story = {
  render: () => (
    <OptionsByFamilyGrid<FontWeight>
      optionLabel="Weight"
      options={FONT_WEIGHTS as unknown as FontWeight[]}
      renderOption={(family, option) => (
        <Text family={family} weight={option}>
          {sampleText}
        </Text>
      )}
    />
  ),
};

export const Variants: Story = {
  render: () => (
    <OptionsByFamilyGrid<TypographyVariant>
      optionLabel="Variant"
      options={TYPOGRAPHY_VARIANTS as unknown as TypographyVariant[]}
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
              <Text className="italic" size="xs" variant="muted">
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
      optionLabel="Variant"
      options={TYPOGRAPHY_VARIANTS as unknown as TypographyVariant[]}
      renderOption={(family, option) => {
        const Component = () => (
          <Text asForeground family={family} variant={option}>
            {sampleText}
          </Text>
        );
        if (option === "inherit") {
          return (
            <Box className="text-violet-400">
              <Component />{" "}
              <Text className="italic" size="xs" variant="muted">
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
            <Text align={align} key={t} size="sm">
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
      renderOption={(leading: TextLeading) => (
        <Text leading={leading} size="sm">
          {sampleLongText}
        </Text>
      )}
      renderRowTitle={(option) => (
        <>
          {option === undefined && <Text>{"<no value"}</Text>}
          <Code>{option}</Code>
        </>
      )}
    />
  ),
};

export const Tracking: Story = {
  render: () => (
    <OptionsByFamilyGrid<TextTracking>
      optionLabel="Tracking"
      options={TEXT_TRACKINGS as unknown as TextTracking[]}
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
      renderOption={(truncated) => (
        <Text size="sm" truncate={truncated}>
          {sampleLongText}
        </Text>
      )}
      renderRowTitle={(option) => <Text>{option ? "Truncated" : "Not truncated"}</Text>}
    />
  ),
};

export const PolymorphicText: Story = {
  render: () => (
    <Grid className="w-full max-w-4xl" cols="2" gap="2">
      {TYPOGRAPHY_ELEMENTS.map((element, e) => (
        <Flex className="w-16 p-1" justify="center" key={e}>
          <Text align="center" as={element} className="rounded border-1 border-accent border-dotted" key={e}>
            {"<"}
            {element}
            {">"}
          </Text>
        </Flex>
      ))}
    </Grid>
  ),
};
