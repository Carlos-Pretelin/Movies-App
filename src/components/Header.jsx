import React from 'react'
import "../styles/Header.scss"
import { Link } from 'react-router-dom';
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
                    
                    <Link className='Header-Navigation-Menu-item' to={"/"}>Home</Link>
  
                    <Link className='Header-Navigation-Menu-item' to={"/Movies"}>Movies</Link>
   
                    <Link className='Header-Navigation-Menu-item' to={"/Series"}>Series</Link>
    
                    <Link className='Header-Navigation-Menu-item' to={"/People"}>People</Link>
                        
                    
                </div>
            </div>
        </div>
    
        <div className='Header-User'>
            <div className='Header-User-Profile'>
                <img src={ProfilePic} alt="Profile Picture" />
                <i className="fa-solid fa-caret-down"></i>
            </div>
        </div>


    </header>
  )
}

export default Header;