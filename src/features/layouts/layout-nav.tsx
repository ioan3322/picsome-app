"use client"

import { useEffect, useState } from "react"
import { LayoutMainNav } from "./layout-main-nav"
import { LayoutNavHero } from "./layout-nav-hero"
import { LayoutFooter } from "./layout-footer"

export const LayoutNav = ({ children }: { children: React.ReactNode }) => {
  const [favoritesCount, setFavoritesCount] = useState(0)
  const [cartCount, setCartCount] = useState(0)

  useEffect(() => {
    const fav = JSON.parse(localStorage.getItem("favorites") || "[]")
    setFavoritesCount(fav.length)

    const cart = JSON.parse(localStorage.getItem("cart") || "[]")
    setCartCount(cart.length)
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <LayoutMainNav />
      <LayoutNavHero />


      <main className="flex-1">
        {children}
      </main>

      <LayoutFooter />
    </div>
  )
}