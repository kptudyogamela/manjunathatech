import React from 'react'

function OurTeam() {
  return (
    <div>
      <section id="team" className="text-gray-600 body-font">
        <div className="container px-5 py-5 mx-auto">

          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
              OUR TEAM
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500">
              Meet the people driving Manjunatha Precission Technology forward with passion, precision, and purpose.
            </p>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-yellow-500 inline-flex"></div>
            </div>
          </div>
          <div className="flex flex-wrap -m-4">
            {[
              {
                name: "Kantharaju",
                role: "Founder & Director",
                image: "images/team1.png",
                bio: "With decades of machining expertise, he leads with a focus on precision and client satisfaction.",
              },
              {
                name: "Shrihari",
                role: "Senior Engineer",
                image: "images/team4.png",
                bio: "Heads operations with deep technical insight into boring and milling processes.",
              },
              {
                name: "Vinutha K",
                role: "Quality Assurance",
                image: "images/team5.png",
                bio: "Ensures every job meets our high quality standards and customer specifications.",
              },
              {
                name: "Pratyush",
                role: "Operations Manager",
                image: "images/team2.png",
                bio: "Manages logistics, timelines, and coordinates project delivery for client success.",
              },
            ].map((member, index) => (
              <div className="p-4 lg:w-1/2" key={index}>
                <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                  <img
                    alt="team"
                    className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                    src={member.image}
                  />
                  <div className="flex-grow sm:pl-8">
                    <h2 className="title-font font-medium text-lg text-gray-900">{member.name}</h2>
                    <h3 className="text-gray-500 mb-3">{member.role}</h3>
                    <p className="mb-4">{member.bio}</p>
                    <span className="inline-flex">
                      <a className="text-gray-500">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                        </svg>
                      </a>
                      <a className="ml-2 text-gray-500">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                        </svg>
                      </a>
                      <a className="ml-2 text-gray-500">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                        </svg>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}

export default OurTeam
