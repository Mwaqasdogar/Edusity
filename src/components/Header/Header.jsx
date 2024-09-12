import React, { useEffect, useState } from 'react'
import "./Header.css"
import logo from "../../assets/logo.png"
import menu_icon from "../../assets/menu-icon.png"
import { Link } from 'react-scroll';




function Header() {
  const [sticky, setSticky]= useState(false);

    useEffect(()=>{
      window.addEventListener('scroll', ()=>{
        window.scrollY > 50 ? setSticky(true) : setSticky(false);
      })
    },{});
    const [mobileMenu, setMobileMenu] = useState(false)
    const toggleMenu = ()=>{
      mobileMenu ? setMobileMenu(false) : setMobileMenu(true)

    }
  return (
<nav className={`container ${sticky? 'dark-nav' : ''}`}>
     <img className='logo' src={logo} alt="" />
     <ul className={mobileMenu?'':'hide-mobile-menu'}>
      <li> <Link to='hero container' smooth={true} offset={0} duration={500} >Home</Link></li>
      <li> <Link to='programs' smooth={true} offset={-260} duration={500}>Programe</Link> </li>
      <li> <Link to='about' smooth={true} offset={-150} duration={500}>About us</Link></li>
      <li> <Link to='contact' smooth={true} offset={-260} duration={500}>Contact us</Link></li>
      <li> <Link to='testimonials' smooth={true} offset={-260} duration={500}>Testimoniles</Link></li>
      <li> <Link to='contact' smooth={true} offset={-260} duration={500} className='btn'>Contact Us</Link></li>
     </ul>
     <img src={menu_icon} alt="" className='menu_icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Header
