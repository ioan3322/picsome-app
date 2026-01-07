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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="h-48 bg-gray-200 rounded-lg"></div>
          <div className="h-48 bg-gray-200 rounded-lg"></div>
          <div className="h-48 bg-gray-200 rounded-lg"></div>
          <div className="h-48 bg-gray-200 rounded-lg"></div>
          <div className="h-48 bg-gray-200 rounded-lg"></div>
          <div className="h-48 bg-gray-200 rounded-lg"></div>
        </div>
      </div>

    </div>
  )
}
