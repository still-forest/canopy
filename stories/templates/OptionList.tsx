import Code from "@root/src/components/Code";
import { Fragment } from "react";
import { Flex, Grid, type HeadingProps } from "@/main";
import type { Gap } from "@/types";

type ValueOf<T> = T[keyof T];
type OptionTypes = ValueOf<HeadingProps> & boolean;

interface Props<T extends OptionTypes> {
  options: T[];
  renderRowTitle?: (option: T) => React.ReactNode;
  renderOption: (option: T) => React.ReactNode;
  gapY?: Gap;
}

export default function OptionList<T extends OptionTypes>({
  options,
  renderRowTitle = (option) => <Code>{option as string}</Code>,
  renderOption,
  gapY = "6",
}: Props<T>) {
  return (
    <Grid cols="6" gap="4" className="w-full max-w-4xl" gapY="6">
      {options.map((option, f) => (
        <Fragment key={f}>
          <Flex justify="end" align="center" className="col-start-1">
            {renderRowTitle(option)}
          </Flex>

          <Flex
            direction="col"
            gap="4"
            gapY={gapY}
            className="-col-end-1 col-start-2 rounded border-1 border-gray-300 border-dotted p-1"
          >
            {renderOption(option)}
          </Flex>
        </Fragment>
      ))}
    </Grid>
  );
}
