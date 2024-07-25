import { twMerge } from 'tailwind-merge'


interface BoxProps {
    children :React.ReactNode,
    className?:string
}

const Box = ({children,className}:BoxProps) => {
  return (
    <div className='w-full h-full bg-white/20
    bg-opacity-80 
    backdrop-blur-sm '>
        <div
        className={twMerge(`w-full  rounded-lg text-end h-fit
  `,
  className
  )}>
            
        {children}
        </div>
    </div>
  )
}

export default Box