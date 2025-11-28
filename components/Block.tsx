import React from "react";

export function Block({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-4 bg-gray-100 border border-gray-300 rounded-md my-4">
      {children}
    </div>
  );
}
