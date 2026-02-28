import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface IProps {
  data: any[]
}


export const Home = ({ data }: IProps) => {
  return (
    <div className="min-h-screen bg-white font-sans">

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center py-20 px-4 bg-gray-50">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          PicSomeAPP
        </h1>
        <p className="text-gray-600 max-w-xl mb-6">
          Descoperă fotografii de înaltă calitate pentru proiectele tale creative.
        </p>
        <Link href='/store/'>

          <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
            Vezi galeria
          </button>
        </Link>
      </div>

      {/* Gallery Preview */}
      <div className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
          Fotografii populare
        </h2>


        <div className="grid grid-cols-30 sm:grid-cols-20 md:grid-cols-4 gap-6">
          {
            data.map((item: any) => (
              <div className="shrink-0" key={item.id}>

                <Image width={300} height={300} src={item.download_url} alt="Gallery Image 1" className="rounded-[6px] border border-indigo-600 shrink-0" />
              </div>
            ))
          }
        </div>




      </div>

    </div>
  )
}
