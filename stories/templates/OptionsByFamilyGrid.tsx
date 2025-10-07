import { Fragment } from "react";
import { Box, Flex, Grid } from "@/layout";
import type { FontFamily } from "@/types";
import { Code, type HeadingProps, Text } from "@/typography";

type ValueOf<T> = T[keyof T];
type OptionTypes = ValueOf<HeadingProps>;

interface Props<T extends OptionTypes> {
  options: T[];
  propKey: keyof HeadingProps;
  renderOption: (family: FontFamily | undefined, option: T) => React.ReactNode;
  children?: React.ReactElement | string;
}

export default function OptionsByFamilyGrid<T extends OptionTypes>({ options, renderOption, propKey }: Props<T>) {
  const families: (FontFamily | undefined)[] = [undefined, "sans", "serif", "mono", "brand"];
  return (
    <Grid className="w-full divide-y divide-dotted divide-gray-300" cols="6" gapX="4">
      <Box />
      {families.map((family, f) => (
        <Fragment key={f}>
          <Text align="center" variant="accent" weight="medium">
            {family ? family.charAt(0).toUpperCase() + family.slice(1) : "Default"}
          </Text>
        </Fragment>
      ))}
      {options.map((option, w) => (
        <Fragment key={w}>
          <Flex align="center" justify="end">
            <Code>
              {propKey}="{option as string}"
            </Code>
          </Flex>
          {families.map((family, f) => (
            <Flex align="center" key={f}>
              {renderOption(family, option)}
            </Flex>
          ))}
        </Fragment>
      ))}
    </Grid>
  );
}
