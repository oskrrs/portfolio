import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { DiscordMemberBadge } from "@/components/discord-member-badge"

const experiences = [
  {
    title: "Head of Staff",
    organization: "Escape Tsunami For Brainrots",
    organizationUrl: "https://discord.gg/6ycGqCgra7",
    inviteCode: "6ycGqCgra7",
    date: "Feb 2026 — Present",
    description:
      "Leading the staff team, keeping documentation current, and setting a consistent standard for moderation across the community.",
    logo: "/images/escapetsunami-logo.jpg",
  },
  {
    title: "Moderator",
    organization: "Steal a Brainrot",
    organizationUrl: "https://discord.gg/brainrots",
    inviteCode: "brainrots",
    date: "Mar 2026 — Present",
    description:
      "Supporting moderation in a large, active community—responding to reports, enforcing guidelines, and helping members feel welcome.",
    logo: "/images/brainrot-logo.png",
  },
  {
    title: "Moderator",
    organization: "BeluGANG",
    organizationUrl: "https://discord.gg/beluga",
    inviteCode: "beluga",
    date: "Apr 2026 — Present",
    description:
      "Working with the moderation team to resolve reports, maintain server standards, and keep day-to-day conversations constructive.",
    logo: "/images/beluga-logo.png",
  },
  {
    title: "Retired Head of Moderation",
    organization: "RoMart Shopping",
    organizationUrl: "https://discord.gg/romart",
    inviteCode: "romart",
    date: "Dec 2022 — Dec 2023",
    description:
      "Progressed from Trial Moderator to Head of Moderation, helping lead a 20,000+ member community and reduce rule violations.",
    logo: "/images/romart-logo.png",
  },
]

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 border-t border-border px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col gap-5 sm:mb-16 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-primary">02 / Experience</p>
            <h2 className="text-4xl font-semibold tracking-[-0.045em] text-foreground sm:text-6xl">
              Work in good company.
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-6 text-muted-foreground">
            A record of showing up, taking responsibility, and helping communities grow.
          </p>
        </div>

        <div className="border-t-2 border-foreground">
          {experiences.map((experience, index) => (
            <article
              key={experience.organization}
              className="grid gap-4 border-b border-border py-6 sm:grid-cols-[3rem_1fr_9rem] sm:gap-6 sm:py-7"
            >
              <span className="pt-1 font-mono text-xs text-muted-foreground">0{index + 1}</span>

              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                  <div className="relative size-8 overflow-hidden rounded-sm bg-muted">
                    <Image
                      src={experience.logo}
                      alt=""
                      fill
                      sizes="32px"
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight text-foreground">{experience.title}</h3>
                  <a
                    href={experience.organizationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-primary underline-offset-4 hover:underline"
                  >
                    {experience.organization}
                    <ArrowUpRight className="size-3.5" aria-hidden="true" />
                  </a>
                </div>
                <p className="mt-3 max-w-3xl text-sm leading-6 text-muted-foreground">{experience.description}</p>
                <div className="mt-3">
                  <DiscordMemberBadge inviteCode={experience.inviteCode} />
                </div>
              </div>

              <p className="text-xs text-muted-foreground sm:pt-2 sm:text-right">{experience.date}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
