import React from 'react'

export default function Footer() {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-1 mx-auto">
        <div className="flex flex-wrap md:text-left text-center order-first gap-10">

          {/* Company Info (Always Visible) */}
          <div className="w-full md:w-1/4 flex-shrink-0 text-center md:text-left">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <img
                className="object-cover object-center w-10 h-10"
                src="images/logo.png"
                alt="company logo"
              />
              <span className="ml-3 text-xl">Manjunatha Precission Technology</span>
            </a>
            <p className="mt-2 text-sm text-gray-500">
              No 32 , 14th Cross Andrahalli Main Road Near Shushruthi School,
              Hegganahalli Bengaluru-560091
            </p>
          </div>

          {/* Services - Hidden on small devices */}
          <div className="w-80 md:w-1/6 px-4  md:block">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Important Files</h2>
            <nav className="list-none mb-10 space-y-2">
              <li> <a
                href="/Files/about.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-yellow-500 cursor-pointer"
              >
                About Us
              </a></li>
              <li> <a
                href="/Files/gst.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-yellow-500 cursor-pointer"
              >
                GST Certificate
              </a></li><li> <a
                href="/Files/MSME.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-yellow-500 cursor-pointer"
              >
                MSME Certificate
              </a></li>
              <li> <a
                href="/Files/udyam.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-yellow-500 cursor-pointer"
              >
                UDYAM Certificate
              </a></li>
            </nav>
          </div>

          {/* General Links - Hidden on small devices */}
          <div className="w-80 md:w-1/6 px-0  md:block">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">GENERAL LINKS</h2>
            <nav className="list-none mb-10 space-y-2">
              <li> <a
                href="/Files/Terms.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-yellow-500 cursor-pointer"
              >Terms & Conditions</a></li>
              <li> <a
                href="/Files/Privacy.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-yellow-500 cursor-pointer"
              >Privacy Policy</a></li>
              <li> <a
                href="/Files/Disclaimer.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-yellow-500 cursor-pointer"
              >Disclaimer</a></li>
              <li> <a
                href="/Files/conduct.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-yellow-500 cursor-pointer"
              >Code of Conduct</a></li>
            </nav>
          </div>

          {/* Subscribe - Hidden on small devices */}
          <div className="w-80 md:w-1/4 px-4 hidden md:block">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">SUBSCRIBE</h2>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-start justify-center items-center">
              <div className="relative w-full sm:w-auto sm:mr-4 mb-2 sm:mb-0">
                <label htmlFor="footer-field" className="leading-7 text-sm text-gray-600">Email</label>
                <input type="text" id="footer-field" name="footer-field" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-white focus:ring-2 focus:ring-yellow-200 focus:border-yellow-500 text-base outline-none text-gray-700 py-1 px-3 transition duration-200 ease-in-out" />
              </div>
              <button className="flex-shrink-0 inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded">
                Subscribe
              </button>
            </div>
            <p className="text-gray-500 text-sm mt-2 md:text-left text-center">
              Get updates from Manjunatha Precission Technology
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-100">
        <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col justify-between">
          <p className="text-sm text-gray-500 hover:text-yellow-500">© 2025 Manjunatha Precission Technology</p>
          <p className="text-sm text-gray-500 hover:text-yellow-500 cursor-pointer">Developed by Swasyaha Solutions</p>
          <span className="inline-flex mt-2 sm:mt-0">
            {/* Facebook */}
            <a className="text-gray-500 mr-2 hover:text-yellow-600" href="#" aria-label="Facebook">
              <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>

            {/* Twitter */}
            <a className="text-gray-500 mr-2 hover:text-yellow-600" href="#" aria-label="Twitter">
              <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0016 3a4.5 4.5 0 00-4.39 5.54A12.94 12.94 0 013 4s-4 9 5 13a13.05 13.05 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>

            {/* Instagram */}
            <a className="text-gray-500 hover:text-yellow-600" href="#" aria-label="Instagram">
              <svg fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>{/* YouTube */}
            {/* YouTube */}
            <a className="text-gray-500 ml-2 hover:text-yellow-600" href="#" aria-label="YouTube">
              <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M19.615 3.184A4.873 4.873 0 0021.5 6.07v11.86a4.873 4.873 0 01-1.885 3.046C18.507 21.5 12 21.5 12 21.5s-6.507 0-7.615-.524A4.873 4.873 0 012.5 17.93V6.07a4.873 4.873 0 011.885-3.046C5.493 2.5 12 2.5 12 2.5s6.507 0 7.615.684zM10 15.5v-7l6 3.5-6 3.5z" />
              </svg>
            </a>


          </span>
        </div>
      </div>
    </footer>
  )
}
