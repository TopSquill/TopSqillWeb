import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";
import About from "./components/About";
import Client from "./components/Client";
import Featured from "./components/Featured";
import Services from "./components/Services";
import Cta from "./components/Cta";
import Project from "./components/Project";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonial from "./components/Testimonial";
import Team from "./components/Team";
import Contact from "./components/Contact";
import { Helmet } from "react-helmet";

function App() {
  return (
    <>
      <Helmet>
        <script src="assets/vendor/purecounter/purecounter_vanilla.js"></script>
        <script src="assets/vendor/aos/aos.js"></script>
        <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
        <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
        <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
        <script src="assets/vendor/php-email-form/validate.js"></script>

        <script src="assets/js/main.js"></script>
      </Helmet>

      <Header />
      <Section />
      <main id="main">
        <About />
        <Client />
        <Featured />
        <Services />
        <Cta />
        <Project />
        <WhyChooseUs />
        <Testimonial />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
