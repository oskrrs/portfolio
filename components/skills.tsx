const approach = [
  {
    number: "01",
    title: "Lead the team",
    description:
      "Set clear expectations, keep staff aligned, and make sure moderators have the context to act with confidence.",
  },
  {
    number: "02",
    title: "Make moderation consistent",
    description:
      "Build practical documentation and dependable systems so the rules feel fair and the response is clear.",
  },
  {
    number: "03",
    title: "Look after the community",
    description:
      "Handle reports thoughtfully, support members, and protect the kind of culture people want to return to.",
  },
]

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 border-t border-border bg-muted/60 px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 grid gap-5 md:grid-cols-[1fr_0.65fr] md:items-end">
          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-primary">03 / My approach</p>
            <h2 className="max-w-2xl text-4xl font-semibold leading-[1.02] tracking-[-0.045em] text-foreground sm:text-6xl">
              Good moderation is more than removing messages.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-muted-foreground md:justify-self-end">
            It takes calm judgment, clear systems, and people who care about the space they help shape.
          </p>
        </div>

        <div className="grid border-y border-border md:grid-cols-3">
          {approach.map((item, index) => (
            <article
              key={item.number}
              className={`py-7 md:py-8 ${index > 0 ? "border-t border-border md:border-l md:border-t-0 md:pl-7" : ""} ${index < approach.length - 1 ? "md:pr-7" : ""}`}
            >
              <p className="mb-9 font-mono text-xs text-primary">{item.number} / 03</p>
              <h3 className="mb-3 text-xl font-semibold tracking-tight text-foreground">{item.title}</h3>
              <p className="max-w-sm text-sm leading-6 text-muted-foreground">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
