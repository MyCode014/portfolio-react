import React , {useState}from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import axios from 'axios'


const Contact = () => {

  const [form, setForm]  = useState({
     name:'',
     email: '',
     subject: '',
     message:'',

  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm({...form, [name]: value});
  };

  const handleSubmit= (e)=> {
    e.preventDefault();
    axios.post('https://sheet.best/api/sheets/c15b0298-4b1f-4c89-ad82-976329f6d455',
     form).then((response) =>{
      console.log(response);

      setForm({name:'', email:'', subject:'', message:''});
     });

  };


 

  return (
    <section id="contact">
     
      <h2>Contact me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
             <h4>Email</h4>
             <a  href='#'>
                  send message
             </a>
          </article>
       </div>
      

        <form action='' onSubmit={handleSubmit} >
          <input type="text" name='name' value={form.name}
          onChange={handleChange}
          
          placeholder='Your Full Name' required/>
          <input type="email" name='email' 
          value={form.email}
          onChange={handleChange}
          placeholder='Your Email' required/>
          <textarea name="message " 
          value={form.message}
          onChange={handleChange}
          
          rows='/' placeholder='Your Message to maja.mar123kovic@gmail.com' required/>
           
           <button type='submit' className='btn btn-primary'>Send message</button>
        </form>
        </div>

    </section>
  )
}

export default Contact

