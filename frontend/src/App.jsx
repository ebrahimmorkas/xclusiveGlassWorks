import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import DesignGallery from './components/DesignGallery'
import TopCustomers from './components/TopCustomers'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <DesignGallery />
      <TopCustomers />
      <ContactUs />
      <Footer />
    </div>
  )
}

export default App
