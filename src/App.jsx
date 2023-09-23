import React from 'react'

import { Hero, Stars, Tech, Experience, About, Works, Feedbacks, Contact, Navbar } from './components'

function App() {

  return (
    <div className="relative z-0 bg-primary">
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
