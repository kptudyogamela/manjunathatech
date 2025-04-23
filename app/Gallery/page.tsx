'use client'

import { useState } from 'react'
export default function Gallery() {
  const [modalImg, setModalImg] = useState<string | null>(null)

  const openModal = (img: string) => setModalImg(img)
  const closeModal = () => setModalImg(null)

  return (
    <section id="gallery" className="text-gray-600 body-font relative">
      <div className="container px-5 py-5 mx-auto flex flex-wrap">
        <div className="lg:w-2/3 mx-auto">
          <div className="text-center mb-20">
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

          {/* Main Banner Image */}
          <div className="flex flex-wrap w-full bg-gray-100 py-32 px-10 relative mb-4">
            <img
              alt="main gallery"
              className="w-full object-cover h-full object-center block opacity-25 absolute inset-0"
              src="/images/machine1.png"
            />
            <div className="text-center relative z-10 w-full">
              <h2 className="text-2xl text-gray-900 font-medium title-font mb-2">Our Workshop</h2>
              <p className="leading-relaxed">
                Precision-driven processes and machinery setup powering industrial excellence.
              </p>
              <button onClick={() => openModal("/images/machine1.png")} className="mt-3 text-yellow-500 inline-flex items-center cursor-pointer">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Two Grid Columns */}
          <div className="flex flex-wrap -mx-2">
            {[
              { title: "Jig Boring", img: "/images/machine2.png", desc: "High-accuracy boring machines in action, perfect for precision jobs." },
              { title: "Milling Section", img: "/images/machine3.png", desc: "A glimpse of our milling department and setups." },
            ].map((item, index) => (
              <div key={index} className="px-2 w-1/2">
                <div className="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
                  <img
                    alt={item.title}
                    className="w-full object-cover h-full object-center block opacity-25 absolute inset-0"
                    src={item.img}
                  />
                  <div className="text-center relative z-10 w-full">
                    <h2 className="text-xl text-gray-900 font-medium title-font mb-2">{item.title}</h2>
                    <p className="leading-relaxed">{item.desc}</p>
                    <button onClick={() => openModal(item.img)} className="mt-3 text-yellow-500 inline-flex items-center cursor-pointer">
                      Learn More
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {modalImg && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center"
          onClick={closeModal}
        >
          <div className="bg-white rounded-lg overflow-hidden max-w-3xl mx-auto shadow-lg relative" onClick={e => e.stopPropagation()}>
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 bg-gray-100 hover:bg-gray-300 rounded-full p-2"
            >
              ✕
            </button>
            <img src={modalImg} alt="Enlarged view" className="w-95 h-auto object-contain" />
          </div>
        </div>
      )}
    </section>
  )
}
