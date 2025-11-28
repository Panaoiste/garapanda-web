export function Section({ title, children }: any) {
    return (
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">{title}</h2>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          {children}
        </div>
      </section>
    );
  }
  