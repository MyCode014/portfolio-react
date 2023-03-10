
import './header.css'
import Informations from './Informations'
import ME from '../../assets/me1.png'
import HeaderSocial from './HeaderSocial'
import React, {useState, useEffect} from 'react'
import {BsSun, BsMoon}from 'react-icons/bs'



const Header = () => {

  const [theme, setTheme] = useState('dark-theme');
  

  useEffect(() => {
    document.documentElement.className= theme;
  },[theme]);

  const toggleTheme = () => {
    if(theme === 'light-theme'){
      setTheme('dar-theme');
    }else {
      setTheme('light-theme');
    }
    }
  
  
  
  return (
    <header>
      <div className="container header__container">
        <div className="theme__toggler" onClick={toggleTheme}>
          {theme === 'light-theme'?  <BsMoon/>:<BsSun/> }
        
        </div>
        
        <h1>Maja Markovic </h1>
        
        <h2 className='text-light'>Web Developer</h2>
        
        <Informations/>
        <HeaderSocial/>
       
        <div className='me'>
          <img src={ME} alt="me" />
          </div>
          
      

        <a href='#contact' className='scroll_down'>Scroll down</a>
        
      </div>
    </header>
  )
}

export default Header