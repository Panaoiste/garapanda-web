import React from "react";

export function Subtitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl font-semibold mt-4 mb-2 text-gray-800">
      {children}
    </h2>
  );
}
