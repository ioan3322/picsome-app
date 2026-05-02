"use client"
import { usePathname } from "next/navigation"
import Link from "next/link"
import React, { use, useEffect, useState } from "react"
import { LayoutMainNav } from "./layout-main-nav"

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
  <LayoutMainNav />
)
}
