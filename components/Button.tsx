import { forwardRef } from "react"
import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLElement> {}


const Button = forwardRef<HTMLButtonElement,ButtonProps > (({

  className,
  children,
  disabled,
  type= 'button',
  ...props
},ref) => {
  return (
    <button
    title="like"
    type={type}
    className={twMerge(`
    w-full
    rounded-full
    bg-blue-500
    border-transparent
    p-3
    disabled:cursor-not-allowed
    disabled:opacity-50
    text-black
    font-bold
    hover:opacity-75
    transition

    `,
    className
    )}
    disabled={disabled}
    ref={ref}
    {...props}
    >
      {children}
    </button>
  )
})

Button.displayName = 'Button';
export default Button