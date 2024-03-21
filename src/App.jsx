import React from 'react'

import { Hero, Stars, Tech, Experience, About, Works, Feedbacks, Contact, Navbar } from './components'
import TabComponent from './Navigation'

function App() {

  return (
    <div className="relative z-0 bg-primary scroll-smooth">
      <TabComponent/>
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      <Works />
      <Feedbacks />
      <div className='relative z-0'>
        <Contact />
        <Stars />
      </div>
    </div>
  )
}

export default App
