"use client"


import { usePathname } from "next/navigation"

const formatTitle = (pathname: string | null) => {
  if (!pathname || pathname === "/") return "Home"
  const parts = pathname.split("/").filter(Boolean)
  const last = parts[parts.length - 1]
  return last.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase())
}

export const LayoutNavHero = () => {
  const pathname = usePathname()
  const title = formatTitle(pathname)

  return (
    <div
      className="relative flex flex-col items-center justify-center text-center px-6 py-28 bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(/images/image1.jpg)` }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80" />

      <div className="relative z-10 max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight">
          {title}
        </h1>
      </div>

    </div>
  )
}