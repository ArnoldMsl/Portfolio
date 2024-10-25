import './output.css'
import Home from '../src/components/Home'
import Nav from '../src/components/Nav'
import CV from '../src/components/CV'
import Skills from '../src/components/Skills'
import Timeline from '../src/components/Timeline'
import Projects from '../src/components/Projects'
import Contact from '../src/components/Contact'
import Navbar from '../src/components/Navbar'

function App() {


  return (
    <>
      <div>
        <Navbar />
        <div className="flex flex-col items-center justify-center">
          <Home />
          <Nav />
          <Timeline />
          <Projects />
          <Skills />
          <CV />
          <Contact />
        </div>
      </div>
    </>
  )
}

export default App
