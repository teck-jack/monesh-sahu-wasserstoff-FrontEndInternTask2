import React from "react";

interface ButtonProps {
  primary?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  primary = false,
  children,
  onClick,
  type = "button",
  className = "",
}) => {
  const baseClasses = "font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors";
  const primaryClasses = "bg-blue-600 hover:bg-blue-700 text-white";
  const secondaryClasses = "bg-gray-200 hover:bg-gray-300 text-gray-800";

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${primary ? primaryClasses : secondaryClasses} ${className}`}
    >
      {children}
    </button>
  );
};