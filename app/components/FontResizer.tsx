"use client";

import { useState, useEffect } from "react";

interface FontResizerProps {
  variant?: "light" | "dark";
}

export default function FontResizer({ variant = "dark" }: FontResizerProps) {
  const [fontSize, setFontSize] = useState(100);

  useEffect(() => {
    // Load saved font size from localStorage
    const saved = localStorage.getItem("fontSize");
    if (saved) {
      setFontSize(parseInt(saved));
      document.documentElement.style.fontSize = `${parseInt(saved)}%`;
    }
  }, []);

  const changeFontSize = (size: number) => {
    setFontSize(size);
    document.documentElement.style.fontSize = `${size}%`;
    localStorage.setItem("fontSize", size.toString());
  };

  const textColor = variant === "dark" ? "text-slate-400" : "text-[var(--color-text-secondary)]";
  const hoverBg = variant === "dark" ? "hover:bg-slate-700" : "hover:bg-[var(--color-bg-gray)]";
  const hoverText = variant === "dark" ? "hover:text-emerald-400" : "hover:text-[var(--color-primary-500)]";

  return (
    <div className="flex items-center gap-1">
      <span className={`text-[10px] ${textColor} mr-0.5`}>A</span>
      <button
        onClick={() => changeFontSize(Math.max(80, fontSize - 10))}
        className={`flex h-6 w-6 items-center justify-center rounded ${textColor} ${hoverBg} ${hoverText} transition-colors`}
        title="Decrease font size"
        aria-label="Decrease font size"
      >
        <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
        </svg>
      </button>
      <span className={`text-[10px] font-medium ${textColor} min-w-[28px] text-center`}>
        {fontSize}%
      </span>
      <button
        onClick={() => changeFontSize(Math.min(150, fontSize + 10))}
        className={`flex h-6 w-6 items-center justify-center rounded ${textColor} ${hoverBg} ${hoverText} transition-colors`}
        title="Increase font size"
        aria-label="Increase font size"
      >
        <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
      </button>
      <span className={`text-xs ${textColor} ml-0.5`}>A</span>
    </div>
  );
}

