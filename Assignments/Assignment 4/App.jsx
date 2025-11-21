import React from 'react'
import Fetch from './Fetch'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Cards from './router/Cards'
import Nav from './router/nav'

const App = () => {
  return (
    <>
      {/* <Fetch/> */}``
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Cards />} />
          <Route path='/cards' element={<Cards />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
