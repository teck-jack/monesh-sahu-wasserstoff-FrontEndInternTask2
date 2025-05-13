import React from "react";

type BadgeProps = {
  children: React.ReactNode;
  variant?: "primary" | "success" | "warning" | "error" | "info";
  className?: string;
};

export const Badge = ({
  children,
  variant = "primary",
  className = "",
}: BadgeProps) => {
  const variantClasses = {
    primary: "bg-blue-100 text-blue-800",
    success: "bg-green-100 text-green-800",
    warning: "bg-yellow-100 text-yellow-800",
    error: "bg-red-100 text-red-800",
    info: "bg-gray-100 text-gray-800",
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
};