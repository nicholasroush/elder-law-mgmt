import React, { useState, useEffect } from "react";
import { FaAngleDown } from 'react-icons/fa';
import './legal.css';


export function Legal() {
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
            <div className='svc-head-leg'>
                
            </div>
            <div className='svc-body est-leg'>
                <div className='svc-content est'>
                    <h1>Estate Planning</h1>
                    <h3>Keep What You've Worked For!</h3>
                    <p>No matter the amount, protecting your accumulated worth is crucial – not only for you, but for your loved ones and beneficiaries. We've done the research and have the experience to make sure you retain the maximum possible, minimize probate, legal fees, time delays, estate taxes and the high costs of long-term health care or catastrophic illness. Get informed on your options by Jones & Associates, our affiliated law firm.</p>
                </div>
                <div className='svc-content leg'>
                    <h1>Legal Advisement</h1>
                    <h3>Be Prepared</h3>
                    <p>In our contentious society, many disputes, no matter how trivial, often cost too much and take too long to resolve. Be informed before you have to go to court. It could save a lot of unnecessary fees and your valuable time. Please visit our affiliated law firm, Jones & Associates, which not only advises but also takes the mystery out of the legal system, allowing you to move forward with confidence. Why not be prepared for the unknown?</p>
                </div>
                <div className='svc-dropdowns-leg'>
                    <div className='svc-reps-container' onClick={handleClick} style={border}>
                        Representatives 
                        <FaAngleDown style={arrow} className='svc-icon reps' />
                    </div>
                    <div className='svc-rep-dropdown' style={reps}>
                        <ul className='svc-reps'>
                            <li><a href='/team#RonaldJones'>Ronald S. Jones</a></li>
                            <li><a href='/team#MargaretHilton'>Margaret Hilton</a></li>
                            <li><a href='/team#PennyMahoney'>Penny S. Mahoney</a></li>
                            <li><a href='/team#ChelseaSteck'>Chelsea Steck</a></li>
                            <li><a href='/team#MarkFaynor'>Mark Faynor Jr.</a></li>
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