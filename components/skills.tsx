import { Bot, Award, Wrench } from "lucide-react"

const skillCategories = [
  {
    title: "Moderation Bots",
    icon: Bot,
    description: "Bots I have experience using to keep communities safe and organised.",
    skills: ["Dyno", "Circle", "Sapphire", "Zeppelin", "Gaius"],
  },
  {
    title: "Qualities",
    icon: Award,
    description: "Traits I bring to every team I work with.",
    skills: ["Organisation", "Problem-Solving", "Adaptability", "Teamwork", "Honesty"],
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    description: "Tools I rely on to ensure productivity and organisation.",
    skills: ["Discord", "Google Docs", "Google Sheets", "Trello", "Notion"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-16 border-t border-border bg-background px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-4 text-center text-sm font-medium uppercase tracking-widest text-primary">
          Skills
        </h2>
        <p className="mx-auto mb-4 max-w-2xl text-center text-3xl font-semibold tracking-tight text-foreground sm:text-4xl text-balance">
          Tools and traits
        </p>
        <div className="mx-auto mb-16 h-1 w-16 rounded-full bg-primary" />

        <div className="grid gap-6 md:grid-cols-3">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <category.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>
              <p className="mb-5 text-sm text-muted-foreground">
                {category.description}
              </p>
              <div className="mt-auto flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-border bg-secondary px-3 py-1.5 text-sm font-medium text-secondary-foreground transition-colors hover:border-primary/50 hover:text-primary"
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
