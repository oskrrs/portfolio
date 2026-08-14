"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import Image from "next/image"

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
        
        <div className="flex items-center justify-center gap-4">
          <Button size="lg" asChild>
            <a href="#contact">Get in Touch</a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="#projects">View Work</a>
          </Button>
        </div>
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
