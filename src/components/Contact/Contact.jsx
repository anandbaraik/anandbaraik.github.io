import React from 'react'
import "./Contact.css";
import Header from "./../Header/Header.jsx"
import Footer from "./../Footer/Footer.jsx"
import contactVector from "./../../assets/contact_anime.png";
import gitHub from "./../../assets/gh.png";
import instaGram from "./../../assets/in.png";
import linkedIn from "./../../assets/li.png";
import medium from "./../../assets/me.png";
import web from "./../../assets/web.png";

function Contact() {
  return (
    <div className='section-container'>
      <Header 
        heading="Get in touch."
        subHeading="Interested to collaborate? Feel free to drop me an email.">
      </Header>
      <div className='contact-form-container'>
        <form className='contact-form' method='POST' action='https://formspree.io/f/mdobenlw'>
          <input type="email" className='input-box email-input' 
            placeholder='Your Email Id' name='email' required/>
          <textarea type="text" placeholder='Your Message' name='message'
            className='input-box body-input' required></textarea>
          <button type="submit" className="contact-btn">Send Email</button>
        </form>
      </div>
      <div className='social-icons-container'>
        <a href="https://github.com/anandbaraik"
          className='social-icon'
          target="_blank" rel="noreferrer">
          <img src={gitHub} alt='github'/>
        </a>
        <a href="https://www.linkedin.com/in/anand-baraik/" 
          className='social-icon'
          target="_blank" rel="noreferrer">
          <img src={linkedIn} alt='linkedin'/>
        </a>
        <a href="https://peerlist.io/anandbaraik" 
          className='social-icon'
          target="_blank" rel="noreferrer">
          <img src={web} alt='web'/>
        </a>
        <a href="https://medium.com/@anandbaraik"
          className='social-icon'
          target="_blank" rel="noreferrer">
          <img src={medium} alt='medium'/>
        </a>
        <a href="https://www.instagram.com/anand__babu/"
          className='social-icon'
          target="_blank" rel="noreferrer">
          <img src={instaGram} alt='instagram'/>
        </a>
      </div>
      <Footer 
        phrase="Read more "
        link="about me."
        toAddress="/about">
      </Footer>
      <div className='vector-frame'>
        <img src={contactVector}
          alt="contact"
          className='about-vector'
        />
      </div>
    </div>
  )
}

export default Contact