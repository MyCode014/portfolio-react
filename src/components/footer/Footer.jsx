import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>
               Portfolio Website
      </a>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Skills</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
        

      </ul>

      <div className='footer__social'>
        <a href=''></a>
        <a href=''></a>
        <a href=''></a>
      </div>

      <div className='footer_copyright'>
        <small>&copy; Portfolio </small>
      </div>
    </footer>
  )
}

export default Footer