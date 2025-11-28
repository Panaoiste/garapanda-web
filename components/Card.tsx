import React from "react";

export function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-6 bg-white rounded-2xl shadow-md border border-gray-200 my-4">
      {children}
    </div>
  );
}
