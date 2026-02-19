import React from "react";

interface InputProps {
  label: string;
  type?: "text" | "email" | "password";
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  error?: string;
  name: string;
}

const Input: React.FC<InputProps> = ({
  label,
  type = "text",
  value,
  onChange,
  required = false,
  error,
  name,
}) => {
  return (
    <div className="mb-4">
      <label className="block mb-1 font-medium">
        {label} {required && "*"}
      </label>

      <input
        name={name}   
        type={type}
        value={value}
        onChange={onChange}
        className="w-full p-2 border rounded"
      />

      {error && (
        <p className="text-red-500 text-sm mt-1">
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;