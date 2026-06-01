"use client"

import { useStore } from '../../store'

export const Cart = () => {
  const cart = useStore((state) => state.cart)
  const removeFromCart = useStore((state) => state.removeFromCart)

  return (
    <div className="min-h-screen bg-white px-4 py-12 font-sans">


      <div className="max-w-4xl mx-auto flex flex-col gap-4">
        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center text-center py-20 px-20 border-1 border-gray-300 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              You have no items in your cart!
            </h2>
            <p className="text-black justify-center flex items-center text-center text-lg">
              You haven't added any photos to your cart yet. Explore our gallery and add some photos to your cart!
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
          cart.map((photo) => (
            <div key={photo.id} className="flex items-center bg-white rounded-lg shadow p-4 hover:shadow-lg transition-shadow">
              <div className="flex-shrink-0 w-36 h-24 overflow-hidden rounded">
                <img src={photo.src.medium} alt={photo.alt || photo.photographer} className="w-full h-full object-cover hover:scale-105 transition-transform" />
              </div>

              <div className="flex-1 px-4">
                <div className="text-gray-800 font-semibold">{photo.alt || 'No description'}</div>
                <div className="text-sm text-gray-500 mt-1">{photo.width} x {photo.height}px</div>
              </div>

              <div className="w-40 text-right">
                <div className="text-sm font-medium text-gray-800">{photo.photographer}</div>
                <div >
                  <button onClick={() => removeFromCart(photo.id)} className=' px-2 py-2 text-right text-xs border-sm border-white/20 bg-gray-100 px-4 py-2 text-black font-bold shadow-lg backdrop-blur-md backdrop-saturate-100 rounded-3xl hover:bg-black/20 transition '>Remove</button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      <button onClick={() => console.log('Checkout')}
        className="fixed right-6 bottom-6 z-50 text-center text-md bg-black text-white px-5 py-3 font-bold rounded-full shadow-2xl hover:scale-105 transition-transform">
        Checkout
      </button>
    </div >
  )
}