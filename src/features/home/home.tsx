"use client"
import Link from 'next/link'
import Image from "next/image"
import Masonry from "react-masonry-css"

const breakpoints = {
  default: 5,
  1024: 2,
  640: 1,
}
interface IProps {
  data: any[]
}
interface HomeProps {
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


export const Home = ({ data }: HomeProps) => {
  return (
    <div className="min-h-screen bg-white font-sans">
      <div className="flex flex-col items-center justify-center text-center py-20 px-4 bg-gray-50">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          PicSomeAPP
        </h1>
        <p className="text-gray-600 max-w-xl mb-6">
          Descoperă fotografii de înaltă calitate pentru proiectele tale creative.
        </p>
        <Link href='/gallery'>

          <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
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
          {data.map((photo) => (
            <div key={photo.id} className="relative w-full">
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
