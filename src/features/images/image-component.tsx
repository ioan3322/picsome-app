import { ImageItem } from "@/shared/utils/types";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

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
        className="w-full h-auto"
        loading={loading}
      />

      
      {isHovered && (
        <div className="absolute inset-0 bg-black/60 flex flex-col justify-end p-4">
          <Link href={photo.photographer_url} target="_blanck" className="hover:underline">
          <h2 className="text-lg font-semibold text-white mb-2">
            {photo.photographer}
          </h2>
          </Link>

          <button className=" hover:bg-white/20 absolute top-4 right-4 bg-white/10 border border-white/30 px-4 py-2 text-white backdrop-blur-md rounded-full text-sm">
            Save
          </button>
          <button className=" hover:bg-white/20 absolute top-4 left-4 bg-white/10 border border-white/30 px-4 py-2 text-white backdrop-blur-md rounded-full text-sm">
            Buy
          </button>

          <p className="text-sm text-gray-200">
            {photo.width} x {photo.height}px
          </p>

        </div>
      )}
    </div>
  );
};