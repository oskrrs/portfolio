import { ArrowUpRight } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-background/15 bg-foreground px-6 py-6 text-background">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 text-xs text-background/55 sm:flex-row sm:items-center sm:justify-between">
        <a href="#top" className="font-semibold tracking-tight text-background transition-colors hover:text-primary">
          oskrrs
        </a>
        <p>Community moderation · GMT / UTC+0</p>
        <a
          href="https://discord.com/users/836282556168929360"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 transition-colors hover:text-background"
        >
          Discord <ArrowUpRight className="size-3" aria-hidden="true" />
        </a>
        <p>© {new Date().getFullYear()} Oskar</p>
      </div>
    </footer>
  )
}
