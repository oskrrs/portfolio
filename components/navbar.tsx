"use client"

import { useCallback, useEffect, useState } from "react"

const links = [
  { id: "about", label: "About" },
  { id: "projects", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState("")

  const updateFromScroll = useCallback(() => {
    const marker = 120
    const sections = links
      .map(({ id }) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null)

    setScrolled(window.scrollY > 24)

    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
      setActive(sections.at(-1)?.id ?? "")
      return
    }

    const current = sections
      .filter((section) => section.getBoundingClientRect().top <= marker)
      .at(-1)
    setActive(current?.id ?? "")
  }, [])

  useEffect(() => {
    let scheduled = false
    const onScroll = () => {
      if (scheduled) return
      scheduled = true
      window.requestAnimationFrame(() => {
        updateFromScroll()
        scheduled = false
      })
    }

    updateFromScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    window.addEventListener("hashchange", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
      window.removeEventListener("hashchange", onScroll)
    }
  }, [updateFromScroll])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-200 ${
        scrolled
          ? "border-border bg-background/95 backdrop-blur-sm"
          : "border-transparent bg-background/85 backdrop-blur-sm"
      }`}
    >
      <nav aria-label="Main navigation" className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-4 px-6">
        <a
          href="#top"
          className="shrink-0 text-base font-semibold tracking-tight text-foreground hover:text-primary"
        >
          oskrrs
        </a>
        <ul className="flex items-center gap-1 sm:gap-3">
          {links.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-current={active === id ? "location" : undefined}
                className={`rounded-sm px-2 py-2 text-xs font-medium transition-colors sm:px-3 sm:text-sm ${
                  active === id
                    ? "text-primary underline decoration-2 underline-offset-8"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
