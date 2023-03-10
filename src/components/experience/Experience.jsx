import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
    
    <h2>My Skills</h2>

    <div className='container experience__container'>
      <div className='experience__fronted'>
        <h3>Frontend Development</h3>
        <div className='experience__content'>


          <article className='experience__details'>
            <BsPatchCheckFill className='.experience__details-icon'/>
            <div>
         <h4>HTML</h4>
         <small className='text-light'>Experienced</small>
         </div>
          </article>

          <article className='experience__details'>
          <BsPatchCheckFill className='.experience__details-icon'/>
            <div>
         <h4>CSS</h4>
         <small className='text-light'>Experienced</small>
             </div>
          </article>

          <article className='experience__details'>
          <BsPatchCheckFill className='.experience__details-icon'/>
            <div>
         <h4>JavaScript</h4>
         <small className='text-light'>Experienced</small>
            </div>
          </article>

          <article className='experience__details'>
          <BsPatchCheckFill className='.experience__details-icon'/>
            <div>
         <h4>TypeScript</h4>
         <small className='text-light'>Experienced</small>
              </div>
          </article>

          
          <article className='experience__details'>
          <BsPatchCheckFill className='.experience__details-icon'/>
            <div>
         <h4>Angular</h4>
         <small className='text-light'>Experienced</small>
             </div>
          </article>



          <article className='experience__details'>
          <BsPatchCheckFill className='.experience__details-icon'/>

            <div>
         <h4>React</h4>
         <small className='text-light'>Experienced</small>

         </div>
          </article>

        </div>

      </div>






      <div className='experience__backend'>
      <h3>Backend Development</h3>
        <div className='experience__content'>


          <article className='experience__details'>
          <BsPatchCheckFill className='.experience__details-icon'/>
            <div>
         <h4>NodeJS</h4>
         <small className='text-light'>Experienced</small>
          </div>
          </article>

          <article className='experience__details'>
          <BsPatchCheckFill className='.experience__details-icon'/>
            <div>
         <h4>MySql</h4>
         <small className='text-light'>Experienced</small>
            </div>
          </article>


          
          <article className='experience__details'>
          <BsPatchCheckFill className='.experience__details-icon'/>
            <div>
         <h4>Java</h4>
         <small className='text-light'>Experienced</small>
         </div>
          </article>



          <article className='experience__details'>
          <BsPatchCheckFill className='.experience__details-icon'/>
            <div>
         <h4>PHP</h4>
         <small className='text-light'>Experienced</small>
             </div>
          </article>

        </div>
      </div>
    </div>
    </section>
  )
}

export default Experience