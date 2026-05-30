"use client";

import { ImageItem } from "@/shared/utils/types";
import { useStore } from "../../store";
import { Heart } from "lucide-react";
import {ShoppingCart} from "lucide-react"
interface IProps {
  photo: ImageItem;
}

export const ImageComponentHovered = ({ photo }: IProps) => {
  const toggleFavourite = useStore((state) => state.toggleFavourite);
  const favourites = useStore((state) => state.favourites);
  const toggleCart = useStore((state) => state.toggleCart);

  const isInCart = useStore((state) => state.isInCart(photo.id));

  const isFav = favourites.some((item) => item.id === photo.id);

  return (
    <div className="absolute inset-0 bg-black/60 flex flex-col justify-end p-4">
      <a
        href={photo.photographer_url}
        target="_blank"
        className="hover:underline"
      >
        <h2 className="text-md font-semibold text-white mb-2">
          {photo.photographer}
        </h2>
      </a>

      <button
        onClick={() => toggleFavourite(photo)}
        className="hover:bg-white/20 absolute top-4 right-4 bg-white/10 border border-white/30 p-3 text-white backdrop-blur-md rounded-full transition"
      >
        <Heart
          className={`w-5 h-5 transition-all duration-200 ${
            isFav
              ? "fill-red-500 text-red-500 scale-110"
              : "fill-transparent text-white"
          }`}
        />
      </button>

      <button
        onClick={() => toggleCart(photo)}
        className="hover:bg-white/20 absolute top-4 left-4 bg-white/10 border border-white/30 px-4 py-2 text-white backdrop-blur-md rounded-full text-sm"
      >
        <ShoppingCart className={`w-5 h-5 transition-all duration-200 ${isInCart ? "text-blue-500" : "text-white"}`} />
      </button>

      <p className="text-xs absolute bottom-2 text-gray-200">
        {photo.width} x {photo.height}
      </p>
    </div>
  );
};