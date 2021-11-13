import React, { useState, useEffect, useRef } from "react";
import { testimonials } from "./slideShowDirectory";
import './slideShow.css';

const delay = 7000;

export function SlideShow() {
    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        }
    }

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(() =>
            setIndex((prevIndex) =>
            prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
            ),
        delay
        );

        return () => {
        resetTimeout();
        };
    }, [index]);
    
    return (
        <div className='slideShow-contain' style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
            {testimonials.map(({img, author, cname}, index) => (
                <div className={cname} key={index}>
                    <img src={img} alt={`${author} testimonial`} />
                </div>
            ))}
        </div>
    )
}