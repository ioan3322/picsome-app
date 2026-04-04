"use client"
import { usePathname } from "next/navigation"
import Link from "next/link"
import React, { use, useEffect, useState } from "react"

export const LayoutMain = () => {
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

    <nav className="flex justify-center items-center gap-6 bg-black-200 p-4  font-bold shadow-md">

      <Link href="/" className={pathname === "/" ? "bg-black-200 text-blue-500" : "hover:text-blue-500 "}>
        Home
      </Link>

      <Link href="/gallery" className={pathname === "/gallery" ? "bg-black-200 text-blue-500" : "hover:text-blue-500 "}>
        Gallery
      </Link>

      <Link href="/favourite" className={pathname === "/favourite" ? "bg-black-200 text-blue-500" : "hover:text-blue-500 "}>
        Favourite
        {favoritesCount > 0 && (
          <span className="ml-1 inline-block bg-red-500 text-white text-xs px-2 rounded-full">
            {favoritesCount}
          </span>
        )}
      </Link>

      <Link href="/cart" className={pathname === "/cart" ? "bg-black-200 text-blue-500" : "hover:text-blue-500   "}>
        Cart
        {cartCount > 0 && (
          <span className="ml-1 inline-block bg-blue-500 text-white text-xs px-2 rounded-full">
            {cartCount}
          </span>
        )}
      </Link>
    </nav>
  )
}
