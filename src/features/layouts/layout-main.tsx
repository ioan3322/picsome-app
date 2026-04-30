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

  <nav className="flex items-center w-full bg-black p-4 font-bold shadow-md ">

  
  <div className="flex-1">
    <h1 className="text-4xl font-bold text-white">
      PS
    </h1>
  </div>

  
  <div className="flex gap-6 justify-center flex-1">
    
    <Link href="/" className={pathname === "/" ? "text-blue-500" : "hover:text-blue-500"}>
      Home
    </Link>

    <Link href="/gallery" className={pathname === "/gallery" ? "text-blue-500" : "hover:text-blue-500"}>
      Gallery
    </Link>

    <Link href="/favourite" className={pathname === "/favourite" ? "text-blue-500" : "hover:text-blue-500"}>
      Favourite
      {favoritesCount > 0 && (
        <span className="ml-1 inline-block bg-red-500 text-white text-xs px-2 rounded-full">
          {favoritesCount}
        </span>
      )}
    </Link>

    <Link href="/cart" className={pathname === "/cart" ? "text-blue-500" : "hover:text-blue-500"}>
      Cart
      {cartCount > 0 && (
        <span className="ml-1 inline-block bg-blue-500 text-white text-xs px-2 rounded-full">
          {cartCount}
        </span>
      )}
    </Link>

  </div>

  
  <div className="flex-1"></div>

</nav>



  )
}
