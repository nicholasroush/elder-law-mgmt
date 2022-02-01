import React, { useEffect, useState } from "react";
import './services.css';
import { FaArrowCircleUp } from 'react-icons/fa';

export function Services() {
    const [show, setShow] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", listenToScroll);
        return () => 
            window.removeEventListener("scroll", listenToScroll); 
    },[])

    const listenToScroll = () => {
        let heightToShow;

        if (window.screen.width >= 768 && window.screen.width < 1020) {
            heightToShow = 350
        } else if (window.screen.width >= 1024 && window.screen.width <= 1440) {
            heightToShow = 400
        } else if (window.screen.width > 1441) {
            heightToShow = 1200
        } else {
            heightToShow = 100
        }

        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
           
        if (winScroll > heightToShow) { 
            setShow(true);
        } else {
            setShow(false);
        }
    };

    return (
        <div className="services_main">
            {
                show
                &&
                <a href="#nav">
                <div className="to_top">
                    <FaArrowCircleUp className="up_aarow" />
                    <br />
                    <span className="to_top_text">To Top</span>
                </div>
            </a>
            }
            <div id="accounting" className="account_bg">
                <div className="service_headers">
                    <h1>Accounting/Tax Advisement</h1>
                    <h3>Make the Numbers Work for You</h3>
                </div>
            </div>
            <div className="account_content">
                <p>Tax time is not the only time you may need to enlist accounting help. Controlling expenses, managing cash flow and monitoring investments are but a few of the disciplines you may need to increase your income. Our accounting professionals use the latest principles and practices to keep your continuing financial condition as healthy as possible. Why not be in control of your own money?</p>
                <p>Everyone must pay taxes. A better understanding of your true obligations coupled with an avoidance strategy will keep you in compliance at a lower cost. Let our experts take the confusion out of the ever-changing tax codes, assuring that you keep as much as possible from all tax authorities. Why pay more than you need to? It's your money first!</p>
            </div>
            <div id="invest" className="invest_bg">
                <div className="service_headers">
                    <h1>Investment Advisement</h1>
                    <h3>Grow What You Have - Methodically</h3>
                </div>
            </div>
            <div className="invest_content">
                <p>Prudent investing can reap substantial rewards, while avoiding unnecessary risks. Learn how to implement an investment plan that suits your individual situation and meets or exceeds your financial goals. Our approach, in conjunction with Charles Schwab, uses diagnostics, planning, discipline and balanced diversity to maximize your rate of return. Why worry about the uncertainties of the stock market and fluctuations in the economy?</p>
            </div>
            <div id="legal" className="legal_bg">
                <div className="service_headers">
                    <h1>Estate/Legal Advisement</h1>
                    <h3>Be Prepared - Keep What You've Worked For</h3>
                </div>
            </div>
            <div className="legal_content">
                <p>No matter the amount, protecting your accumulated worth is crucial – not only for you, but for your loved ones and beneficiaries. We've done the research and have the experience to make sure you retain the maximum possible, minimize probate, legal fees, time delays, estate taxes and the high costs of long-term health care or catastrophic illness. Get informed on your options by Jones & Associates, our affiliated law firm.</p>
                <p>In our contentious society, many disputes, no matter how trivial, often cost too much and take too long to resolve. Be informed before you have to go to court. It could save a lot of unnecessary fees and your valuable time. Please visit our affiliated law firm, Jones & Associates, which not only advises but also takes the mystery out of the legal system, allowing you to move forward with confidence. Why not be prepared for the unknown?</p>
            </div>
            <div id="pension" className="pension_bg">
                <div className="service_headers">
                    <h1>Pension Management</h1>
                    <h3>Get the Most from Your Pension</h3>
                </div>
            </div>
            <div className="pension_content">
                <p>We all want to have a comfortable lifestyle in retirement. Knowing how to manage your pension, IRA and other income will allow you to maintain the lifestyle you desire – longer. Our developed expertise in this area uses analysis and in-depth planning to assure you a higher level of security at a time you need it most. Why not live a little better? You’ve earned it.</p>
            </div>
        </div>
    )
}