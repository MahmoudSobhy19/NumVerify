import React from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

export const Input: React.FC<InputProps> = ({
  className,
  children,
  error,
  ...other
}) => {
  return (
    <>
      <input
        className={`${className} block w-full text-left rounded-lg border p-2.5 text-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 ${
          error
            ? "border border-red-500 bg-red-50 text-red-900 placeholder-red-700"
            : "border-gray-300 bg-gray-50 text-gray-900"
        }`}
        {...other}
      />
      {error && (
        <div className="px-1 text-xs w-full text-left text-red-500">
          {error}
        </div>
      )}
    </>
  );
};
