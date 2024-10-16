import React, {useState} from 'react';
import logo from '../images/FGlogo.png';
import {Link} from 'react-scroll';

function NavBar() {

    const [nav, setNav ] = useState(false);

    const changeBG = () => {
        if(window.scrollY >= 50){
            setNav(true);
        }
        else{
            setnave(false);
        }

    }

    window.addEventListener('scroll', changeBG);

  return (
    <nav className={nav ? "nav active":"nav"}>
        <Link to='#' className='w-52 hover:cursor-pointer'>
            <img src={logo} alt='logo should display here !' />
        </Link>
        <input className='menu-btn' type='checkbox' id='menu-btn'/>
        <label className='menu-icon' for='menu-btn'>
            <span className='nav-icon'></span>
        </label>
        <ul className='menu hover:cursor-pointer'>
            <li><Link to='main' smooth={true} duration={1000}>HOME</Link></li>
            <li><Link to='ProjectScope' smooth={true} duration={1000}>PROJECT SCOPE</Link></li>
            <li><Link to='Milestones' smooth={true} duration={1000}>MILESTONES</Link></li>
            <li><Link to='#' smooth={true} duration={1000}>DOWNLOADS</Link></li>
            <li><Link to='#' smooth={true} duration={1000}>ABOUT US</Link></li>
            <li><Link to='#' smooth={true} duration={1000}>ACHIEVEMENTS</Link></li>
            <li><Link to='#' smooth={true} duration={1000}>CONTACT US</Link></li>
        </ul>
    </nav>
  )
}

export default NavBar;