import { Fragment } from "react";
import { Flex, Grid } from "@/layout";
import type { Gap } from "@/types";
import { Code, type HeadingProps } from "@/typography";
import { cn } from "@/utils";

type ValueOf<T> = T[keyof T];
type OptionTypes = ValueOf<HeadingProps> & boolean;

interface Props<T extends OptionTypes> {
  options: T[];
  renderRowTitle?: (option: T) => React.ReactNode;
  renderOption: (option: T) => React.ReactNode;
  gapY?: Gap;
  withOutline?: boolean;
}

export default function OptionList<T extends OptionTypes>({
  options,
  renderRowTitle = (option) => <Code>{option as string}</Code>,
  renderOption,
  gapY = "6",
  withOutline = true,
}: Props<T>) {
  return (
    <Grid className="w-full max-w-4xl" cols="6" gap="4" gapY={gapY}>
      {options.map((option, f) => (
        <Fragment key={f}>
          <Flex align="center" className="col-start-1" justify="end">
            {renderRowTitle(option)}
          </Flex>

          <Flex
            className={cn(
              "-col-end-1 col-start-2 rounded p-1",
              withOutline && "border-1 border-gray-300 border-dotted",
            )}
            direction="col"
            gap="4"
            gapY={gapY}
          >
            {renderOption(option)}
          </Flex>
        </Fragment>
      ))}
    </Grid>
  );
}
