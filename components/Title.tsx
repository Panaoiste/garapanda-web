import React from "react";

export function Title({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="text-4xl font-bold my-6 text-gray-900">
      {children}
    </h1>
  );
}
