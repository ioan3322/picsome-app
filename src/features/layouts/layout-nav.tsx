"use client"

import { useEffect, useState } from "react"
import { LayoutMainNav } from "./layout-main-nav"
import { LayoutNavHero } from "./layout-nav-hero"

export const LayoutNav = () => {
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
    <div>

      <LayoutMainNav />
      <LayoutNavHero />
    </div>

  )
}
