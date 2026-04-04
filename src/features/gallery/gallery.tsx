"use client"

import Image from "next/image"
import Masonry from "react-masonry-css"
import { ImageComponent } from "../images/image-component"
import { ImageItem } from "@/shared/utils/types"

interface iProps {
  data: ImageItem[]
}


export const Gallery = ({ data }: iProps) => {
  const breakpoints = {
    default: 5,
    1024: 2,
    640: 1,
  }
  return (
    <div className="min-h-screen bg-white px-4 py-12 font-sans">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">
        Gallery
      </h1>
      <div className="max-w-6xl mx-auto">
        <Masonry
          breakpointCols={breakpoints}
          className="flex gap-3"
          columnClassName="flex flex-col gap-3"


        >
          {data.map((photo) => (
            <ImageComponent photo={photo} key={photo.id} />



          ))}
        </Masonry>
      </div>
    </div >
  )
}