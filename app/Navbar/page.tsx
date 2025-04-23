'use client'

import { useEffect, useState } from 'react'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Phone } from "lucide-react"

function Navbar() {
  const [showAlert, setShowAlert] = useState(false)

  const handleScroll = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      const yOffset = -80 // adjust based on your navbar height
      const y = el.getBoundingClientRect().top + window.scrollY + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  // Hide alert after 3 seconds
  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => setShowAlert(false), 3000)
      return () => clearTimeout(timer)
    }
  }, [showAlert])

  return (
    <>
      {/* Top Info Bar */}
      <div className="w-full  bg-gray-100 text-center py-2 text-sm font-medium animate-pulse-color">
        📞 +91 99007 26508 | ✉️ kantharajur2023@gmail.com
      </div>

      {/* Sticky Navbar */}
      <header className="sticky top-0 z-50 text-gray-600 body-font shadow-md bg-white">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">

          {/* Logo / Title */}
          <button onClick={() => handleScroll('herosection')} className="flex title-font cursor-pointer font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img
              className="object-cover object-center w-10 h-10"
              src="images/logo.png"
              alt="company logo"
            />
            <span className="ml-3 text-xl hover:text-yellow-600 cursor-pointer">Manjunatha Tech</span>
          </button>

          {/* Navigation */}
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <button onClick={() => handleScroll('about')} className="mr-5 hover:text-yellow-600 cursor-pointer">About</button>
            <button onClick={() => handleScroll('services')} className="mr-5 hover:text-yellow-600 cursor-pointer">Services</button>
            <button onClick={() => handleScroll('infrastructure')} className="mr-5 hover:text-yellow-600 cursor-pointer">Infrastructure</button>
            <button onClick={() => handleScroll('ourClients')} className="mr-5 hover:text-yellow-600 cursor-pointer">Clients</button>
            <button onClick={() => handleScroll('gallery')} className="mr-5 hover:text-yellow-600 cursor-pointer">Gallery</button>
            <button onClick={() => handleScroll('testimonials')} className="mr-5 hover:text-yellow-600 cursor-pointer">Testimonials</button>
            <button onClick={() => handleScroll('contact')} className="mr-5 hover:text-yellow-600 cursor-pointer">Contact</button>
          </nav>

          {/* Quote Button */}
          <button
            className="inline-flex items-center bg-yellow-500 text-white border-0 py-1 px-3 focus:outline-none hover:bg-yellow-700 rounded text-base mt-4 md:mt-0 cursor-pointer"
            onClick={() => setShowAlert(true)}
          >
            Get a Quote
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>

        </div>

        {/* Alert */}
        {showAlert && (
          <div className="container mx-auto mt-2 px-5">
            <Alert>
              <Phone className="h-4 w-4" />
              <AlertTitle>Call Us</AlertTitle>
              <AlertDescription>
                For instant quotes, contact us directly at <strong>+91 99007 26508</strong>
              </AlertDescription>
            </Alert>
          </div>
        )}
      </header>
    </>
  )
}

export default Navbar
