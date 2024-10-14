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
            <li><Link to='#'>HOME</Link></li>
            <li><Link to='#'>PROJECT SCOPE</Link></li>
            <li><Link to='#'>MILESTONES</Link></li>
            <li><Link to='#'>DOWNLOADS</Link></li>
            <li><Link to='#'>ABOUT US</Link></li>
            <li><Link to='#'>ACHIEVEMENTS</Link></li>
            <li><Link to='#'>CONTACT US</Link></li>
        </ul>
    </nav>
  )
}

export default NavBar;