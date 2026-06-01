"use client"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { useStore } from "../../store"

export const LayoutMainNav = () => {
  const pathname = usePathname()
  const favoritesCount = useStore((state) => state.favourites.length)
  const cartCount = useStore((state) => state.cart.length)
  const linkClass = (isActive: boolean) =>
    isActive ? "font-bold text-black" : "text-black transition-colors"

  return (

    <nav className="fixed top-1 z-50  w-full px-1 ">
      <div className=" flex items-center rounded-3xl  border-t  border-black/20 bg-white/10 px-4 py-2  shadow-lg backdrop-blur-md backdrop-saturate-150 gradient-to-r from-black/60 to-white/50">

        <div className="flex-1">
          <Link href="/">
            <h1 className="text-2xl font-bold text-black">PS</h1>
          </Link>
        </div>

        <div className="flex flex-1 justify-center gap-6">
          <Link href="/" className={linkClass(pathname === "/")}>
            Home
          </Link>

          <Link href="/gallery" className={linkClass(pathname === "/gallery")}>
            Gallery
          </Link>

          <Link href="/favourites" className={linkClass(pathname === "/favourites")}>
            Favourites
            {favoritesCount > 0 && (
              <span className="ml-1 inline-block rounded-full bg-red-500 px-2 text-xs text-white">
                {favoritesCount}
              </span>
            )}
          </Link>

          <Link href="/cart" className={linkClass(pathname === "/cart")}>
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
