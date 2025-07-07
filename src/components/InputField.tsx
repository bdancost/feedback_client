import React from "react";

type Props = {
  label: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
};

export default function InputField({
  label,
  type = "text",
  value,
  onChange,
  placeholder = "",
  required = false,
}: Props) {
  return (
    <label className="flex flex-col">
      <span className="font-semibold text-gray-700 mb-2 uppercase tracking-wide">
        {label}
      </span>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="border border-gray-300 rounded-xl p-4
          focus:outline-none focus:ring-4 focus:ring-indigo-400
          transition duration-300 shadow-sm
          placeholder:text-gray-400"
      />
    </label>
  );
}
