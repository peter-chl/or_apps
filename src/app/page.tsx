import Link from "next/link";
import { parts, lectures } from "@/content/nav";

export default function Contents() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-10 sm:px-8 lg:py-14">
      <header className="mb-12">
        <div className="text-xs font-semibold uppercase tracking-wider text-muted">
          Lecture Notes
        </div>
        <h1 className="mt-2 font-serif text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
          Applications of Operations Research
        </h1>
        <p className="mt-5 font-serif text-lg leading-relaxed text-muted">
          Each lecture takes one real decision problem — routing a fleet,
          staffing a call center, pricing airline seats, committing power
          plants — and works through it the same way: what the decision is,
          how to write it as a mathematical model, how that model is solved,
          and what the answer tells you.
        </p>
      </header>

      <div className="space-y-10">
        {parts.map((part, pi) => (
          <section key={part.title}>
            <h2 className="mb-3 border-b border-border pb-2 text-xs font-semibold uppercase tracking-wider text-muted">
              Part {pi + 1} · {part.title}
            </h2>
            <ol className="space-y-1">
              {part.lectures.map((l) => {
                const n = lectures.find((x) => x.slug === l.slug)!.number;
                return (
                  <li key={l.slug}>
                    <Link
                      href={`/${l.slug}`}
                      className="group -mx-3 flex gap-4 rounded-md px-3 py-3 transition-colors hover:bg-surface"
                    >
                      <span className="w-6 shrink-0 pt-0.5 text-right font-serif text-lg tabular-nums text-muted">
                        {n}
                      </span>
                      <span>
                        <span className="block font-serif text-lg font-semibold group-hover:text-accent">
                          {l.title}
                        </span>
                        <span className="mt-0.5 block text-sm leading-relaxed text-muted">
                          {l.summary}
                        </span>
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ol>
          </section>
        ))}
      </div>
    </div>
  );
}
