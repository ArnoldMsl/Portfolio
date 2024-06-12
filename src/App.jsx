import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss'
import Home from '../src/components/Home'
import Nav from '../src/components/Nav'
import CV from '../src/components/CV'

function App() {


  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Nav" element={<Nav />} />
            <Route path="/CV" element={<CV />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
