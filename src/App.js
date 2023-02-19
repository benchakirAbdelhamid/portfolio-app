import Header from "./comonents/header/Header";
import HomePage from "./comonents/homePage/HomePage";
import AboutPage from "./comonents/aboutPage/AboutPage";
import Portfolio from "./comonents/portfolioPage/Portfolio";
import Testimonials from "./comonents/testimonials/testimonials";
import Footer from "./comonents/footer/Footer";
import AnimationElement from "./comonents/animationElemen/AnimationElement";
import "swiper/css/bundle";
function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <HomePage />
        <AboutPage />
        <Portfolio />
        <Testimonials />
      </main>
      <Footer />
      <AnimationElement />
    </div>
  );
}

export default App;
