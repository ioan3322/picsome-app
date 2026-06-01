"use client"

import Masonry from 'react-masonry-css'
import { useStore } from '../../store'
import { ImageComponent } from '../images/image-component'
import { BREAKPOINTS } from '@/shared/utils/constants'

export const Favourites = () => {
  const favourites = useStore((state) => state.favourites)

  return (
    <div className="min-h-screen bg-white px-4 py-12 font-sans">
      <div className="max-w-6xl mx-auto">
        {favourites.length === 0 ? (
          <div className="flex flex-col items-center justify-center text-center py-20 px-20 border-1 border-gray-300 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Your content,your choice!
            </h2>
            <p className="text-black justify-center flex items-center text-center text-lg">
              You haven't added any photos to your favourites yet. Explore our gallery and click the heart icon on any photo you like to add it to your favourites!
            </p>
            <a href="/gallery" className="mt-6">
              <button className="px-8 py-3 rounded-2xl bg-gradient-to-r from-gray-800/70 to-black/70 border border-white/20 backdrop-blur-md text-white font-semibold hover:scale-105 transition">
                Start Searching
              </button>
            </a>
            <div>


            </div>
          </div>


        ) : (
          <Masonry
            breakpointCols={BREAKPOINTS}
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


