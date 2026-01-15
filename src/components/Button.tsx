import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'sea';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 border text-sm font-semibold transition-all duration-300 focus:outline-none";
  
  const variants = {
    primary: "border-transparent text-white bg-coffee-900 hover:bg-black rounded-sm shadow-sm",
    outline: "border-coffee-200 text-coffee-800 bg-transparent hover:bg-coffee-50 rounded-sm",
    sea: "border-transparent text-white bg-sea-600 hover:bg-sea-500 rounded-sm shadow-sm"
  };

  const widthStyle = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthStyle} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;