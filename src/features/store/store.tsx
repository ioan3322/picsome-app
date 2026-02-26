import React from "react";

const photos = [
  {
    id: 1,
    title: "Fotografie 1",
    price: "10 RON",
    image: "https://picsum.photos/400/300?random=1"
  },
  {
    id: 2,
    title: "Fotografie 2",
    price: "12 RON",
    image: "https://picsum.photos/400/300?random=2"
  },
  {
    id: 3,
    title: "Fotografie 3",
    price: "15 RON",
    image: "https://picsum.photos/400/300?random=3"
  },
  {
    id: 4,
    title: "Fotografie 4",
    price: "9 RON",
    image: "https://picsum.photos/400/300?random=4"
  },
  {
    id: 5,
    title: "Fotografie 5",
    price: "20 RON",
    image: "https://picsum.photos/400/300?random=5"
  },
  {
    id: 6,
    title: "Fotografie 6",
    price: "18 RON",
    image: "https://picsum.photos/400/300?random=6"
  },
  {
    id: 7,
    title: "Fotografie 7",
    price: "25 RON",
    image: "https://picsum.photos/400/300?random=7"
  },
  {
    id: 8,
    title: "Fotografie 8",
    price: "30 RON",
    image: "https://picsum.photos/400/300?random=8"
  },
];

export const Store = () => {
  return (
    <div className="min-h-screen bg-white px-4 py-12 font-sans">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">
        Store
      </h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {photos.map(photo => (
          <div
            key={photo.id}
            className="border rounded-lg shadow-sm hover:shadow-md transition"
          >
            <img
              src={photo.image}
              alt={photo.title}
              className="w-full h-48 object-cover rounded-t-lg"
            />

            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800">
                {photo.title}
              </h2>

              <p className="text-gray-600 mb-4">{photo.price}</p>

              <button className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                Cumpără
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};