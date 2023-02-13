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
import Counts from "./components/Counts";
import Testimonial from "./components/Testimonial";
import Team from "./components/Team";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Header />
      <Section />
      <main id="main">
        <About />
        <Client />
        <Featured />
        <Services />
        <Cta />
        <Project />
        <Counts />
        <Testimonial />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
