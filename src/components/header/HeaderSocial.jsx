import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const HeaderSocial = () => {
  return (
    <div className='header__social'>
        <a href='https://github.com/MyCode014' target="_blank"><BsLinkedin/> </a>
        <a href='https://www.linkedin.com/in/maja-markovic-75580a244/' target="_blank"> <FaGithub/> </a>
        <a href='#' target="_blank"> </a>
    </div>
  )
}

export default HeaderSocial