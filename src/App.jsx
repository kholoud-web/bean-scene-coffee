
import './App.css'
import NavBar from './components/heroSection/navBar'
import HeroSection from './components/heroSection/heroSection'
import Discover from './components/discover/discover'
import Features from './components/features/features'
import TestimonialsSlider from './components/testimonials/testimonials'
import Footer from './components/footer/footer'


function App() {

  return (
  <>
  <NavBar/>
  <HeroSection/>
  <Discover/>
  <Features/>
    <TestimonialsSlider/>
    <Footer/>
    </>
  )
}

export default App
