export function About() {
  return (
    <section id="about" className="scroll-mt-20 border-t border-border px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 flex flex-col gap-3 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-xs font-medium uppercase tracking-[0.16em] text-primary">01 / About</p>
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Passionate about safer communities.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-muted-foreground">
            My work combines practical moderation, clear communication, and thoughtful community support.
          </p>
        </div>

        <div className="grid gap-8 border-t border-border pt-7 md:grid-cols-2 md:gap-12">
          <div className="space-y-4 text-sm leading-7 text-muted-foreground">
            <p>
              Hello, I&apos;m Oskar (known as oskrrs). I am an experienced server moderator who has assisted in managing and moderating numerous communities.
            </p>
            <p>
              With previous experience using Google tools, I&apos;ve continued to create documents and spreadsheets, improving servers and staying organised.
            </p>
          </div>
          <div className="space-y-4 text-sm leading-7 text-muted-foreground">
            <p>My current timezone is GMT (UTC+0). I am able to speak 2 languages fluently.</p>
            <p>
              With previous experience using moderation bots such as Dyno, Circle, Sapphire, Zeppelin, and custom bots, I help communities stay safe and well-managed.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
