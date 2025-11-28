"use client";

import { ReactNode } from "react";

export default function PostLayout({
  title,
  date,
  description,
  children,
  image,
}: {
  title: string;
  date: string;
  description?: string;
  image?: string;
  children: ReactNode;
}) {
  return (
    <article className="max-w-3xl mx-auto px-6 py-10">
      {/* Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{title}</h1>

        <p className="text-gray-600 italic text-sm mb-2">{date}</p>

        {description && (
          <p className="text-gray-700 leading-relaxed text-lg">{description}</p>
        )}

        {image && (
          <img
            src={image}
            alt={title}
            className="mt-6 w-full rounded-xl shadow-lg object-cover"
          />
        )}
      </header>

      {/* Content */}
      <section className="prose prose-lg max-w-none">
        {children}
      </section>
    </article>
  );
}
