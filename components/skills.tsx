const skillCategories = [
  {
    title: "Moderation Bots",
    skills: ["Dyno", "Circle", "Sapphire", "Zeppelin", "Gaius"],
  },
  {
    title: "Qualities",
    skills: ["Organisation", "Problem-Solving", "Adaptability", "Teamwork", "Honesty"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Google Docs", "Google Sheets", "Discord", "Trello", "Notion"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="px-6 py-24 bg-muted/30">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-4 text-center text-sm font-medium uppercase tracking-widest text-primary">
          Skills
        </h2>
        <p className="mx-auto mb-16 max-w-2xl text-center text-3xl font-semibold tracking-tight text-foreground sm:text-4xl text-balance">
          Tools and traits I bring to the table
        </p>
        
        <div className="grid gap-6 md:grid-cols-3">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="rounded-xl border border-border bg-card p-6 shadow-sm transition-colors hover:border-primary/40"
            >
              <h3 className="mb-6 text-center text-lg font-semibold text-foreground">
                {category.title}
              </h3>
              <div className="flex flex-wrap justify-center gap-2.5">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-border bg-background px-3.5 py-1.5 text-sm font-medium text-foreground transition-all hover:-translate-y-0.5 hover:border-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
