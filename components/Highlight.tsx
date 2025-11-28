import React from "react";

export function Highlight({ children }: { children: React.ReactNode }) {
  return (
    <span className="px-1 bg-yellow-200 rounded">
      {children}
    </span>
  );
}
