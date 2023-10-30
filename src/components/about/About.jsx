
import React from 'react'
import './about.css'
import MM from '../../assets/logo2.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary}from 'react-icons/vsc'

import{Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'

import {Pagination} from 'swiper'

const About = () => {

  

  return (
    <section id='about'>
      
      <h2>About me</h2>

  

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={MM} alt='About Image'/>
          </div>
        </div>


        <div className='about__content '>
         <div
        className=' about__cards'>

          <article className='about__card'>

            <FaAward className='about__icon'/>
            
            <h5>Education</h5>
            
            <h4>Visoka poslovna skola strukovnih studija
            </h4>
            <h5>•Primenjena informatika</h5>
            <h5>2019-2022</h5>


          </article>

          <article className='about__card'>
            <FiUsers className='about__icon'/>
            <h5>Languanges</h5>
            <h4>•English-Profesional Working Profiency</h4>
            <h4>•German-Profesional Working Profiency</h4>

          </article>
          

          <article className='about__card'>
            <VscFolderLibrary className='about__icon'/>
            <h5>Experience</h5>
            <h4>•ComData</h4>
            <h5>Frontend Developer</h5>
            <h4>•LoadsKing doo</h4>
            <h5>Web Developer</h5>


          </article>

          
          
          
         </div>
         </div>
         
         </div>
      
    </section>
  )
}

export default About;