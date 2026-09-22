import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Homes/Home'
import Aboutus from './components/About/Aboutus'
import Service from './components/Servic/Service'
import Fruits from './components/Fruits/Fruits'
import Team from './components/Team/Team'
import Header from './components/Header/Header'


const App = () => {
  return (
<>
<Header />
<main id='main'>
<BrowserRouter>
<Routes>
  <Route path='/home' element={<Home />} />
  <Route path='/aboutus' element={<Aboutus />} />
  <Route path='/services' element={<Service />} />
  <Route path='/fruits' element={<Fruits />} />
  <Route path='/team' element={<Team />} />
</Routes>
</BrowserRouter>
</main>
  </>
  )
}

export default App