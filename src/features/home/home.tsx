"use client"

import Link from "next/link"
import Masonry from "react-masonry-css"
import { DataImageItem } from "@/shared/utils/types"
import { useEffect, useState } from "react"
import { ImageComponent } from "../images/image-component"
import { BREAKPOINTS } from "@/shared/utils/constants"

const categories = [
  "Wallpapers",
  "Nature",
  "Technology",
  "Architecture",
  "University",
  "Cars",
  "Free Time",
  "Monuments",
]

export const Home = ({ data }: { data: DataImageItem[] }) => {
  const [bgImage, setBgImage] = useState("")
  const [images, setImages] = useState<DataImageItem[]>(data || [])
  const [loading, setLoading] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("")

  useEffect(() => {
    if (!data?.length) return
    const random = data[Math.floor(Math.random() * data.length)]
    setBgImage(random?.src?.original || "")
  }, [data])

  return (
    <div className="min-h-screen bg-white text-black">
      <div
        className="relative flex flex-col items-center justify-center text-center px-6 py-28 bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80" />

        <div className="relative z-10 max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight shadow-lg">
            Discover Stunning Photography
          </h1>

          <p className="mt-6 text-gray-300 text-lg">
            Explore wallpapers, nature, cars, anime and more.
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <Link href="/gallery">
              <button className="px-8 py-3 cursor-pointer rounded-2xl bg-white/10 border border-white/20 text-white font-semibold backdrop-blur-md hover:bg-white/20 transition">
                Explore Gallery
              </button>
            </Link>

            <Link href="/gallery">
              <button className="px-8 py-3 cursor-pointer rounded-2xl bg-gradient-to-l from-gray-600/50 to-black/30 border border-white/20 backdrop-blur-md text-white font-semibold hover:scale-105 transition">
                Start Searching
              </button>
            </Link>
          </div>
        </div>
      </div>


      <div className="max-w-full mx-auto px-10 py-20">

        <h2 className="text-3xl font-bold text-center mb-10 ">
          Explore Photos by Categories
        </h2>


        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {categories.map((src) => (
            <button
              key={src}
              onClick={async () => {
                try {
                  setSelectedCategory(src)
                  setLoading(true)
                  const res = await fetch(`/api/?query=${(src)}`)
                  const data = await res.json()
                  setImages(data)
                } finally {
                  setLoading(false)
                }
              }}
              className="px-5 py-2 cursor-pointer rounded-full bg-black text-white hover:bg-gradient-to-b from-gray-600/50 to-black/30  backdrop-blur-md transition text-sm"
            >
              {src}
            </button>
          ))}
        </div>

        {selectedCategory && (
          <h2 className="text-center text-lg text-black mb-6"> Show results for "{selectedCategory}"</h2>
        )}




        <Masonry
          breakpointCols={BREAKPOINTS}
          className="flex gap-4"
          columnClassName="flex flex-col gap-4"
        >
          {images.map((photo, index) => (
            <div
              key={photo.id}
              className="rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition "
            >
              <ImageComponent
                photo={photo}
                key={photo.id}
                loading={index === 0 ? "eager" : "lazy"}
              />
            </div>
          ))}
        </Masonry>
      </div>
    </div>
  )
}