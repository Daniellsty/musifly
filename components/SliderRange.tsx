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
     step={0.1}
     aria-label='Volume'
    
    className="SliderRoot" >
      <Slider.Track className="SliderTrack">
        <Slider.Range className="SliderRange" />
      </Slider.Track>
      <Slider.Thumb className="SliderThumb" aria-label="Volume" />
    </Slider.Root>
  </form>

    // <RadixSlider.Root
    // className='relative
    // flex
    // items-center
    // select-none
    // tounch-none
    // w-full
    // h-10
    // '
    // defaultValue={[1]}
    // value={[value]}
    // onValueChange={handleChange}
    // max={1}
    // step={0.1}
    // aria-label='Volume'
    // >
    //     <RadixSlider.Track
    //     className='bg-neutral-600
    //     relative
    //     grow
    //     rounded-full
    //     h-[3px]
    //     flex-grow-1
    //     '
    //     >

    //         <RadixSlider.Range
    //         className='absolute
    //         bg-white
    //         rounded-full
    //         h-full
            
    //         '
    //        />
    //     </RadixSlider.Track>
    //    <RadixSlider.Thumb
    //    className="
    //    w-[200rem]
    //    h-[200rem]
    //    bg-red-400
    //    rounded-full
    //    shadow
    //    focus:outline-none
    //    hover:bg-slate-100
    //    " aria-label="Volume" />

    // </RadixSlider.Root>
  )
}

export default SliderRange;