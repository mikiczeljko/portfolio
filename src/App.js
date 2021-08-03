import Footer from "./components/Footer";
import Contact from "./components/Contact";
//import Testimonials from "./components/Testimonials";
//import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
//import Resume from "./components/Resume";
import Skills from "./components/Skills";
//import Facts from "./components/Facts";
import About from "./components/About";
//import Hero from "./components/Hero";
import Header from "./components/Header";

function App() {
  return (
    <>
      <>
        {/* ======= Mobile nav toggle button ======= */}
        <i className="bi bi-list mobile-nav-toggle d-xl-none" />
        {/* ======= Header ======= */}
        <Header />
        {/* End Header */}

        {/* ======= Hero Section ======= */}
        {/* End Hero */}
        <main id="main">
          {/* ======= About Section ======= */}
          <About />
          {/* End About Section */}

          {/* ======= Facts Section ======= */}
          {/* End Facts Section */}

          {/* ======= Skills Section ======= */}
          <Skills />
          {/* End Skills Section */}

          {/* ======= Resume Section ======= */}
          {/* End Resume Section */}

          {/* ======= Portfolio Section ======= */}
          <Portfolio />
          {/* End Portfolio Section */}

          {/* ======= Services Section ======= */}
          {/* End Services Section */}

          {/* ======= Testimonials Section ======= */}
          {/* End Testimonials Section */}

          {/* ======= Contact Section ======= */}
          <Contact />
          {/* End Contact Section */}
        </main>
        {/* End #main */}

        <Footer />

        <a
          href="#"
          className="back-to-top d-flex align-items-center justify-content-center"
        >
          <i className="bi bi-arrow-up-short" />
        </a>
      </>
    </>
  );
}

export default App;
