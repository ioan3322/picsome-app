"use client"

import { ImageItem } from "@/shared/utils/types"
import { useState } from "react"
import { useStore } from "../../store"
import { Heart, ShoppingCart, ExternalLink } from "lucide-react"

interface IProps {
  photo: ImageItem
}

export const ImageComponentHovered = ({ photo }: IProps) => {
  const toggleFavourite = useStore((state) => state.toggleFavourite)
  const favourites = useStore((state) => state.favourites)
  const toggleCart = useStore((state) => state.toggleCart)
  const isInCart = useStore((state) => state.isInCart(photo.id))

  const isFav = favourites.some((item) => item.id === photo.id)
  const [tooltip, setTooltip] = useState({ visible: false, text: "", x: 0, y: 0 })

  return (
    <>
      <div className="absolute inset-0 z-10 bg-black/60 flex flex-col justify-end p-3 sm:p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out pointer-events-none group-hover:pointer-events-auto">


        <a
          href={photo.photographer_url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mb-2"
          onMouseEnter={(e) => setTooltip({ visible: true, text: "Visit Profile", x: e.clientX, y: e.clientY })}
          onMouseMove={(e) => tooltip.visible && setTooltip((t) => ({ ...t, x: e.clientX, y: e.clientY }))}
          onMouseLeave={() => setTooltip({ visible: false, text: "", x: 0, y: 0 })}
        >
          <ExternalLink className="w-3 h-3 text-white opacity-90" />
          <h2 className="text-sm font-semibold text-white hover:underline">
            {photo.photographer}
          </h2>
        </a>


        <button
          onClick={() => toggleFavourite(photo)}
          onMouseEnter={(e) => setTooltip({ visible: true, text: isFav ? "Remove" : "Like", x: e.clientX, y: e.clientY })}
          onMouseMove={(e) => tooltip.visible && setTooltip((t) => ({ ...t, x: e.clientX, y: e.clientY }))}
          onMouseLeave={() => setTooltip({ visible: false, text: "", x: 0, y: 0 })}
          className="absolute top-3 right-3 bg-white/10 border border-white/30 p-2 sm:p-3 text-white backdrop-blur-md rounded-full"
        >
          <Heart
            className={`w-5 h-5 cursor-pointer transition ${isFav ? "fill-red-500 text-red-500" : "text-white"
              }`}
          />
        </button>

        <button
          onClick={() => toggleCart(photo)}
          onMouseEnter={(e) => setTooltip({ visible: true, text: isInCart ? "Remove" : "Add to Cart", x: e.clientX, y: e.clientY })}
          onMouseMove={(e) => tooltip.visible && setTooltip((t) => ({ ...t, x: e.clientX, y: e.clientY }))}
          onMouseLeave={() => setTooltip({ visible: false, text: "", x: 0, y: 0 })}
          className="absolute top-3 left-3 bg-white/10 border border-white/30 px-3 py-2 sm:px-4 sm:py-2 text-white text-xs sm:text-sm backdrop-blur-md rounded-full"
        >
          <ShoppingCart
            className={`cursor-pointer w-5 h-5 ${isInCart ? "text-blue-400" : "text-white"
              }`}
          />
        </button>

        <p className="text-[10px] sm:text-xs absolute bottom-2 text-gray-200">
          {photo.width} x {photo.height}
        </p>
      </div>

      {tooltip.visible && (
        <div
          style={{ left: tooltip.x + 12, top: tooltip.y + 12 }}
          className="fixed z-50 pointer-events-none bg-black text-white text-xs px-2 py-1 rounded-md shadow-md"
        >
          {tooltip.text}
        </div>
      )}
    </>
  )
}