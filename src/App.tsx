import About from './components/About';
import BottomGradient from './components/BottomGradient';
import CTA from './components/CTA';
import Carousel from './components/Carousel';
import Certifications from './components/Certifications';
import Faq from './components/Faq';
import Features from './components/Features';
import Footer from './components/footer/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Services from './components/Services';
import TechCompanies from './components/TechCompanies';
import TopGradient from './components/TopGradient';
import Wrapper from './container/Wrapper';

function App() {
  return (
    <div>
      <Navbar />
      <Wrapper>
        <Hero />
      </Wrapper>
      <TopGradient>
        <Wrapper>
          <TechCompanies />
          <Features />
          <Services />
          <About />
          <Certifications />
        </Wrapper>
      </TopGradient>
      <Wrapper>
        <Projects />
      </Wrapper>
      <BottomGradient>
        <Wrapper>
          <Carousel />
          <CTA />
          <Faq />
          <Footer />
        </Wrapper>
      </BottomGradient>
    </div>
  );
}

export default App;
