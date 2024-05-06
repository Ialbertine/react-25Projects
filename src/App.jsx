import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Accordion from './components/accordion/Accordion'
import RandomColors from './components/Randomcolor/RandomColors'
import Layout from './components/Layout'


const App = () => {
  return (
    
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout />}>
          <Route path="/" element={<Accordion />} />
          <Route path="/randomcolors" element={<RandomColors />} />
      </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App