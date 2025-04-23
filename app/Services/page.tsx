export default function Services() {
  const services = [
    {
      title: "Jig Boring",
      desc: "High-precision boring for critical components in machinery and dies. Suitable for close-tolerance work.",
      img: "/images/machine1.png",
    },
    {
      title: "Horizontal Boring",
      desc: "Horizontal boring for heavy and complex machinery parts. Ideal for large-scale industrial applications.",
      img: "/images/machine2.png",
    },
    {
      title: "Milling & Precision Jobs",
      desc: "Precision milling and custom machining jobs based on client requirements with high accuracy and reliability.",
      img: "/images/machine3.png",
    },
  ];

  return (
    <section id="services" className="text-gray-600 body-font">
      <div className="container px-5 py-5 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
            Our Services
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500">
            We offer high-precision machining solutions including Jig Boring, Horizontal Boring, Milling, and custom precision job works tailored to your needs.
          </p>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-yellow-500 inline-flex"></div>
          </div>
        </div>

        <div className="flex flex-wrap -m-4">
          {services.map((service, index) => (
            <div key={index} className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={service.img}
                  alt={service.title}
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">SERVICE</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{service.title}</h1>
                  <p className="leading-relaxed mb-3">{service.desc}</p>
                  <div className="flex items-center flex-wrap">
                    <a className="text-yellow-500 inline-flex items-center cursor-pointer">
                      Learn More
                      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </a>
                    <span className="text-gray-400 ml-auto inline-flex items-center leading-none text-sm">
                      <svg className="w-4 h-4 mr-1" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7" />
                      </svg>
                      Featured
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
