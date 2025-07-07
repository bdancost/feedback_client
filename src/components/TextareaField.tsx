import React from "react";

type Props = {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  required?: boolean;
};

export default function TextareaField({
  label,
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
      <textarea
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="border border-gray-300 rounded-xl p-4 resize-y min-h-[120px]
          focus:outline-none focus:ring-4 focus:ring-indigo-400
          transition duration-300 shadow-sm
          placeholder:text-gray-400"
      />
    </label>
  );
}
