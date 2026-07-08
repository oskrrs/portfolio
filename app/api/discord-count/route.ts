import { NextResponse } from "next/server"

export const dynamic = "force-dynamic"
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
      { cache: "no-store" }
    )

    if (!res.ok) {
      return NextResponse.json(
        { error: "Failed to fetch invite" },
        { status: res.status }
      )
    }

    const data = await res.json()

    return NextResponse.json(
      {
        memberCount: data.approximate_member_count ?? null,
        presenceCount: data.approximate_presence_count ?? null,
      },
      {
        headers: {
          "Cache-Control": "no-store, max-age=0",
        },
      }
    )
  } catch {
    return NextResponse.json({ error: "Request failed" }, { status: 500 })
  }
}
