import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './NavFoot/Navbar';
import Home from './Components/HomePage/Home';
import About from './Components/AboutPage/About';
import Footer from './NavFoot/Footer';
import Contact from './Components/Contact/Contact';
import Donate from './Components/Donate/Donate';
import ProjectPage from './Components/Project/ProjectPage';
import ServicesPage from './Components/Services/ServicesPage';
import EventPage from './Components/Event/EventPage';
import AdminLogin from './Login/AdminLogin';
import Dashboard from './Login/Dashboard';



function App() {
  const [count, setCount] = useState(0)

  return (
    
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/event" element={<EventPage />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/services" element={<ServicesPage />} />

        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
    </Router>
    </>
  )
}

export default App
