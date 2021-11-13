import React, { useState, useEffect } from "react";
import pen from './pension3.jpg';
import { FaAngleDown } from 'react-icons/fa';
import './pension.css';


export function Pension() {
    const [reps, setReps] = useState({display: 'none'});
    const [condition, setCondition] = useState(false);
    const [border, setBorder] = useState({});
    const [arrow, setArrow] = useState({});

    const handleClick = e => {
        e.preventDefault();
        setCondition(!condition);
    }

    useEffect(() => {
        if(condition === true){
            setReps({display: 'block'});
            setBorder({border: 'none'});
            setArrow({transform: 'rotate(180deg)'});
        } else {
            setReps({display: 'none'});
            setBorder({borderBottom: 'groove'});
            setArrow({});
        }
    }, [condition])
    
    return (
        <div className='svc'>
            <div className='svc-head'>
                <img src={pen} alt='Pension Page Header' />
            </div>
            <div className='svc-body pen'>
                <div className='svc-content pension'>
                    <h1>Pension Management</h1>
                    <h3>Get the Most from Your Pension</h3>
                    <p>We all want to have a comfortable lifestyle in retirement. Knowing how to manage your pension, IRA and other income will allow you to maintain the lifestyle you desire – longer. Our developed expertise in this area uses analysis and in-depth planning to assure you a higher level of security at a time you need it most. Why not live a little better? You’ve earned it.</p>
                </div>
                <div className='svc-dropdowns'>
                    <div className='svc-reps-container' onClick={handleClick} style={border}>
                        Representatives 
                        <FaAngleDown style={arrow} className='svc-icon reps' />
                    </div>
                    <div className='svc-rep-dropdown' style={reps}>
                        <ul className='svc-reps'>
                            <li><a href='/team#AnthonySunseri'>Anthony Sunseri</a></li>
                            <li><a href='/team#KennethSummit'>Kenneth Summit</a></li>
                            <li><a href='/team#GeorgeSweeney'>George Scott Sweeney</a></li>
                            <li><a href='/team#DustinMiller'>Dustin Miller</a></li>
                        </ul>
                    </div>
                    <div className='svc-resources'>
                        Resources
                        <FaAngleDown className='svc-icon res' />
                        <div className='svc-resource-dropdown'>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}