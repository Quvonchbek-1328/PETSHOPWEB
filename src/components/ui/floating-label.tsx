// FloatingLabelInput.tsx
"use client";
import { useState, FC } from "react";
import { cn } from "@/lib/utils";

interface FloatingLabelInputProps {
  id: string;
  type?: string;
  placeholder: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FloatingLabelInput: FC<FloatingLabelInputProps> = ({ id, type = "text", placeholder, onChange }) => {
  const [hasValue, setHasValue] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHasValue(e.target.value !== "");
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <div className="relative">
      <input
        id={id}
        type={type}
        onChange={handleChange}
        className="peer block w-full h-[54px] px-3 text-base bg-transparent border border-[#0000003B] rounded-md focus:outline-none focus:ring-0"
        placeholder=" "
      />
      <label
        htmlFor={id}
        className={cn(
          "absolute left-3 top-[0px] text-[#00000099] cursor-text peer-focus:cursor-default text-sm transition-all duration-200 transform origin-left peer-focus:-top-[9px] peer-focus:text-xs peer-focus:text-[#00000099] peer-focus:bg-white peer-focus:px-1 peer-placeholder-shown:top-[14px] peer-placeholder-shown:text-base peer-placeholder-shown:text-[#00000099] peer-placeholder-shown:scale-100",
          { "-top-2 text-xs text-blue-600": hasValue }
        )}
      >
        {placeholder}
      </label>
    </div>
  );
};

export default FloatingLabelInput;
