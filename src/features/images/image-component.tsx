"use client"

import { ImageItem } from "@/shared/utils/types";
import Image from "next/image";
import { ImageComponentHovered } from "./image-component-hovered";

interface IProps {
  photo: ImageItem;
  loading?: "eager" | "lazy";
}

export const ImageComponent = ({ photo, loading = "lazy" }: IProps) => {
  return (
    <div className="relative w-full rounded-md overflow-hidden group">
      <Image
        src={photo.src.medium}
        alt={photo.alt || "Photo by " + photo.photographer}
        width={photo.width}
        height={photo.height}
        className="w-full h-auto transition-transform duration-300 ease-out group-hover:scale-105"
        loading={loading}
      />

      <ImageComponentHovered photo={photo} />
    </div>
  );
};

