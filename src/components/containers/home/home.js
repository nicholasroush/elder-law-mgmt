import React from 'react';
import './home.css';
import { GiCalculator } from 'react-icons/gi';
import { GiScales } from 'react-icons/gi';
import { FaRegMoneyBillAlt } from 'react-icons/fa';
import { GiAlarmClock } from 'react-icons/gi';
import { BsCalendarDate } from 'react-icons/bs';
import { GiNewspaper } from 'react-icons/gi';
import pittVid from './pitt-vid3.mp4';
import { FormPopup } from './formPopup';
import { SlideShow } from './slideShow';

export function Home() {

  return (
    <div className='body'>
      <FormPopup />
      <div className='top'>
        <video autoPlay muted loop className="pitt-vid">
          <source src={pittVid} type="video/mp4" />
        </video>
        <div className='top-content'>
          <h1>Elder Law Managment</h1>
          <p>Founded in 1991, Elder Law Managment/Jones & Associates is a multi-disciplined team of professionals focused in the preservation and growth of individual, family, and business assets. We provide a full spectrum of legal, tax, investment, and pension advisory services as appropriate.</p>
        </div>
      </div>
      <div className='mid'>
        <a href='/accounting'>
          <div className='mid-content1'>
            <div className='mc-material'>
              <GiCalculator className='mid-icons' />
              <h3>Accounting & Tax Advisement</h3>
              <h4>Let us handle the numbers.</h4>
              <div className="more">
                More
              </div>
            </div>
          </div>
        </a>
        <a href='/legal'>
          <div className='mid-content2'>
            <div className='mc-material'>
              <GiScales className='mid-icons' />
              <h3>Estate & Legal Advisement</h3>
              <h4>Get covered legally as well as financially.</h4>
              <div className="more">
                More
              </div>
            </div>
          </div>
        </a>
        <a href='/investment'>
          <div className='mid-content3'>
            <div className='mc-material'>
              <FaRegMoneyBillAlt className='mid-icons' />
              <h3>Investment Advisement</h3>
              <h4>Invest in your future.</h4>
              <div className="more">
                More
              </div>
            </div>
          </div>
        </a>
        <a href='/pension'>
          <div className='mid-content4'>
            <div className='mc-material'>
              <GiAlarmClock className='mid-icons' />
              <h3>Pension Managment</h3>
              <h4>Secure your retirment.</h4>
              <div className="more">
                More
              </div>
            </div>
          </div>
        </a>
      </div>
      <div className='slide-show'>
        <SlideShow />
      </div>
      <div className='bottom'>
        <div className='calendar'>
          <BsCalendarDate className='bottom-icon' />
          <p>Interested in our workshops? Check out upcoming dates!</p>
        </div>
        <div className='newsletter'>
          <GiNewspaper className='bottom-icon' />
          <p>Stay up to date with us by reading our monthly newsletter!</p>
        </div>
      </div>
    </div>
  )
}