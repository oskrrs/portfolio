export function About() {
  return (
    <section id="about" className="border-t border-border bg-background px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-4 text-center text-sm font-medium uppercase tracking-widest text-primary">
          About Me
        </h2>
        <p className="mx-auto mb-4 max-w-2xl text-center text-3xl font-semibold tracking-tight text-foreground sm:text-4xl text-balance">
          Passionate in moderating servers and ensuring user safety
        </p>
        <div className="mx-auto mb-16 h-1 w-16 rounded-full bg-primary" />

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4 rounded-xl border border-border bg-card p-6 text-muted-foreground shadow-sm transition-colors hover:border-primary/40">
            <p>
              Hello, I&apos;m Oskar (known as oskrrs). I am an experienced server moderator who has assisted in managing and moderating numerous communities.
            </p>
            <p>
              With previous experience using Google tools, I&apos;ve continued to create documents and spreadsheets, improving servers and staying organised.
            </p>
          </div>
          <div className="space-y-4 rounded-xl border border-border bg-card p-6 text-muted-foreground shadow-sm transition-colors hover:border-primary/40">
            <p>
              My current timezone is GMT (UTC+0). I am able to speak 2 languages fluently.
            </p>
            <p>
              With previous experience using various moderation bots such as Dyno, Circle, Sapphire, Zeppelin and custom bots, I ensure communities remain safe and well-managed.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
