import React from 'react';

interface FileInputProps {
  label?: string;
  onChange: (file: File | null) => void;
  accept?: string;
  error?: string;
  className?: string;
}

const FileInput: React.FC<FileInputProps> = ({
  label,
  onChange,
  accept,
  error,
  className = '',
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    onChange(file);
  };

  const baseStyles = 'border rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2';
  const errorStyles = error ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500';

  return (
    <div className="flex flex-col gap-1">
      {label && <label className="text-sm font-medium text-gray-700">{label}</label>}
      <input
        type="file"
        className={`${baseStyles} ${errorStyles} ${className}`}
        onChange={handleChange}
        accept={accept}
      />
      {error && <span className="text-sm text-red-500">{error}</span>}
    </div>
  );
};

export default FileInput;