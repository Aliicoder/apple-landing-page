import { lazy } from "react";
import Higlights from "./components/sections/Higlights";
import Hero from "./components/sections/Hero";
const Navbar = lazy(() => import("./components/sections/Navbar"));
const HowItWorks = lazy(() => import("./components/sections/HowItWorks"));
const Features = lazy(() => import("./components/sections/Features"));
const Model = lazy(() => import("./components/sections/Model"));
const Footer = lazy(() => import("./components/sections/Footer"));
const App = () => {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Higlights />
      <Model />
      <Features />
      <HowItWorks />
      <Footer />
    </main>
  );
};

export default App;
