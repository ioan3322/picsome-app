"use client"

import { ImageItem } from "@/shared/utils/types";
import Image from "next/image";
import { useState } from "react";
import { ImageComponentHovered } from "./image-component-hovered";

interface IProps {
  photo: ImageItem;
  loading?: "eager" | "lazy";
}

export const ImageComponent = ({ photo, loading = "lazy" }: IProps) => {
  const [isHovered, setIsHovered] = useState(false);
 

  return (
    <div
      className="relative w-full rounded-md overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={photo.src.medium}
        alt={photo.alt || "Photo by " + photo.photographer}
        width={photo.width}
        height={photo.height}
        className="w-full h-auto "
        loading={loading}
      />

      
      {isHovered && (
        <ImageComponentHovered photo={photo} />
      )}
    </div>
  );
};

// inside component scope we need to access store - add after declaration