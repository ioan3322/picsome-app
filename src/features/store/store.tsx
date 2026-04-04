"use client"

import Image from "next/image"
import Masonry from "react-masonry-css"

interface StoreProps {
  data: {
    id: string | number
    src: {
      medium: string
    }
    alt?: string
    width: number
    height: number
    photographer: string
  }[]
}


export const Store = ({ data }: StoreProps) => {
  const breakpoints = {
    default: 5,
    1024: 2,
    640: 1,
  }
  return (
    <div className="min-h-screen bg-white px-4 py-12 font-sans">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">
        Store
      </h1>
      <div className="max-w-6xl mx-auto">
        <Masonry
          breakpointCols={breakpoints}
          className="flex gap-3"
          columnClassName="flex flex-col gap-3"


        >
          {data.map((photo) => (
            <div key={photo.id} className="relative w-full">
              <Image
                src={photo.src.medium}
                alt={photo.alt || ""}
                width={photo.width}
                height={photo.height}
                className="w-full h-auto"
              />


              <div className="px-4 pt-3 pb-4 bg-gray-200 rounded-b-md shadow-lg">
                <h2 className="text-lg text-gray-800 leading-tight">
                  {photo.photographer}
                </h2>


              </div>
            </div>
          ))}
        </Masonry>
      </div>
    </div >
  )
}