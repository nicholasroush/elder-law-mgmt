import React, { useState, useEffect } from "react";
import { FaAngleDown } from 'react-icons/fa';
import inv from '../../../imgs/invest3.jpg';
import './investment.css';


export function Investment() {
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
            <div className='svc-head-inv'>
            <img src={inv} alt='Investment Page Header' />
            </div>
            <div className='svc-body inv'>
                <div className='svc-content invest'>
                    <h1>Investment Advisement</h1>
                    <h3>Grow What You Have - Methodically</h3>
                    <p>Prudent investing can reap substantial rewards, while avoiding unnecessary risks. Learn how to implement an investment plan that suits your individual situation and meets or exceeds your financial goals. Our approach, in conjunction with Charles Schwab, uses diagnostics, planning, discipline and balanced diversity to maximize your rate of return. Why worry about the uncertainties of the stock market and fluctuations in the economy?</p>
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