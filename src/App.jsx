import './output.css'
import Home from '../src/components/Home'
import Nav from '../src/components/Nav'
import CV from '../src/components/CV'
import Skills from '../src/components/Skills'
import Timeline from '../src/components/Timeline'
import Projects from '../src/components/Projects'
import Contact from '../src/components/Contact'
import Navbar from '../src/components/Navbar'
import Footer from '../src/components/Footer'

function App() {


  return (
    <>
        <Navbar />
        <div className="flex flex-col items-center justify-center md:space-y-48 space-y-28">
          <Home />
          <Nav />
          <Timeline />
          <Projects />
          <Skills />
          <CV />
          <Contact />
          <Footer />
        </div>
    </>
  )
}

export default App
