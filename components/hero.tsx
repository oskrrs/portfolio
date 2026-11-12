import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-[88vh] flex-col items-center justify-center px-6 pb-20 pt-28">
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <div className="relative mb-7 h-32 w-32 overflow-hidden rounded-full border border-border bg-muted sm:h-36 sm:w-36">
          <Image
            src="/images/profile.jpg"
            alt="oskrrs profile picture"
            fill
            className="object-cover"
            priority
          />
        </div>
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-primary">
          Community moderation
        </p>
        <h1 className="mb-5 text-5xl font-semibold tracking-tight text-foreground sm:text-7xl">
          oskrrs
        </h1>
        <p className="mb-8 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
          Experienced server moderator focused on safer, better-managed communities.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button size="lg" asChild>
            <a href="#contact">Get in touch</a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="#projects">View experience</a>
          </Button>
        </div>
      </div>
      <a
        href="#about"
        className="absolute bottom-8 rounded-full p-2 text-muted-foreground transition-colors hover:text-foreground"
        aria-label="Scroll to About section"
      >
        <ArrowDown className="h-5 w-5" aria-hidden="true" />
      </a>
    </section>
  )
}
