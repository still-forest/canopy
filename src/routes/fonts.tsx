import { AlertDialog, Button, Container, cn, Flex, GridLayout, Input, Text } from "@still-forest/canopy";
import { createFileRoute } from "@tanstack/react-router";
import { XIcon } from "lucide-react";
import { Fragment, useEffect, useState } from "react";
import { ButtonRadioField, InputGroup } from "@/forms";
import { Layout } from "@/layout";
import { DEFAULT_FONT_NAMES } from "../constants/fonts";
import type { Theme } from "../context/ThemeProviderContext";
import { useTheme } from "../context/useTheme";

export const Route = createFileRoute("/fonts")({
  component: RouteComponent,
});

const STORAGE_KEY = "canopy-font-names";

function loadFontNames(): string[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored) as string[];
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }
  } catch {}
  return DEFAULT_FONT_NAMES;
}

function RouteComponent() {
  const [fontWeight, setFontWeight] = useState("font-normal");
  const [fontSpacing, setFontSpacing] = useState("tracking-normal");
  const { theme, setTheme } = useTheme();
  const [highlight, setHighlight] = useState<number | null>(null);
  const [sampleText, setSampleText] = useState("Canopy");
  const [fontNames, setFontNames] = useState(loadFontNames);
  const [newFontName, setNewFontName] = useState("");

  const THEMES = [
    { label: "Light", value: "light" as Theme },
    { label: "Dark", value: "dark" as Theme },
  ];

  function addFont(name: string) {
    const trimmed = name.trim();
    if (!trimmed) return;
    setFontNames((prev) => {
      if (prev.some((f) => f.toLowerCase() === trimmed.toLowerCase())) return prev;
      const next = [...prev, trimmed].sort();
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
    setNewFontName("");
  }

  function removeFont(name: string) {
    setFontNames((prev) => {
      const next = prev.filter((f) => f !== name);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  }

  function resetFonts() {
    localStorage.removeItem(STORAGE_KEY);
    setFontNames(DEFAULT_FONT_NAMES);
    setFontWeight("font-normal");
    setFontSpacing("tracking-normal");
    setSampleText("Canopy");
    setTheme("light");
    setHighlight(null);
  }

  useEffect(() => {
    const families = fontNames.map((name) => `family=${name.replace(/ /g, "+")}`).join("&");
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = `https://fonts.googleapis.com/css2?${families}&display=swap`;
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, [fontNames]);

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
        <Container gap="2" width="md">
          <Flex gap="2">
            <Input
              onChange={(e) => setSampleText(e.target.value)}
              placeholder="Sample text"
              type="text"
              value={sampleText}
            />
            <InputGroup>
              <InputGroup.Input
                name="add-font"
                onChange={(e) => setNewFontName(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && addFont(newFontName)}
                placeholder="Add a Google Font..."
                value={newFontName}
              />
              <InputGroup.Addon align="inline-end">
                <InputGroup.Button onClick={() => addFont(newFontName)}>Add</InputGroup.Button>
              </InputGroup.Addon>
            </InputGroup>
          </Flex>
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
          <ButtonRadioField
            name="theme"
            onChange={(value) => setTheme(value as Theme)}
            options={THEMES}
            value={theme}
          />
          <Flex justify="end">
            <AlertDialog>
              <AlertDialog.Trigger
                render={
                  <Button outline size="sm" variant="danger">
                    Reset to defaults
                  </Button>
                }
              />
              <AlertDialog.Content size="sm">
                <AlertDialog.Header>
                  <AlertDialog.Title>Reset fonts?</AlertDialog.Title>
                  <AlertDialog.Description>
                    This will remove any custom fonts and restore the default list.
                  </AlertDialog.Description>
                </AlertDialog.Header>
                <AlertDialog.Footer>
                  <AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
                  <AlertDialog.Action onClick={resetFonts} variant="danger">
                    Reset
                  </AlertDialog.Action>
                </AlertDialog.Footer>
              </AlertDialog.Content>
            </AlertDialog>
          </Flex>
        </Container>
        <Container className="flex-1 overflow-y-auto" width="md">
          <GridLayout>
            {fontNames.map((fontName, index) => (
              <Fragment key={fontName}>
                <GridLayout.Item className="flex items-center" span={4}>
                  <Button className="px-2 -ml-2" onClick={() => setHighlight(index)} size="sm" variant="ghost">
                    {fontName}
                  </Button>
                  <Button
                    asIcon
                    className="text-muted-foreground"
                    icon={<XIcon />}
                    onClick={() => removeFont(fontName)}
                    rounded
                    size="xs"
                    variant="ghost"
                  />
                </GridLayout.Item>
                <GridLayout.Item span={8}>
                  <Text
                    className={cn(classNames, highlight !== index && "text-muted-foreground")}
                    size="4xl"
                    style={{ fontFamily: fontName }}
                  >
                    {sampleText}
                  </Text>
                </GridLayout.Item>
              </Fragment>
            ))}
          </GridLayout>
        </Container>
      </Flex>
    </Layout>
  );
}
