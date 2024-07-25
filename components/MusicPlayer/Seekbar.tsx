import * as Slider from "@radix-ui/react-slider";

import "../SliderRange.css";
import "@radix-ui/colors/black-alpha.css";
import "@radix-ui/colors/violet.css";

interface SeekBarProps {
  value: number;
  max: number;
  min: string;
  onInput: (event: any) => void;
}

const Seekbar = ({ onInput, value, min, max }: SeekBarProps) => {

  const getTime = (time:number) => `${Math.floor(time / 60)}:${(`0${Math.floor(time % 60)}`).slice(-2)}`;


  const handleChange = (newValue: number[]) => {
    onInput?.(newValue[0]);
  };

  return (
    <div
    className="
    flex
    items-center
    justify-center
    gap-5
    "
    >
    
 <p className="text-white">{value === 0 ? '0:00' : getTime(value)}</p>

      <Slider.Root
        defaultValue={[+min]}
        value={[value]}
        onValueChange={handleChange}
        max={max}
        step={0.11}
        aria-label="Volume"
        style={{ maxWidth: "600px", width: "400px" }}
        className="SliderRoot max-w-[15rem]"
      >
        <Slider.Track className="SliderTrack">
          <Slider.Range className="SliderRange" />
        </Slider.Track>
        <Slider.Thumb className="SliderThumb" aria-label="Volume" />
      </Slider.Root>

      <p className="text-white">{max === 0 ? '0:00' : getTime(max)}</p>
    </div>
  );
};

export default Seekbar;
