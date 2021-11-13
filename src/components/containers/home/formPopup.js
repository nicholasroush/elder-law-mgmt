import React, { useState, useEffect } from "react";
import { Select } from "../contacts/select";
import './formPopup.css';

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
                <span className="close" onClick={handleRemove}>&times;</span>
                <h2>Need Help? Contact us!</h2>
                <Select />
            </div>
        </div>
    )
}