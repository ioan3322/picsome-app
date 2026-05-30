"use client"
import { usePathname } from "next/navigation"
import Link from "next/link"
import React, { use, useEffect, useState } from "react"

export const LayoutMainNav = () => {
  const [favoritesCount, setFavoritesCount] = useState(0)
  const [cartCount, setCartCount] = useState(0)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const fav = JSON.parse(localStorage.getItem("favorites") || "[]")
      setFavoritesCount(fav.length)

      const cart = JSON.parse(localStorage.getItem("cart") || "[]")
      setCartCount(cart.length)
    }
  }, [])

  const pathname = usePathname()
  return (
    
    <nav className="fixed top-1 z-50  w-full px-1 ">
      <div className=" flex items-center rounded-3xl  border-t  border-black/20 bg-white/10 px-4 py-2 text-black shadow-lg backdrop-blur-md backdrop-saturate-150">

      <div className="flex-1">
        <h1 className="text-2xl font-bold text-black">PS</h1>
      </div>

      <div className="flex flex-1 justify-center gap-6">
        <Link href="/" className={pathname === "/" ? "font-bold" : "hover:font-bold"}>
          Home
        </Link>

        <Link href="/gallery" className={pathname === "/gallery" ? "font-bold" : "hover:font-bold"}>
          Gallery
        </Link>

        <Link href="/favourite" className={pathname === "/favourite" ? "font-bold" : "hover:font-bold"}>
          Favourite
          {favoritesCount > 0 && (
            <span className="ml-1 inline-block rounded-full bg-red-500 px-2 text-xs text-white">
              {favoritesCount}
            </span>
          )}
        </Link>

        <Link href="/cart" className={pathname === "/cart" ? "font-bold" : "hover:font-bold"}>
          Cart
          {cartCount > 0 && (
            <span className="ml-1 inline-block rounded-full bg-blue-500 px-2 text-xs text-white">
              {cartCount}
            </span>
          )}
        </Link>
      </div>

      <div className="hidden md:flex md:flex-1"></div>
    </div>
    </nav>

  )
}
