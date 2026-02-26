import React from 'react'
import Link from 'next/link'
export const Home = () => {
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
          <img src="https://picsum.photos/300/200?random=1" alt="Gallery Image 1" />
          <img src="https://picsum.photos/300/200?random=2" alt="Gallery Image 2" />
          <img src="https://picsum.photos/300/200?random=3" alt="Gallery Image 3" />
          <img src="https://picsum.photos/300/200?random=4" alt="Gallery Image 4" />
          <img src="https://picsum.photos/300/200?random=5" alt="Gallery Image 5" />
          <img src="https://picsum.photos/300/200?random=6" alt="Gallery Image 6" />
          <img src="https://picsum.photos/300/200?random=7" alt="Gallery Image 7" />
          <img src="https://picsum.photos/300/200?random=8" alt="Gallery Image 8" />
          <img src="https://picsum.photos/300/200?random=9" alt="Gallery Image 9" />
          <img src="https://picsum.photos/300/200?random=10" alt="Gallery Image 10" />
          <img src="https://picsum.photos/300/200?random=11" alt="Gallery Image 11" />
          <img src="https://picsum.photos/300/200?random=12" alt="Gallery Image 12" />
          <img src="https://picsum.photos/300/200?random=13" alt="Gallery Image 13" />
          <img src="https://picsum.photos/300/200?random=14" alt="Gallery Image 14" />
          <img src="https://picsum.photos/300/200?random=15" alt="Gallery Image 15" />
          <img src="https://picsum.photos/300/200?random=16" alt="Gallery Image 16" />
          <img src="https://picsum.photos/300/200?random=17" alt="Gallery Image 17" />
          <img src="https://picsum.photos/300/200?random=18" alt="Gallery Image 18" />
          <img src="https://picsum.photos/300/200?random=19" alt="Gallery Image 19" />
          <img src="https://picsum.photos/300/200?random=20" alt="Gallery Image 20" />
          <img src="https://picsum.photos/300/200?random=21" alt="Gallery Image 21" />
          <img src="https://picsum.photos/300/200?random=22" alt="Gallery Image 22" />
          <img src="https://picsum.photos/300/200?random=23" alt="Gallery Image 23" />
          <img src="https://picsum.photos/300/200?random=24" alt="Gallery Image 24" />
        </div>
      </div>

    </div>
  )
}
