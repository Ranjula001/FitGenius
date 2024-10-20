// import React, {useState} from 'react';
// import logo from '../images/FGlogo.png';
// import appLogo from '../images/FITGLOGO.svg';
// import {Link} from 'react-scroll';

// function NavBar() {

//     const [nav, setNav ] = useState(false);

//     const changeBG = () => {
//         if(window.scrollY >= 50){
//             setNav(true);
//         }
//         else{
//             setnave(false);
//         }

//     }

//     window.addEventListener('scroll', changeBG);

//   return (
//     <nav className={nav ? "nav active":"nav"}>
//         <Link to='#' className='w-52 hover:cursor-pointer'>
//             <img src={logo} alt='logo should display here !' />
//         </Link>
//         <input className='menu-btn' type='checkbox' id='menu-btn'/>
//         <label className='menu-icon' for='menu-btn'>
//             <span className='nav-icon'></span>
//         </label>
//         <ul className='menu hover:cursor-pointer'>
//             <li><Link to='main' smooth={true} duration={1000}>HOME</Link></li>
//             <li><Link to='ProjectScope' smooth={true} duration={1000}>PROJECT SCOPE</Link></li>
//             <li><Link to='Milestones' smooth={true} duration={1000}>MILESTONES</Link></li>
//             <li><Link to='Downloads' smooth={true} duration={1000}>DOWNLOADS</Link></li>
//             <li><Link to='about-us' smooth={true} duration={1000}>ABOUT US</Link></li>
//             <li><Link to='Contact-Us' smooth={true} duration={1000}>CONTACT US</Link></li>
//         </ul>
//     </nav>
//   )
// }

// export default NavBar;

import React, { useState, useEffect } from 'react';
import logo from '../images/FGlogo.png';
import { Link } from 'react-scroll';

function NavBar() {
    const [nav, setNav] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const changeBG = () => {
        if (window.scrollY >= 50) {
            setNav(true);
        } else {
            setNav(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeBG);
        return () => {
            window.removeEventListener('scroll', changeBG);
        };
    }, []);

    // Function to toggle dropdown
    const toggleDropdown = () => {
        setDropdown(!dropdown);
    };

    return (
        <nav className={nav ? "nav active" : "nav"}>
            <Link to='main' smooth={true} duration={1000} className='w-52 hover:cursor-pointer'>
                <img src={logo} alt='logo should display here!' />
            </Link>
            <input className='menu-btn' type='checkbox' id='menu-btn' />
            <label className='menu-icon' htmlFor='menu-btn'>
                <span className='nav-icon'></span>
            </label>
            <ul className='menu hover:cursor-pointer'>
                <li><Link to='main' smooth={true} duration={1000}>HOME</Link></li>
                
                {/* PROJECT SCOPE with dropdown */}
                <li className='dropdown'>
                    <button onClick={toggleDropdown} className='dropdown-toggle'>PROJECT SCOPE</button>
                    {dropdown && (
                        <ul className="dropdown-menu">
                            <li><Link to='LiteratureSurvey' smooth={true} duration={1000}>Literature Survey</Link></li>
                            <li><Link to='ResearchGap' smooth={true} duration={1000}>Research Gap</Link></li>
                            <li><Link to='ResearchProblemSolution' smooth={true} duration={1000}>Research Problem & Solution</Link></li>
                            <li><Link to='ResearchObjectives' smooth={true} duration={1000}>Research Objectives</Link></li>
                            <li><Link to='Methodology' smooth={true} duration={1000}>Methodology</Link></li>
                            <li><Link to='TechnologiesUsed' smooth={true} duration={1000}>Technologies Used</Link></li>
                        </ul>
                    )}
                </li>
                
                <li><Link to='Milestones' smooth={true} duration={1000}>MILESTONES</Link></li>
                <li><Link to='Downloads' smooth={true} duration={1000}>DOWNLOADS</Link></li>
                <li><Link to='about-us' smooth={true} duration={1000}>ABOUT US</Link></li>
                <li><Link to='Contact-Us' smooth={true} duration={1000}>CONTACT US</Link></li>
            </ul>
        </nav>
    );
}

export default NavBar;
