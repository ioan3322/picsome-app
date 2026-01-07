"use client"

import Link from "next/link"
import React, { useEffect, useState } from "react"

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

  return (
    <nav className="flex gap-6 bg-black-100 p-4 shadow-md">
      <Link href="/" className="hover:text-blue-500 font-semibold">
        Home
      </Link>

      <Link href="/store" className="hover:text-blue-500 font-semibold">
        Store
      </Link>

      <Link href="/favourite" className="hover:text-blue-500 font-semibold relative">
        Favourite
        {favoritesCount > 0 && (
          <span className="ml-1 inline-block bg-red-500 text-white text-xs px-2 rounded-full">
            {favoritesCount}
          </span>
        )}
      </Link>

      <Link href="/cart" className="hover:text-blue-500 font-semibold relative">
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
