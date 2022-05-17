import React from 'react'
import "./About.css";
import Header from "./../Header/Header.jsx"
import Footer from "./../Footer/Footer.jsx"
import aboutVector from "./../../assets/about_vector.png";
import aboutAnime from "./../../assets/about_anime.gif";
function About() {
  return (
    <div className='section-container'>
      <Header 
        heading="About Me"
        subHeading="Full Stack Developer | Blogger">
      </Header>
      <div className='about-main'>
        <div className='about-main-left'>
            <h3 className='about-sub-heading'>Teacher</h3>
            <p className='about-sub-heading-details'>
            Teaching is my passion, till now, I've taught thousands of students about Programming and Web Development. Check out my free react courses!
            </p>
            <h3 className='about-sub-heading'>Blogger</h3>
            <p className='about-sub-heading-details'>
            I've been writing blogs from around 3 years now, and became top-blogger on medium twice. Check out my medium blogs today!
            </p>
            <h3 className='about-sub-heading'>Public Speaker</h3>
            <p className='about-sub-heading-details'>
            Being a passionate public speaker, I've given talks at more than 75 events till now! Want me to speak in your event? Email me the details!
            </p>
        </div>
        <div className='about-main-right'>
            <img 
                src={aboutAnime}
                alt="about-anime"
                className="about-anime"
            />
        </div>
      </div>
      <Footer 
        phrase="Check out my "
        link="projects!"
        toAddress="/projects">
      </Footer>
      <div className='vector-frame'>
        <img src={aboutVector}
          alt="about"
          className='about-vector'
        />
      </div>
    </div>
  )
}

export default About