import { useState, useEffect } from 'react'
import './App.scss'
import Home from '../src/components/Home'
import Nav from '../src/components/Nav'
import CV from '../src/components/CV'

function App() {


  return (
    <>
      <div>
        <Home />
        <Nav />
        <CV />
      </div>
    </>
  )
}

export default App
