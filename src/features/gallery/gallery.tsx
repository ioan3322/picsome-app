"use client"


import Masonry from "react-masonry-css"
import { ImageComponent } from "../images/image-component"
import { ImageItem } from "@/shared/utils/types"

import { useEffect,useState } from "react"

interface iProps {
  data: ImageItem[]
}



export const Gallery = ({ data }: iProps) => {
  const [searchTerm, setSearchTerm] = useState("")
  const [images, setImages] = useState(data)

  const breakpoints = {
    default: 5,
    1024: 3,
    640: 3,
    576: 2,
  }

  useEffect(() => {
    
    const timeout = setTimeout( async() => {
      const res=await fetch(`/api/?query=${searchTerm}`)
      const data=await res.json()
      setImages(data)
    }, 500)
    
    return () => clearTimeout(timeout)
  }, [searchTerm] )

  
  return (
    <div className="min-h-screen bg-white px-4 py-12 font-sans">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">
        Gallery
      </h1>
      <div className="flex justify-center mb-10 text-black">

       <input
        type="text"
        placeholder="Explore..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border p-2 mb-3 w-full max-w-md rounded-4xl focus:outline-none focus:ring-2 focus:ring-black hover:ring-2 hover:ring-black transition"
        
        />
        </div>

      
     
      
      <div className="max-w-6xl mx-auto">
        <Masonry
          breakpointCols={breakpoints}
          className="flex gap-3"
          columnClassName="flex flex-col gap-3"


        >
          {images.map((photo, index) => (
            <ImageComponent
              photo={photo}
              key={photo.id}
              loading={index === 0 ? "eager" : "lazy"}
            />

          ))}
        </Masonry>
      </div>
    </div >
  )
}