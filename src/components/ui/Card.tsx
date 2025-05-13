import React from "react";

interface CardProps {
  children: React.ReactNode;
  title?: string;
  variant?: "default" | "success" | "warning";
}

export const Card: React.FC<CardProps> = ({ children, title, variant = "default" }) => {
  const variantClasses = {
    default: "border-gray-200",
    success: "border-green-500 bg-green-50",
    warning: "border-yellow-500 bg-yellow-50",
  };

  return (
    <div className={`border rounded-lg p-6 shadow-sm ${variantClasses[variant]}`}>
      {title && <h2 className="text-xl font-semibold mb-4">{title}</h2>}
      <div className="space-y-4">
        {children}
      </div>
    </div>
  );
};

export const CardRow: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="flex justify-between">
    <span className="text-gray-600 font-medium">{label}</span>
    <span className="text-gray-900">{value}</span>
  </div>
);