"use client"

import Link from 'next/link'
import Image from "next/image"
import Masonry from "react-masonry-css"
import { DataImageItem } from '@/shared/utils/types'
import {useEffect, useState } from 'react'


const breakpoints = {
  default: 5,
  1024: 4,
  640: 3,
  576: 2,
} 

export const Home = ({ data }: { data: DataImageItem[] }) => {

  const [bgImage, setBgImage] = useState<string>("")

  useEffect(() => {
    if (data.length) {
      const randomImage = data[Math.floor(Math.random() * data.length)]
      setBgImage(randomImage?.src?.original || "")
    }
  }
    , [data])

  return (
    <div className="min-h-screen bg-white font-sans">
      
      <div  className="flex flex-col items-center justify-center text-center py-20 px-4 bg-cover bg-center rounded-lg shadow-md"
            style={{ backgroundImage: `url(${bgImage})` }}>
        <h1 className="text-4xl font-bold text-white mb-4">
          PicSome App
        </h1>
       
        <Link href='/gallery'>

          <button className="px-6 py-3 bg-white text-gray-600 rounded-lg hover:bg-blue-100 hover:text-black transition hover:cursor-pointer">
            Vezi galeria
          </button>
        </Link>
      </div>

      {/* Gallery Preview */}
      <div className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
          Cele mai recente fotografii
        </h2>

        <Masonry
          breakpointCols={breakpoints}
          className="flex gap-3"
          columnClassName="flex flex-col gap-3"


        >
          {data.map((photo: DataImageItem) => (
            <div key={photo.id} className="relative w-full hover:scale-105  hover:shadow-xl rounded-3xl overflow-hidden transition">
              <Image
                src={photo.src.medium}
                alt={photo.alt || ""}
                width={photo.width}
                height={photo.height}
                className="w-full h-auto"
              />
            </div>
          ))}
        </Masonry>
      </div >

    </div >
  )
}
