import './App.css'
import { Homepage } from './pages/Homepage'
import { Projectpage } from './pages/Projectpage'
import { Aboutmepage } from './pages/Aboutmepage'
import { Contactpage } from './pages/Contactpage'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage/>}></Route>
          <Route path="/project/:project" element={<Projectpage/>}></Route>
          <Route path="omMeg" element={<Aboutmepage/>}></Route>
          <Route path="siHei" element={<Contactpage/>}></Route>
        </Routes>
        
      </Router>
    </>
  )
}

export default App
