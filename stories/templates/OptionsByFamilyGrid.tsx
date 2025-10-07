import { Fragment } from "react";
import { Flex, Grid } from "@/layout";
import type { FontFamily } from "@/types";
import { Code, type HeadingProps, Text } from "@/typography";

type ValueOf<T> = T[keyof T];
type OptionTypes = ValueOf<HeadingProps>;

interface Props<T extends OptionTypes> {
  options: T[];
  renderOption: (family: FontFamily | undefined, option: T) => React.ReactNode;
  children?: React.ReactElement | string;
  optionLabel: string;
}

export default function OptionsByFamilyGrid<T extends OptionTypes>({ options, renderOption, optionLabel }: Props<T>) {
  const families: (FontFamily | undefined)[] = [undefined, "sans", "serif", "mono", "brand"];
  return (
    <Grid className="w-full divide-y divide-dotted divide-gray-300" cols="6" gapX="4">
      <Text align="center" variant="accent" weight="bold">
        {optionLabel}
      </Text>
      {families.map((family, f) => (
        <Fragment key={f}>
          <Text align="center" variant="accent" weight="medium">
            {family ? family.charAt(0).toUpperCase() + family.slice(1) : "Default"}
          </Text>
        </Fragment>
      ))}
      {options.map((option, w) => (
        <Fragment key={w}>
          <Flex align="center" justify="center">
            <Code>{option as string}</Code>
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
