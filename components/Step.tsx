export function Step({ number, title, children }: any) {
    return (
      <div className="border-l-4 border-blue-500 pl-4 py-3 mb-6">
        <h3 className="text-xl font-semibold text-gray-900">
          Paso {number}: {title}
        </h3>
        <p className="text-gray-700 leading-relaxed mt-2">{children}</p>
      </div>
    );
  }
  