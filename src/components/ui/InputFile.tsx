import React from "react";

interface InputFileProps {
  label: string;
  onChange: (file: File | null) => void;
  required?: boolean;
}

export const InputFile: React.FC<InputFileProps> = ({ label, onChange, required = false }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.files ? e.target.files[0] : null);
  };

  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-medium mb-2">
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type="file"
        onChange={handleChange}
        className="block w-full text-sm text-gray-500
          file:mr-4 file:py-2 file:px-4
          file:rounded-md file:border-0
          file:text-sm file:font-semibold
          file:bg-blue-50 file:text-blue-700
          hover:file:bg-blue-100"
      />
    </div>
  );
};