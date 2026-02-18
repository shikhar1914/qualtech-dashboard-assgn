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
}) => {
  return (
    <div className="mb-4">
      <label className="block mb-1 font-medium">
        {label} {required && "*"}
      </label>

      <input
        type={type}
        value={value}
        onChange={onChange}
        className={`w-full p-2 border rounded focus:outline-none ${
          error ? "border-red-500" : "border-gray-300"
        }`}
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