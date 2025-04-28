'use client'

import { useState } from 'react'

export default function Gallery() {
  const [modalImg, setModalImg] = useState<string | null>(null)

  const images = [
    "/images/1.jpg",
    "/images/2.jpg",
    "/images/3.jpg",
    "/images/4.jpg",
    "/images/5.jpg",
    "/images/6.jpg",
    "/images/7.jpg",
    "/images/8.jpg",
    "/images/9.jpg",
    "/images/10.jpg",
    "/images/11.jpg",
    "/images/12.jpg",
    "/images/13.jpg",
  ]

  return (
    <section className="text-gray-600 body-font">
      <div className="text-center pt-20 mb-20">
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
          Gallery
        </h1>
        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500">
          A visual showcase of our facility, precision machines, and the craftsmanship behind every project we deliver.
        </p>
        <div className="flex mt-6 justify-center">
          <div className="w-16 h-1 rounded-full bg-yellow-500 inline-flex"></div>
        </div>
      </div>

      <div className="container px-5 py-1 mx-auto flex flex-wrap">

        {/* Gallery */}
        <div className="flex flex-wrap md:-m-1 -m-1">
          {/* Left column */}
          <div className="flex flex-wrap w-1/2">
            {images.slice(0, 7).map((src, index) => (
              <div
                key={index}
                className={index === 2 ? "md:p-1 p-1 w-full" : "md:p-1 p-1 w-1/2"}
              >
                <img
                  onClick={() => setModalImg(src)}
                  alt={`gallery left ${index}`}
                  className="w-full h-48 sm:h-64 object-cover object-center block cursor-pointer hover:scale-105 transition-transform duration-300 rounded"
                  src={src}
                />
              </div>
            ))}
          </div>

          {/* Right column */}
          <div className="flex flex-wrap w-1/2">
            {images.slice(7).map((src, index) => (
              <div
                key={index}
                className={index === 0 ? "md:p-1 p-1 w-full" : "md:p-1 p-1 w-1/2"}
              >
                <img
                  onClick={() => setModalImg(src)}
                  alt={`gallery right ${index}`}
                  className="w-full h-48 sm:h-64 object-cover object-center block cursor-pointer hover:scale-105 transition-transform duration-300 rounded"
                  src={src}
                />
              </div>
            ))}
          </div>
        </div>
      </div>



      {/* Modal */}
      {modalImg && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center"
          onClick={() => setModalImg(null)}
        >
          <div
            className="bg-white rounded-lg overflow-hidden max-w-3xl w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModalImg(null)}
              className="absolute top-2 right-2 text-gray-700 hover:text-gray-900 text-3xl font-bold"
            >
              ×
            </button>
            <img
              src={modalImg}
              alt="Expanded view"
              className="w-full h-98 object-contain"
            />
          </div>
        </div>
      )}
    </section>
  )
}
