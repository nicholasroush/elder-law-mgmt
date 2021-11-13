import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './logo2.png';
import './nav.css';
import { FaAngleDown } from 'react-icons/fa';
import { DropDown } from '../dropdown/dropdown';

export function Nav() {
    const [dropdown, setDropdown] = useState(false);

    const onMouseEnter = () => {
          setDropdown(true);
      };
    
      const onMouseLeave = () => {
          setDropdown(false);
      };

    return(
        <div id='nav' className='nav'>
            <Link to='/' style={{color: 'black', textDecoration: 'none'}}>
                <div className='logo'>
                    <img src={logo} alt='logo' />
                </div>
            </Link>
            <ul className='nav-links'>
                    <li className='dropdown' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>Services <FaAngleDown className='aarow' /> {dropdown && <DropDown />} </li>
                <Link to='/workshops' style={{color: 'black', textDecoration: 'none'}}>
                    <li>Workshops</li>
                </Link>
                <Link to='/team' style={{color: 'black', textDecoration: 'none'}}>
                    <li>Our Team</li>
                </Link>
                <Link to='/resources' style={{color: 'black', textDecoration: 'none'}}>
                    <li>Resources</li>
                </Link>
                <Link to='/contact' style={{color: 'black', textDecoration: 'none'}}>
                    <li>Contact Us</li>
                </Link>
            </ul>
        </div>
    )
}