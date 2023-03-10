import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.png'




const data = [
  {
    id:1,
    image: IMG1,
    title: 'Rent Car',
    github: 'https://github.com/MyCode014/MyProjects/tree/main/RentCarReact',
    demo: 'link'
  },

  {
    id:2,
    image: IMG2,
    title: 'Cocktails',
    github: 'https://github.com/MyCode014/MyProjects/tree/main/Cocktails',
    demo: 'link'
  },

  {
    id:3,
    image: IMG3,
    title: 'Shopping Cart',
    github: 'https://github.com/MyCode014/MyProjects/tree/main/shoppingCart',
    demo: 'link'
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <h5>New projects are in preparation</h5>

      <div className='container portfolios__container'>
      {
        data.map(({id,image,title,github,demo}) =>{
          return (
     
          <article key={id} className='portfolios__item'>
          <div className='portfolios__item-image'>
            <img src={image} alt={title} />
          </div>
            <h3 >{title}</h3>
            <div className='portfolios__item-cta'>
             
            <a href={github} className='btn' target='_blank'>Github</a>
          
            </div>
        </article>


          )
        })

      }       
      </div>
    </section>
  )
}

export default Portfolio