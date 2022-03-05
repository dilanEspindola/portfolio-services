import { Routes, Route } from "react-router-dom";
import HeaderMenu from "./components/HeaderMenu";
import { Home } from "./components/Home/Home";
import { AboutUs } from "./components/AboutUs/AboutUs";
import { OurProducts } from "./components/OurProducts/OurProducts";
import { ContactUs } from "./components/ContactUs/ContactUs";
import { ParallaxProvider } from "react-scroll-parallax";

function App() {
  return (
    <>
      <ParallaxProvider>
        <HeaderMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre-nosotros" element={<AboutUs />} />
          <Route path="/nuestros-productos" element={<OurProducts />} />
          <Route path="/contactanos" element={<ContactUs />} />
        </Routes>
      </ParallaxProvider>
    </>
  );
}

export default App;
