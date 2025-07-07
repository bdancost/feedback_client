import React from "react";

type Option = {
  value: number;
  label: string;
};

type Props = {
  label: string;
  options: Option[];
  value: number;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

export default function SelectField({
  label,
  options,
  value,
  onChange,
}: Props) {
  return (
    <label className="flex flex-col">
      <span className="font-semibold text-gray-700 mb-2 uppercase tracking-wide">
        {label}
      </span>
      <select
        value={value}
        onChange={onChange}
        className="border border-gray-300 rounded-xl p-4
          focus:outline-none focus:ring-4 focus:ring-indigo-400
          transition duration-300 shadow-sm"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}
