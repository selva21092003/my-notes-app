import type { ButtonHTMLAttributes, ReactNode } from "react";

type IconButtonProps = {
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const IconButton = ({ children, ...props }: IconButtonProps) => {
  return (
    <button
      {...props}
      className="p-2 hover:bg-slate-200 transition rounded-full cursor-pointer"
    >
      {children}
    </button>
  );
};

export default IconButton;
