import React, { useState, useEffect } from "react";
import './accounting.css';
import acc from '../../../imgs/account4.jpg';
import { FaAngleDown } from 'react-icons/fa';


export function Accounting() {
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
            <div className='svc-head-acc'>
                <img src={acc} alt='Accounting Page Header' />
            </div>
            <div className='svc-body acc-tax'>
                <div className='svc-content acc'>
                    <h1>Accounting Advisement</h1>
                    <h3>Make the Numbers Work for You</h3>
                    <p>Tax time is not the only time you may need to enlist accounting help. Controlling expenses, managing cash flow and monitoring investments are but a few of the disciplines you may need to increase your income. Our accounting professionals use the latest principles and practices to keep your continuing financial condition as healthy as possible. Why not be in control of your own money?</p>
                </div>
                <div className='svc-content tax'>
                    <h1>Tax Advisement</h1>
                    <h3>Save on Your Taxes</h3>
                    <p>Everyone must pay taxes. A better understanding of your true obligations coupled with an avoidance strategy will keep you in compliance at a lower cost. Let our experts take the confusion out of the ever-changing tax codes, assuring that you keep as much as possible from all tax authorities. Why pay more than you need to? It's your money first!</p>
                </div>
                <div className='svc-dropdowns'>
                    <div className='svc-reps-container' onClick={handleClick} style={border}>
                        Representatives 
                        <FaAngleDown style={arrow} className='svc-icon reps' />
                    </div>
                    <div className='svc-rep-dropdown' style={reps}>
                        <ul className='svc-reps'>
                            <li><a href='/team#JosephBeck'>Joseph M. Beck</a></li>
                            <li><a href='/team#DavidJeon'>David Jeon</a></li>
                            <li><a href='/team#ReannaKosmar'>Reanna L. Kosmar</a></li>
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