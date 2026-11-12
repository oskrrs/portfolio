const skillGroups = [
  {
    number: "01",
    title: "Moderation bots",
    items: ["Dyno", "Circle", "Sapphire", "Zeppelin", "Gaius"],
  },
  {
    number: "02",
    title: "Core strengths",
    items: ["Organisation", "Problem-solving", "Adaptability", "Teamwork", "Honesty"],
  },
  {
    number: "03",
    title: "Working tools",
    items: ["Discord", "Google Docs", "Google Sheets"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 border-t border-border px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 flex flex-col gap-3 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-xs font-medium uppercase tracking-[0.16em] text-primary">03 / Skills</p>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Tools I know. How I work.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-muted-foreground">
            A practical mix of moderation platforms, communication, and organisation.
          </p>
        </div>

        <div className="border-t border-border">
          {skillGroups.map((group) => (
            <div
              key={group.number}
              className="grid gap-3 border-b border-border py-6 sm:grid-cols-[5rem_12rem_1fr] sm:gap-6"
            >
              <span className="text-xs tabular-nums text-muted-foreground">{group.number}</span>
              <h3 className="font-medium text-foreground">{group.title}</h3>
              <ul className="flex flex-wrap gap-x-2 gap-y-1 text-sm text-muted-foreground">
                {group.items.map((item, index) => (
                  <li key={item} className="inline-flex items-center gap-2">
                    <span>{item}</span>
                    {index < group.items.length - 1 && (
                      <span aria-hidden="true" className="text-border">/</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
