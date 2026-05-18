"use client"
import React from 'react'
import Masonry from 'react-masonry-css'
import { useStore } from '../../store'
import { ImageComponent } from '../images/image-component'

export const Favourite = () => {
  const favourites = useStore((state) => state.favourites)

  const breakpoints = {
    default: 5,
    1024: 3,
    640: 3,
    576: 2,
  }

  return (
    <div className="min-h-screen bg-white px-4 py-12 font-sans">
      <h1 className="text-3xl font-bold  text-gray-800 mb-10 px-4">Favourites</h1>

      <div className="max-w-6xl mx-auto">
        {favourites.length === 0 ? (
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <p className="text-gray-600">Nu ai adăugat încă nicio fotografie la favorite.</p>
          </div>
        ) : (
          <Masonry
            breakpointCols={breakpoints}
            className="flex gap-3"
            columnClassName="flex flex-col gap-3"
          >
            {favourites.map((photo, index) => (
              <ImageComponent photo={photo} key={photo.id} loading={index === 0 ? 'eager' : 'lazy'} />
            ))}
          </Masonry>
        )}
      </div>
    </div>
  )
}


