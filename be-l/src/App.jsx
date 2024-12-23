import { useState } from 'react'
import './App.css'
import Front from './components/Front'
import Header from './components/Header'
import AboutUs from './components/AboutUs'
import Faqs from './components/Faqs'
import Courses from './components/Courses'
import Stats from './components/Stats'
import Team from './components/Team'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'
import ChooseUs from './components/ChooseUs'

function App() {


  return (
    <>
      
      <Front/>
      <AboutUs/>
      <Faqs/>
      <Courses/>
      <Stats/>
      <Team/>
      <ContactUs/>
      
    </>
  )
}

export default App
