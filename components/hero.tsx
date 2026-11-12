import { ArrowDown, ArrowUpRight } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[min(850px,100svh)] scroll-mt-16 bg-foreground px-6 pb-24 pt-28 text-background"
    >
      <div className="mx-auto grid min-h-[min(650px,78svh)] max-w-6xl items-center gap-12 md:grid-cols-[1.2fr_0.8fr] md:gap-16">
        <div>
          <p className="mb-6 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-background/65">
            <span className="h-px w-8 bg-primary" />
            Oskar · Server Moderator &amp; Manager
          </p>
          <h1 className="max-w-3xl text-[clamp(3.5rem,9vw,7.75rem)] font-semibold leading-[0.88] tracking-[-0.07em]">
            Good communities are built.
          </h1>
          <p className="mt-7 max-w-lg text-base leading-7 text-background/70 sm:text-lg">
            I help online communities feel safer, run smoother, and give their members a place to belong.
          </p>
          <a
            href="#projects"
            className="mt-9 inline-flex items-center gap-2 border-b border-primary pb-2 text-sm font-medium text-background transition-colors hover:text-primary"
          >
            Explore my experience
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        </div>

        <div className="mx-auto w-full max-w-sm md:max-w-none">
          <div className="relative aspect-[4/5] overflow-hidden border border-background/10 bg-background/10">
            <Image
              src="/images/profile.jpg"
              alt="Black cat sitting in front of a bright window"
              fill
              className="object-cover grayscale"
              priority
              sizes="(max-width: 768px) 80vw, 34vw"
            />
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full p-2 text-background/60 transition-colors hover:text-background"
        aria-label="Scroll to About section"
      >
        <ArrowDown className="size-4" aria-hidden="true" />
      </a>
    </section>
  )
}
