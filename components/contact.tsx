import { ArrowUpRight } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 border-t border-border bg-foreground px-6 py-20 text-background sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-primary">04 / Contact</p>
          <h2 className="max-w-2xl text-4xl font-semibold leading-[1.02] tracking-[-0.045em] sm:text-6xl">
            Let&apos;s make the internet a little better.
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-7 text-background/65">
            I&apos;m open to staff leadership and moderation roles. Get in touch on Discord to talk about working together.
          </p>
        </div>
        <a
          href="https://discord.com/users/836282556168929360"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-fit items-center gap-2 border-b border-primary pb-2 text-sm font-medium transition-colors hover:text-primary"
        >
          Message me on Discord
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}
