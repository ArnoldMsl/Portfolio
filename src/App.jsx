import './output.css'
import React, { Suspense } from 'react';
import Home from '../src/components/Home'
import Nav from '../src/components/Nav'
import CV from '../src/components/CV'
import Skills from '../src/components/Skills'
import Timeline from '../src/components/Timeline'
import Contact from '../src/components/Contact'
import Navbar from '../src/components/Navbar'
import Footer from '../src/components/Footer'
import Loader from '../src/components/Loader'

const Projects = React.lazy(() => import('../src/components/Projects'))

function App() {

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center">
        <Home />
        <Nav />
        <Timeline />
        <Suspense fallback={<Loader />}>
          <Projects />
        </Suspense>
        <Skills />
        <CV />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
