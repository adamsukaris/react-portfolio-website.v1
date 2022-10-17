import React from 'react'
import './Nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BsBook} from 'react-icons/bs'
import {RiServiceLine} from 'react-icons/ri'
import {IoCallOutline} from 'react-icons/io5'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')}className={activeNav === '#' ? 'active' :''}><AiOutlineHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')}className={activeNav === '#about' ? 'active' :''}><AiOutlineUser/></a>
      <a href="#experiences" onClick={() => setActiveNav('#experiences')}className={activeNav === '#experiences' ? 'active' :''}><BsBook/></a>
      <a href="#services" onClick={() => setActiveNav('#services')}className={activeNav === '#services' ? 'active' :''}><RiServiceLine/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')}className={activeNav === '#contact' ? 'active' :''}><IoCallOutline/></a>
    </nav>
  )
}

export default Nav