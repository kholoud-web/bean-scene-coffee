
import './App.css'
import NavBar from './components/heroSection/navBar'
import HeroSection from './components/heroSection/heroSection'
import Discover from './components/discover/discover'
import Features from './components/features/features'
import TestimonialsSlider from './components/testimonials/testimonials'
import Footer from './components/footer/footer'
import { Suspense, lazy } from "react";



function App() {
  
  const Discover = lazy(() => import("./components/discover/discover"));
const Features = lazy(() => import("./components/features/features"));
const TestimonialsSlider = lazy(() => import("./components/testimonials/testimonials"));
const Footer = lazy(() => import("./components/footer/footer"));


  return (
  <>
  <NavBar/>
  <HeroSection/>
  <Suspense fallback={<div>Loading...</div>}>
  <Discover/>
  <Features/>
    <TestimonialsSlider/>
    <Footer/>
    </Suspense>
    </>
  )
}

export default App
