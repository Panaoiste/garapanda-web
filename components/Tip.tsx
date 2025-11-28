import React from "react";

export function Tip({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-l-4 border-green-500 bg-green-50 px-4 py-3 rounded-md my-4 text-green-900">
      <strong className="block mb-1">💡 Consejo</strong>
      <div>{children}</div>
    </div>
  );
}
