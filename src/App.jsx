import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
      <Router>
      <Navbar />
        <div className="flex flex-col items-center justify-center">
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/Nav" element={<Nav />} />
            <Route path="/Skills" element={<Skills />} />
            <Route path="/CV" element={<CV />} />
            <Route path="/Timeline" element={<Timeline />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
