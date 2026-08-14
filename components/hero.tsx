"use client"

import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { ArrowDown } from "lucide-react"
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

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/15 via-background to-background" />
      <div className="absolute left-1/2 top-1/3 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />

      <div className="flex flex-col items-center text-center">
        <div className="relative mb-8">
          <div className="absolute -inset-2 -z-10 rounded-full bg-primary/30 blur-2xl" />
          <div className="relative h-40 w-40 overflow-hidden rounded-full border-2 border-primary/40 shadow-xl ring-4 ring-primary/10">
            <Image
              src="/images/profile.jpg"
              alt="oskrrs profile picture"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          Available for staff positions
        </span>

        <h1 className="mb-8 bg-gradient-to-b from-foreground to-foreground/60 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-7xl">
          oskrrs
        </h1>
        
        <div className="mb-12 flex items-center justify-center gap-4">
          <Button size="lg" asChild>
            <a href="#contact">Get in Touch</a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="#projects">View Work</a>
          </Button>
        </div>
        
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <a
                href="https://discord.com/users/836282556168929360"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <DiscordIcon className="h-6 w-6" />
                <span className="sr-only">Discord</span>
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <p>oskrrs</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      
      <a
        href="#about"
        className="absolute bottom-12 animate-bounce text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowDown className="h-6 w-6" />
        <span className="sr-only">Scroll to about section</span>
      </a>
    </section>
  )
}
