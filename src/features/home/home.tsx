"use client"

import Link from 'next/link'
import Image from "next/image"
import Masonry from "react-masonry-css"
import { DataImageItem } from '@/shared/utils/types'
import {useEffect, useState } from 'react'
import cx from 'classnames'


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
      
      <div  className="relative flex flex-col items-center justify-center text-center py-20 px-4 bg-cover bg-center rounded-[0_0_8px_8px] shadow-md overflow-hidden"
          style={{ backgroundImage: `url(${bgImage})`}}>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-green-500/30" />        
      <div className="relative z-10"/>
      <h1 className="text-4xl font-bold text-white mb-4 z-20">
          Wellcome to PicSome App
        </h1>
       
        <Link href='/gallery' className='z-30'>

          <button className="px-6 py-3 border-b border-white/20 bg-white/10 px-4 py-2 text-white font-bold shadow-lg backdrop-blur-md backdrop-saturate-150 rounded-3xl hover:bg-white/20 transition">
            Vezi galeria
          </button>
        </Link>
      </div>

      
      <div className="max-w-6xl mx-auto py-16 px-4 items-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
          Cele mai recente fotografii
        </h2>
        <div style={{ display: "flex", gap: "12px" }} className="justify-center mb-10">

        <button className=' text-l font-semibold text-gray-800 mb-8 text-center bg-gray-100 px-4 py-2 rounded-full hover:bg-gray-200 transition mb-10'>
          Wallpapers
        </button>
        <button className=' text-l font-semibold text-gray-800 mb-8 text-center bg-gray-100 px-4 py-2 rounded-full hover:bg-gray-200 transition mb-10'>
          Nature
        </button>
        <button className=' text-l font-semibold text-gray-800 mb-8 text-center bg-gray-100 px-4 py-2 rounded-full hover:bg-gray-200 transition mb-10'>
          People
        </button>
        <button className=' text-l font-semibold text-gray-800 mb-8 text-center bg-gray-100 px-4 py-2 rounded-full hover:bg-gray-200 transition mb-10'>
          Architecture
        </button>
        <button className=' text-l font-semibold text-gray-800 mb-8 text-center bg-gray-100 px-4 py-2 rounded-full hover:bg-gray-200 transition mb-10'>
          Food
        </button>
        
        </div>

        <Masonry
          breakpointCols={breakpoints}
          className="flex gap-3"
          columnClassName="flex flex-col gap-3"


        >
          {data.map((photo: DataImageItem) => (
            <div key={photo.id} className="relative w-full   hover:shadow-xl rounded-3xl overflow-hidden transition">
              <Image 
                src={photo.src.medium}
                alt={photo.alt || ""}
                width={photo.width}
                height={photo.height}
                className="w-full h-auto w-full h-full object-cover hover:scale-105 transition-transform"
              />
            </div>
          ))}
        </Masonry>
      </div >

    </div >
  )
}
