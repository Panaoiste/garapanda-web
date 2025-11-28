export function Warning({ children }: any) {
    return (
      <div className="bg-red-50 border border-red-300 text-red-800 px-4 py-3 rounded-xl shadow-sm mb-6">
        {children}
      </div>
    );
  }
