import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './output.css'
import Home from '../src/components/Home'
import Nav from '../src/components/Nav'
import CV from '../src/components/CV'
import Skills from '../src/components/Skills'
import Timeline from '../src/components/Timeline'
import Projects from '../src/components/Projects'

function App() {


  return (
    <>
      <Router>
        <div className="flex items-center justify-center min-h-screen min-w-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Nav" element={<Nav />} />
            <Route path="/Skills" element={<Skills />} />
            <Route path="/CV" element={<CV />} />
            <Route path="/Timeline" element={<Timeline />} />
            <Route path="/Projects" element={<Projects />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
