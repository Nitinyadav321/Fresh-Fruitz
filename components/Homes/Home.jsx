import React from 'react'
import Header from '../Header/Header'
import Hero from '../Hero/Hero'
import Aboutus from '../About/Aboutus'
import Service from '../Servic/Service'
import Fruits from '../Fruits/Fruits'
import Team from '../Team/Team'
import Footer from '../Footer/Footer'
const Home = () => {
  return (
    <>

      <Hero />
      <main id='main'>
        <Aboutus />
        <Service />
        <Fruits />
        <Team />
      </main>
      <Footer />
    </>
    
  )
}

export default Home