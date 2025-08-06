import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import SignUp from './pages/Signup'
import SignIn from './pages/SignIN'
import Projects from './pages/Projects'
import Dashboard from './pages/Dashboard'
import Header from './components/Header'
import Footer from './components/footer'


export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/projects" element={<Projects />} />


      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
