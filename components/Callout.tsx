import React from "react";

export function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-4 bg-purple-50 border border-purple-300 rounded-xl my-4 shadow-sm">
      {children}
    </div>
  );
}
