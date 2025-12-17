"use client";

import { useState, useEffect } from "react";
import FontResizer from "./FontResizer";

export default function TopBar() {
  const [dateTime, setDateTime] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      };
      setDateTime(now.toLocaleDateString("en-US", options));
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[var(--color-bg-light)] border-b border-[var(--color-border-light)] py-2">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex items-center justify-between">
        <p className="text-sm text-[var(--color-text-secondary)]">
          We build your dream home 🏠
        </p>
        <div className="flex items-center gap-4">
          <FontResizer variant="light" />
          <span className="text-sm text-[var(--color-text-secondary)]">
            {dateTime}
          </span>
        </div>
      </div>
    </div>
  );
}

