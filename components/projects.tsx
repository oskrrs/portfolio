import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { DiscordMemberBadge } from "@/components/discord-member-badge"

function RobloxIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M5.164 0L.16 18.928l18.676 5.072L23.84 5.072 5.164 0zm8.742 15.258l-5.164-1.404 1.404-5.164 5.164 1.404-1.404 5.164z" />
    </svg>
  )
}

function PlaceholderLogo({ className }: { className?: string }) {
  return (
    <div className={`${className} bg-muted rounded-lg flex items-center justify-center`}>
      <span className="text-muted-foreground text-xl font-bold">?</span>
    </div>
  )
}

const experiences = [
  {
    title: "Head of Staff",
    organization: "Escape Tsunami For Brainrots",
    organizationUrl: "https://discord.gg/escapetsunami",
    inviteCode: "escapetsunami",
    date: "February 2026 - Present",
    description:
      "Leading and managing the staff team, maintaining and updating documentation, overseeing moderation standards, and ensuring the community runs smoothly through effective coordination and support.",
    logo: "/images/escapetsunami-logo.jpg",
    platforms: ["Discord"],
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
    platforms: ["Discord"],
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
    platforms: ["Discord"],
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
    platforms: ["Discord", "Roblox"],
  },
]

export function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-4 text-center text-sm font-medium uppercase tracking-widest text-primary">
          Projects
        </h2>
        <p className="mx-auto mb-16 max-w-2xl text-center text-3xl font-semibold tracking-tight text-foreground sm:text-4xl text-balance">
          Work Experience
        </p>

        <div className="flex flex-col gap-6">
          {experiences.map((experience, index) => (
            <Card
              key={`${experience.organization}-${index}`}
              className="border-0 bg-muted/30 shadow-sm"
            >
              <CardContent className="p-6">
                <div className="flex gap-4">
                  {experience.logo ? (
                    <div className="h-14 w-14 shrink-0 rounded-lg overflow-hidden bg-muted relative">
                      <Image
                        src={experience.logo}
                        alt={experience.organization}
                        width={112}
                        height={112}
                        className="h-full w-full object-cover"
                        unoptimized
                      />
                    </div>
                  ) : (
                    <PlaceholderLogo className="h-14 w-14 shrink-0" />
                  )}
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground">
                      {experience.title}
                    </h3>
                    <a
                      href={experience.organizationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline text-sm"
                    >
                      {experience.organization}
                    </a>
                    <p className="text-sm text-muted-foreground mt-0.5">
                      {experience.date}
                    </p>
                    <p className="mt-4 text-muted-foreground">
                      {experience.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {(experience.platforms || ["Discord"]).map((platform) => {
                        if (platform === "Discord") {
                          return (
                            <DiscordMemberBadge
                              key={platform}
                              inviteCode={experience.inviteCode}
                            />
                          )
                        }
                        return (
                          <Badge key={platform} variant="secondary" className="text-xs flex items-center gap-1">
                            {platform === "Roblox" && <RobloxIcon className="h-3 w-3" />}
                            {platform}
                          </Badge>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
