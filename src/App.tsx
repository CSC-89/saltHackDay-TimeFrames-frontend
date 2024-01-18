import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import LandingPage from './components/LandingPage'
import Home from './components/Home'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />}/>
          <Route path={`/home`} element={<Home />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
