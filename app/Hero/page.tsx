'use client'

import React, { useState, useEffect } from 'react'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Phone } from "lucide-react"

function Herosection() {
  const [showAlert, setShowAlert] = useState(false)

  const handleQuoteClick = () => {
    setShowAlert(true)
  }

  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => setShowAlert(false), 3000)
      return () => clearTimeout(timer)
    }
  }, [showAlert])

  return (
    <section id="herosection" className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Precision Engineering for Every Industry
            <br className="hidden lg:inline-block" />
            Built on Trust and Quality
          </h1>
          <p className="mb-8 leading-relaxed">
            At Manjunatha Precission Technology, we specialize in Jig Boring, H. Boring, Milling,
            and all types of high-accuracy job works. Backed by experience and reliable infrastructure,
            we deliver precision that drives performance.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <button
              onClick={handleQuoteClick}
              className="inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg"
            >
              Get a Quote
            </button>
            <button
              onClick={() => {
                const el = document.getElementById('services')
                if (el) {
                  const y = el.getBoundingClientRect().top + window.scrollY - 80
                  window.scrollTo({ top: y, behavior: 'smooth' })
                }
              }}
              className="inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
            >
              Our Services
            </button>
          </div>

          {showAlert && (
            <div className="mt-6 w-full max-w-md">
              <Alert>
                <Phone className="h-4 w-4" />
                <AlertTitle>Call Us</AlertTitle>
                <AlertDescription>
                  For quotes, please contact us directly at <strong>+91 99007 26508</strong>
                </AlertDescription>
              </Alert>
            </div>
          )}
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"

            src="images/Udyamregistration2.png" />
        </div>
      </div>
    </section>
  )
}

export default Herosection
