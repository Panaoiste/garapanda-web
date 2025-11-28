import React from "react";

export function Steps({ children }: { children: React.ReactNode }) {
  return (
    <ol className="border-l border-gray-300 ml-4 my-6 space-y-6">
      {children}
    </ol>
  );
}
