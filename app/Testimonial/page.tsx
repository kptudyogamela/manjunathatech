export default function Testimonials() {
  const testimonials = [
    {
      name: "Ravi Kumar",
      role: "Production Manager, BFW",
      text: "Manjunatha Precission Technology has been a reliable partner in delivering precision job works on time. Their work on our milling components is top-notch.",
      img: "images/testi1.png",
    },
    {
      name: "Divya Shetty",
      role: "Quality Head, Kennametal",
      text: "We appreciate their attention to detail and ability to meet our strict quality requirements. A growing name in precision manufacturing.",
      img: "images/testi2.png",
    },
    {
      name: "Mohammed Irfan",
      role: "Senior Engineer, ETA Technologies",
      text: "Their infrastructure is well-organized, and the team is both professional and responsive. Highly recommended for specialized job work.",
      img: "images/testi3.png",
    },
  ];

  return (
    <section id="testimonials" className="text-gray-600 body-font">
      <div className="container px-5 py-5 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
            Testomonials
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500">
            Our clients value our precision, reliability, and consistent quality. Here's what they have to say about working with us.
          </p>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-yellow-500 inline-flex"></div>
          </div>
        </div>

        <div className="flex flex-wrap -m-4">
          {testimonials.map((item, index) => (
            <div key={index} className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src={item.img}
                />
                <p className="leading-relaxed">{item.text}</p>
                <span className="inline-block h-1 w-10 rounded bg-yellow-500 mt-6 mb-4"></span>
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">{item.name}</h2>
                <p className="text-gray-500">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
