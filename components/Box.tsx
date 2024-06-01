import { twMerge } from 'tailwind-merge'


interface BoxProps {
    children :React.ReactNode,
    className?:string
}

const Box = ({children,className}:BoxProps) => {
  return (
    <div className='w-full h-full'>
        <div
        className={twMerge(`w-full bg-neutral-900 rounded-lg text-end h-fit
  `,
  className
  )}>
            
        {children}
        </div>
    </div>
  )
}

export default Box