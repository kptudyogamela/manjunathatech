import OurTeam from "../Team/page";

export default function About() {
  return (
    <section id="about" className="text-gray-600 body-font">
      <div className="container px-5 py-5 mx-auto flex flex-wrap">
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
            About Us
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500">
            Manjunatha Precission Technology is a growing engineering company focused on delivering high-quality precision job works. With a skilled team and robust infrastructure, we aim to exceed client expectations through accuracy and reliability.
          </p>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-yellow-500 inline-flex"></div>
          </div>
        </div>

        <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
          <div className="w-full sm:p-4 px-4 mb-6">
            <h1 className="title-font font-medium text-xl mb-2 text-gray-900">
              About Manjunatha Precission Technology
            </h1>
            <div className="leading-relaxed">
              We are a steadily growing precision engineering company based in Bengaluru. Our core focus is delivering top-quality job works in Jig Boring, Horizontal Boring, Milling, and custom machining solutions. Backed by a skilled team and strong infrastructure, we ensure high-precision outputs for all industrial needs.
            </div>
          </div>
          <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
            <h2 className="title-font font-medium text-3xl text-gray-900">10+</h2>
            <p className="leading-relaxed">Years of Expertise</p>
          </div>
          <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
            <h2 className="title-font font-medium text-3xl text-gray-900">1600</h2>
            <p className="leading-relaxed">SQFT Facility</p>
          </div>
          <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
            <h2 className="title-font font-medium text-3xl text-gray-900">25HP</h2>
            <p className="leading-relaxed">Power Support</p>
          </div>
          <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
            <h2 className="title-font font-medium text-3xl text-gray-900">5+</h2>
            <p className="leading-relaxed">Major Clients</p>
          </div>
        </div>
        <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
          <img
            className="object-cover object-center w-full h-full"
            src="images/Udyamregistration2.png"
            alt="infrastructure"
          />
        </div>
      </div>

      <OurTeam />
    </section>
  );
}
