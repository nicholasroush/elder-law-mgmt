import React, { useState, useEffect } from "react";
import { Select } from "../contacts/select";
import './formPopup.css';
import port from '../../../imgs/temp-popup-img.jpg';

export function FormPopup() {
    const [display, setDisplay] = useState({});

    const handleRemove = e => {
        e.preventDefault();
        setDisplay({display: 'none'});
    }

    useEffect(() => {
        setTimeout(() => {
            setDisplay({display: 'block'})
        }, 7000);
    }, [])

    return (
        <div className='popup' style={display}>
            <div className='popup-content'>
                <h2>Need assistance? Let our experts help!</h2>
                <h4>We use honesty, integrity and straing talk about where you are, where you might be and what to do about it.
                    <br />
                     No surprises, no disappointments.</h4>
                <span className="close" onClick={handleRemove}>&times;</span>
                <img src={port} alt='Pop-Up Portrait' />
                <Select />
            </div>
        </div>
    )
}