import { NextResponse } from "next/server"

// Cache each invite lookup for a short window so we don't hammer Discord's API
// while still keeping the member counts reasonably live.
export const revalidate = 0

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const code = searchParams.get("code")

  if (!code) {
    return NextResponse.json({ error: "Missing invite code" }, { status: 400 })
  }

  try {
    const res = await fetch(
      `https://discord.com/api/v10/invites/${encodeURIComponent(code)}?with_counts=true`,
      {
        headers: { "Accept": "application/json" },
        next: { revalidate: 60 },
      },
    )

    if (!res.ok) {
      return NextResponse.json(
        { error: "Failed to fetch invite", memberCount: null },
        { status: 200 },
      )
    }

    const data = await res.json()

    return NextResponse.json({
      memberCount: data.approximate_member_count ?? null,
      presenceCount: data.approximate_presence_count ?? null,
      name: data.guild?.name ?? null,
    })
  } catch (error) {
    console.log("[v0] Discord invite fetch error:", error)
    return NextResponse.json({ error: "Fetch failed", memberCount: null }, { status: 200 })
  }
}
