import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import LandingPage from './components/LandingPage/LandingPage'
import Home from './components/Home/Home'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { UserContext } from './context/userContext';
import { ThemeProvider } from '@material-tailwind/react';

function App() {

  return (
    <>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <ThemeProvider>
    <UserContext.Provider value={{id: 1}}>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />}/>
          <Route path="/home" element={<Home />}/>
        </Routes>
      </Router>
    </UserContext.Provider>
    </ThemeProvider>
    </LocalizationProvider>
    </>
  )
}

export default App
