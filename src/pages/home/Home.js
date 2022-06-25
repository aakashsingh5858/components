import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import './home.css'
import AccordionPage from '../accordionPage/accordionPage'

const Home = () => {
  return (
    <div>
        <Navbar />
        <div className='main_container'>
        <AccordionPage />
        </div>
      
    </div>
  )
}

export default Home