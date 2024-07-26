import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type,placeholder, disabled, ...props }, ref) => {
    return (
      <input
        title='input'
        className={twMerge(
          `
        flex 
        w-full
        rounded-md
        bg-white/15
        border
        border-transparent
        p-3
        text-sm
        file:border-0
        file:bg-transparent
        file:text-sm
        file:font-medium
        placeholder:text-neutral-400
        disabled:cursor-not-allowed
        disabled:opacity-50
        focus:outline-none
        `,
          className
        )}
        disabled={disabled}
        ref={ref}
        type={type}
        {...props}
        placeholder={placeholder}
      />
    );
  }
);
Input.displayName = "Input";
export default Input;
