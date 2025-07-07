import React from "react";

type Props = {
  label: string;
  options: number[];
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
        {options.map((num) => (
          <option key={num} value={num}>
            {num} {num === 1 ? "estrela" : "estrelas"}
          </option>
        ))}
      </select>
    </label>
  );
}
