import { getImagesByCategory } from "@/features/api"
import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const query = searchParams.get("query") || "random"
  const page = searchParams.get("page") || "1"

  try {
    const images = await getImagesByCategory({
      category: query,
      page: parseInt(page),
    })
    return NextResponse.json(images)
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch images" },
      { status: 500 }
    )
  }
}
