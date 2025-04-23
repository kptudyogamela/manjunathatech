import About from './About/page';
import Contact from './Contact/page';
import Footer from './Footer/page';
import Gallery from './Gallery/page';
import Herosection from './Hero/page';
import Infrastructure from './Infrastructure/page';
import { OurClients } from './OurClients/page';
import Services from './Services/page';
import Testimonials from './Testimonial/page';
export default function Home() {
  return (

    <>

      <section id="herosection" className="scroll-smooth">
        <Herosection />
      </section>
      <section id="about" className="scroll-smooth">
        <About />
      </section>
      <section id="services" className="...">
        <Services />
      </section>
      <section id="infrastructure" className="...">
        <Infrastructure />
      </section>
      <section id="ourClients" className="...">
        <OurClients />
      </section>
      <section id="gallery" className="...">
        <Gallery />
      </section>
      <section id="testimonials" className="...">
        <Testimonials />
      </section>
      <section id="contact" className="...">
        <Contact />
      </section>
      <Footer />
    </>
  );
}
