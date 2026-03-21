import React from "react"
import Image from "next/image"

interface StoreProps {
  data: any[]
}

export const Store = ({ data }: StoreProps) => {
  return (
    <div className="min-h-screen bg-white px-4 py-12 font-sans">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">
        Store
      </h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {data.map((photo) => {
          const maxPreviewWidth = 320
          const displayWidth = Math.min(photo.width, maxPreviewWidth)
          const displayHeight = Math.round((photo.height / photo.width) * displayWidth)

          return (
            <div
              key={photo.id}
              className="border rounded-lg shadow-sm hover:shadow-md transition overflow-hidden bg-white"
            >
              <Image
                src={photo.download_url}
                alt={photo.author}
                width={displayWidth}
                height={displayHeight}
                className="w-full h-auto"
              />

              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800">
                  {photo.author}
                </h2>


                <button className="w-full py-2 bg-yellow-500 text-white rounded-lg  hover:bg-yellow-600 transition mt-2">
                  Cumpara
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}