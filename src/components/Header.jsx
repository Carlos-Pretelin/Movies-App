import React from 'react'
import "../styles/Header.scss"
import Logo from "../assets/Logo1.png"
import ProfilePic from "../assets/ProfilePic.png"


const Header = () => {
  return (
    <header className='Header'>
        
        <div className='Header-Navigation'>
            <div className='Header-Navigation-Logo'>
                <img src={Logo} alt="" />
                <h1>Webflix</h1>
            </div>

            <div className='Header-Navigation-Menu'>
                <div>
                    <a>
                        Home
                    </a>
                    <a>
                        Movies
                    </a>
                    <a>
                        Series
                    </a>
                    <a>
                        Actors
                    </a>
                </div>
            </div>
        </div>
    
        <div className='Header-User'>
            <div className='Header-User-Profile'>
                <img src={ProfilePic} alt="Profile Picture" />
                
            </div>
        </div>


    </header>
  )
}

export default Header;