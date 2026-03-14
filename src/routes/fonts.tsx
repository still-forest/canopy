import { Button, cn, Flex, Grid, Text } from "@still-forest/canopy";
import { createFileRoute } from "@tanstack/react-router";
import { Fragment, useEffect, useState } from "react";
import { ButtonRadioField } from "@/forms";
import { Layout } from "@/layout";
import type { Theme } from "../context/ThemeProviderContext";
import { useTheme } from "../context/useTheme";

export const Route = createFileRoute("/fonts")({
  component: RouteComponent,
});

function RouteComponent() {
  const [fontWeight, setFontWeight] = useState("font-normal");
  const [fontSpacing, setFontSpacing] = useState("tracking-normal");
  const { theme, setTheme } = useTheme();
  const [highlight, setHighlight] = useState<number | null>(null);

  const THEMES = [
    { label: "Light", value: "light" as Theme },
    { label: "Dark", value: "dark" as Theme },
  ];

  const FONT_NAMES = [
    "Cinzel",
    "Cinzel Decorative",
    "Cormorant",
    "Cormorant Garamond",
    "Cormorant Infant",
    "Cormorant SC",
    "Cormorant Unicase",
    "Georgia",
    "Iowan Old Style",
    "Times New Roman",
    "Libre Caslon Text",
    "Linden Hill",
    "Sorts Mill Goudy",
    "EB Garamond",
    "Gilda Display",
    "Baskervville",
    "Baskervville SC",
    "Cardo",
    "Cinzel Decorative",
    "Cinzel",
    "Cormorant",
    "Cormorant Garamond",
    "Cormorant Infant",
    "Cormorant SC",
    "Cormorant Unicase",
    "Crimson Text",
    "EB Garamond",
    "Gilda Display",
    "Goudy Bookletter 1911",
    "Jacques Francois",
    "Libre Caslon Text",
    "Linden Hill",
    "Literata",
    "Newsreader",
    "Noto Serif HK",
    "Playfair Display SC",
    "Prata",
    "Rosarivo",
    "Sorts Mill Goudy",
  ]
    .filter((fontName, index, self) => self.indexOf(fontName) === index)
    .sort();

  useEffect(() => {
    const families = FONT_NAMES.map((name) => `family=${name.replace(/ /g, "+")}`).join("&");
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = `https://fonts.googleapis.com/css2?${families}&display=swap`;
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, [FONT_NAMES.map]);

  const FONT_WEIGHT_CLASSES = [
    "font-thin",
    "font-extralight",
    "font-light",
    "font-normal",
    "font-medium",
    "font-semibold",
    "font-bold",
    "font-black",
  ];

  const FONT_SPACING_CLASSES = [
    "tracking-tighter",
    "tracking-tight",
    "tracking-normal",
    "tracking-wide",
    "tracking-wider",
    "tracking-widest",
  ];

  const classNames = cn(fontWeight, fontSpacing, "text-center");

  const fontWeightOptions = FONT_WEIGHT_CLASSES.map((weight) => ({
    label: weight.replace("font-", ""),
    value: weight,
  }));
  const fontSpacingOptions = [
    ...FONT_SPACING_CLASSES.map((spacing) => ({ label: spacing.replace("tracking-", ""), value: spacing })),
    { label: "16", value: "tracking-[16px]" },
    { label: "24", value: "tracking-[24px]" },
    { label: "32", value: "tracking-[32px]" },
  ];

  return (
    <Layout>
      <Flex align="center" className="h-screen py-8" direction="col" gap="2" justify="center">
        <Flex className="col-span-3 mb-4" direction="col" gap="2" justify="between">
          <ButtonRadioField
            name="font-weight"
            onChange={setFontWeight}
            options={fontWeightOptions}
            value={fontWeight}
          />
          <ButtonRadioField
            name="font-spacing"
            onChange={setFontSpacing}
            options={fontSpacingOptions}
            value={fontSpacing}
          />
          <ButtonRadioField name="theme" onChange={setTheme} options={THEMES} value={theme} />
        </Flex>
        <Grid className="overflow-y-auto" cols="3" gap="2">
          {FONT_NAMES.map((fontName, index) => (
            <Fragment key={fontName}>
              <Button onClick={() => setHighlight(index)} size="md" variant="ghost">
                {fontName}
              </Button>
              <Text
                className={cn(classNames, highlight !== index && "text-muted-foreground")}
                size="4xl"
                style={{ fontFamily: fontName }}
              >
                Manor
              </Text>
              <Text
                className={cn(classNames, highlight !== index && "text-muted-foreground")}
                size="4xl"
                style={{ fontFamily: fontName }}
              >
                MANOR
              </Text>
            </Fragment>
          ))}
        </Grid>
      </Flex>
    </Layout>
  );
}
