import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

function DiscordIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  )
}

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
    title: "Moderator",
    organization: "Steal a Brainrot",
    organizationUrl: "https://discord.gg/brainrots",
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
    date: "April 2026 - Present",
    description:
      "Managing community interactions, enforcing server guidelines, handling user reports, and collaborating with the moderation team to ensure a friendly and safe environment for all members.",
    logo: "/images/beluga-logo.png",
    platforms: ["Discord"],
  },
  {
    title: "Senior Moderator",
    organization: "Escape Tsunami For Brainrots",
    organizationUrl: "https://discord.gg/escapetsunami",
    date: "February 2026 - Present",
    description:
      "Actively moderating the server, guiding and assisting Junior Moderators with their duties, and engaging with the community through regular chat participation to maintain a welcoming atmosphere.",
    logo: "/images/escapetsunami-logo.jpg",
    platforms: ["Discord"],
  },
  {
    title: "Retired Head of Moderation",
    organization: "RoMart Shopping",
    organizationUrl: "https://discord.gg/romart",
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
                      {(experience.platforms || ["Discord"]).map((platform) => (
                        <Badge key={platform} variant="secondary" className="text-xs flex items-center gap-1">
                          {platform === "Discord" && <DiscordIcon className="h-3 w-3" />}
                          {platform === "Roblox" && <RobloxIcon className="h-3 w-3" />}
                          {platform}
                        </Badge>
                      ))}
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
