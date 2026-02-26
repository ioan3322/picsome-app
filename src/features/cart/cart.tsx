import React from 'react'

export const Cart = () => {
  console.log("File")
  return (
    <div className="min-h-screen bg-white px-4 py-12 font-sans">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">
        Cart
      </h1>

      <div className="max-w-6xl mx-auto">
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Your Cart</h2>
          <p className="text-gray-600">Your cart is empty.</p>
        </div>
      </div>
    </div>
  )
}