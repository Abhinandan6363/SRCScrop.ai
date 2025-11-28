import React from "react";

export default function InputField({ label, ...props }) {
  return (
    <div className="mb-4">
      <label className="text-sm font-semibold block mb-1">{label}</label>
      <input
        className="w-full border px-3 py-2 rounded-lg focus:ring focus:ring-blue-300"
        {...props}
      />
    </div>
  );
}
