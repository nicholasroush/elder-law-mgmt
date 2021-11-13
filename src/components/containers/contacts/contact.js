import React from "react";
import pitt from './pittsburgh.jpg';
import { Select } from "./select";
import './contact.css'


export function Contact() {
    
    return (
        <div className='main-container'>
            <div className='contact-bg'></div>
            <div className='contact-form'>
                <Select />
            </div>
            <div className='img'>
                <img src={pitt} alt='Legal Team' />
            </div>
            <div className='contact-info'>
                <div className='pa-office'>
                    <h3>Pittsburgh Office</h3>
                    <p>309 Smithfield Street</p>
                    <p>6th Floor</p>
                    <p>Pittsburgh, PA 15222</p>
                    <p><strong>Phone: </strong> <a href="tel:4124564700">(412) 456-4700</a></p>
                    <p><strong>Fax: </strong> (412) 456-4701</p>
                    <p><strong>Client Service: </strong> <a href="tel:18774564700">1 (877) 456-4700</a></p>
                </div>
                <div className='wv-office'>
                    <h3>Morgantown Office</h3>
                    <p>3467 University Ave</p> 
                    <p>Suite 200</p>
                    <p>Morgantown, WV 26505</p>
                    <p><strong>Client Service: </strong> <a href="tel:18774564700">1 (877) 456-4700</a></p>
                </div>
            </div>
            <div className='maps'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.612536762252!2d-80.00347768462044!3d40.439577779362395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8834f156cc51bfa3%3A0x4575d8c2f8b0698b!2s309%20Smithfield%20St%206th%20floor%2C%20Pittsburgh%2C%20PA%2015222!5e0!3m2!1sen!2sus!4v1634243474893!5m2!1sen!2sus" className='google-maps' allowFullScreen="" loading="lazy" title='Pittsburgh Office Location'></iframe>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3071.605206596767!2d-79.98887398464421!3d39.65859867946039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88357bc77edc21b9%3A0x52bad9cfa88867af!2s3467%20University%20Ave%20SUITE%20200%2C%20Morgantown%2C%20WV%2026505!5e0!3m2!1sen!2sus!4v1634243865400!5m2!1sen!2sus" className='google-maps' allowFullScreen="" loading="lazy" title='Morgantown Office Location'></iframe>
            </div>
        </div>
    )
}