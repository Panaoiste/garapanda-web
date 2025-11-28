import React from "react";

export function Info({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-l-4 border-blue-500 bg-blue-50 px-4 py-3 rounded-md my-4 text-blue-900">
      <strong className="block mb-1">ℹ️ Info</strong>
      <div>{children}</div>
    </div>
  );
}
