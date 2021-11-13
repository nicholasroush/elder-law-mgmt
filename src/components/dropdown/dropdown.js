import React from "react";
import { menu } from "./menu";
import { Link } from 'react-router-dom';
import './dropdown.css'

export function DropDown() {
    
    return (
        <>
            <ul className='dropdown-menu clicked'>
                {menu.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link className={item.cname} to={item.path}>
                                {item.title}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </>
    )
}