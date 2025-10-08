import { Slider as BaseSlider } from "@/components/ui/slider";

type SliderProps = React.ComponentProps<typeof BaseSlider>;

export const Slider = (props: SliderProps) => <BaseSlider {...props} />;
