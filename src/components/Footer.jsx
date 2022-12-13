import React from 'react'
import "../styles/Footer.scss"
import ProfilePic from "../assets/CarlosPic.png"

export const Footer = () => {
  return (
    <section className='Footer'>


        <div className='Footer-Profile'>
          <img src={ProfilePic} alt="Carlos Pretelin" />

          <div>
            <h3>Carlos Pretelin <br /> Fronted Developer</h3>
          </div>
          
        </div>


        <div className='Footer-ContactInfo'>
          <div>
            <i  className="fa-brands fa-linkedin  Footer-ContactInfo-item"></i>
            <a target="_blank" href="https://www.linkedin.com/in/carlos-pretelin/">Linkedin</a>
          </div>

          <div>
            <i className="fa-brands fa-github Footer-ContactInfo-item"></i>
            <a target="_blank" href="https://github.com/Carlos-Pretelin"> GitHub</a>
          </div>

          <div>
            <i className="fa-brands fa-twitter Footer-ContactInfo-item"></i>
            <a target="_blank" href="https://www.linkedin.com/in/carlos-pretelin/">@CarlosPretelin</a>
          </div>

          <div>
            <i className="fa-brands fa-google Footer-ContactInfo-item"></i>
            <a target="_blank" href="mailto:carlosppretelin@gmail.com">carlosppretelin@gmail.com</a>
          </div>

          
        </div>
    </section>
  )
}
