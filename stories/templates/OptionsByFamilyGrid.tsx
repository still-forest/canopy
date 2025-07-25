import { Fragment } from "react";
import { Box, Flex, Grid } from "@/layout";
import { FONT_FAMILIES, type FontFamily } from "@/types";
import { Code, type HeadingProps, Text } from "@/typography";

type ValueOf<T> = T[keyof T];
type OptionTypes = ValueOf<HeadingProps>;

interface Props<T extends OptionTypes> {
  options: T[];
  propKey: keyof HeadingProps;
  renderOption: (family: FontFamily, option: T) => React.ReactNode;
  children?: React.ReactElement | string;
}

export default function OptionsByFamilyGrid<T extends OptionTypes>({ options, renderOption, propKey }: Props<T>) {
  return (
    <Grid className="w-full divide-y divide-dotted divide-gray-300" cols="5" gapX="4">
      <Box />
      {FONT_FAMILIES.map((family, f) => (
        <Fragment key={f}>
          <Text align="center" variant="accent" weight="medium">
            {family.charAt(0).toUpperCase() + family.slice(1)}
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
          {FONT_FAMILIES.map((family, f) => (
            <Flex align="center" key={f}>
              {renderOption(family, option)}
            </Flex>
          ))}
        </Fragment>
      ))}
    </Grid>
  );
}
