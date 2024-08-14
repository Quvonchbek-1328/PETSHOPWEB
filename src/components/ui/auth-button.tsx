import React from 'react';
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'contained' | 'outlined';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  autoWidth?: boolean;
}

const AuthButton: React.FC<ButtonProps> = ({
  children,
  variant = 'contained',
  size = 'medium',
  fullWidth = false,
  autoWidth = false,
  ...props
}) => {

  const baseStyles = 'inline-flex items-center justify-center border-2 lg:text-[18px] text-md:[14px] text-sm font-medium rounded-[4px]';

  const variantStyles = {
    contained: 'bg-authbtn border-authbtn text-white hover:bg-[#2a1b87]',
    outlined: 'border-authbtn text-authbtn',
  };

  const sizeStyles = {
    small: 'px-2 py-1 text-sm',
    medium: 'px-4 py-2 text-[15px]',
    large: 'px-6 py-[15px]',
  };

  const widthStyles = {
    fullWidth: 'w-full py-[9px]',
    authWidth: '',
  };

  const combinedStyles = cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    {
      [widthStyles.fullWidth]: fullWidth,
      [widthStyles.authWidth]: autoWidth,
    }
  );

  return (
    <button className={combinedStyles} {...props}>
      {children}
    </button>
  );
};

export default AuthButton;
