import * as Slider from '@radix-ui/react-slider';

import   './SliderRange.css'
import '@radix-ui/colors/black-alpha.css';
import '@radix-ui/colors/violet.css';
interface SliderRangeProps{
    value?:number;
    onChange?:(value:number)=> void;
}

const SliderRange :React.FC<SliderRangeProps> = ({value = 1,onChange}) => {

    const handleChange =(newValue:number[])=>{
        onChange?.(newValue[0])
    }

  return (
    <form>
    <Slider.Root
     defaultValue={[1]}
     value={[value]}
     onValueChange={handleChange}
     max={1}
     step={0.11}
     aria-label='Volume'
     style={{width:'100px'}}
    className="SliderRoot" >
      <Slider.Track className="SliderTrack">
        <Slider.Range className="SliderRange" />
      </Slider.Track>
      <Slider.Thumb  className="SliderThumb" aria-label="Volume" />
    </Slider.Root>
  </form>

  )
}

export default SliderRange;