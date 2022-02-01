import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../imgs/logo-mobile.png';
import logoTwo from '../../imgs/ecm-mobile.png';
import './nav.css';

export function Nav() {

    return(
        <div className='nav-main'>
            <div className='logo-contain'>
                <div className='logo'>
                    <img src={logo} alt='ELM logo' />
                </div>
                <div className='nav-title'>
                    <h1>Earning Your Trust</h1>
                </div>
                <div className='ecm-logo'>
                    <img src={logoTwo} alt='ECM logo' />
                </div>
            </div>
            <div id='nav' className='nav'>
                <ul className='nav-links'>
                    <Link to='/' style={{color: 'black', textDecoration: 'none'}}>
                        <li className='nav-home nav-li'>Home</li>
                    </Link>
                    <Link to='/services' style={{color: 'black', textDecoration: 'none'}}>
                        <li className='services nav-li'>Services</li>
                    </Link>
                    <Link to='/workshops' style={{color: 'black', textDecoration: 'none'}}>
                        <li className='work nav-li'>Workshops</li>
                    </Link>
                    <Link to='/team' style={{color: 'black', textDecoration: 'none'}}>
                        <li className='nav-team nav-li'>Our Team</li>
                    </Link>
                    <Link to='/resources' style={{color: 'black', textDecoration: 'none'}}>
                        <li className='resource nav-li'>Resources</li>
                    </Link>
                    <Link to='/contact' style={{color: 'black', textDecoration: 'none'}}>
                        <li className='cont nav-li'>Contact Us</li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}