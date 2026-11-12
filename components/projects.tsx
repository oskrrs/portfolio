import Image from "next/image"
import { DiscordMemberBadge } from "@/components/discord-member-badge"

const experiences = [
  {
    title: "Head of Staff",
    organization: "Escape Tsunami For Brainrots",
    organizationUrl: "https://discord.gg/6ycGqCgra7",
    inviteCode: "6ycGqCgra7",
    date: "February 2026 - Present",
    description:
      "Leading and managing the staff team, maintaining and updating documentation, overseeing moderation standards, and ensuring the community runs smoothly through effective coordination and support.",
    logo: "/images/escapetsunami-logo.jpg",
  },
  {
    title: "Moderator",
    organization: "Steal a Brainrot",
    organizationUrl: "https://discord.gg/brainrots",
    inviteCode: "brainrots",
    date: "March 2026 - Present",
    description:
      "Assisting in moderating the 8 million-member community, handling user reports, enforcing server rules, and maintaining a positive environment for all members.",
    logo: "/images/brainrot-logo.png",
  },
  {
    title: "Moderator",
    organization: "BeluGANG",
    organizationUrl: "https://discord.gg/beluga",
    inviteCode: "beluga",
    date: "April 2026 - Present",
    description:
      "Managing community interactions, enforcing server guidelines, handling user reports, and collaborating with the moderation team to ensure a friendly and safe environment for all members.",
    logo: "/images/beluga-logo.png",
  },
  {
    title: "Retired Head of Moderation",
    organization: "RoMart Shopping",
    organizationUrl: "https://discord.gg/romart",
    inviteCode: "romart",
    date: "December 2022 - December 2023",
    description:
      "Rose through the ranks from Trial Moderator to Head of Moderation, managing a community of over 20,000 members and implementing effective moderation strategies that significantly reduced rule violations.",
    logo: "/images/romart-logo.png",
  },
]

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 border-t border-border bg-muted/45 px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 flex flex-col gap-3 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-xs font-medium uppercase tracking-[0.16em] text-primary">02 / Experience</p>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Community roles
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-muted-foreground">
            Moderation and staff leadership across a range of active communities.
          </p>
        </div>

        <div className="border-t border-border">
          {experiences.map((experience, index) => (
            <article
              key={experience.organization}
              className="grid gap-4 border-b border-border py-6 sm:grid-cols-[3.5rem_1fr_auto] sm:gap-6 sm:py-7"
            >
              <div className="relative h-12 w-12 overflow-hidden rounded-md border border-border bg-background">
                <Image
                  src={experience.logo}
                  alt={`${experience.organization} logo`}
                  fill
                  sizes="48px"
                  className="object-cover"
                  unoptimized
                />
              </div>

              <div className="min-w-0">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="font-semibold text-foreground">{experience.title}</h3>
                  <a
                    href={experience.organizationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-primary underline-offset-4 hover:underline"
                  >
                    {experience.organization}
                  </a>
                </div>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
                  {experience.description}
                </p>
                <div className="mt-3">
                  <DiscordMemberBadge inviteCode={experience.inviteCode} />
                </div>
              </div>

              <p className="text-xs text-muted-foreground sm:pt-1 sm:text-right">{experience.date}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
