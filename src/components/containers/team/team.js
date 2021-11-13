import React from "react";
import './team.css';
import { investMembers, accountingMembers, legalMembers } from "./memberDirectory";
import meeting from './meeting1.jpg';


export function Team() {
    
    return (
        <div className='team-main'>
            <div className='header'>
                <div className='our-team'>
                    <h2>E.L.M</h2>
                    <h3>Earning your trust.</h3>
                    <p>We use honesty, integrity and straight talk about where you are, where you might be and what to do about it. No surprises, no disappointmnets.</p>
                </div>
                <a href='/contact'>
                    <div className="contact-us">
                        Contact Us
                    </div>
                </a>
                <img src={meeting} alt='Team Meeting' className="team-head-bg" />
            </div>
            <div className='team-members'>
                <h2 className='department-nav-head'>Department Navigation:</h2>
                <div className='department-nav'>
                    <a href='#investment'>Investment</a> | <a href='#accounting'>Accounting</a> | <a href='#legal'>Legal</a> | <a href='#nav'>Back To Top</a>
                </div>
                <h1 id='investment'>Investment Adviser Representatives</h1>
                <div className='invest-members'>
                    {investMembers.map(({img, name, bio, cname, key, href}) => (
                        <div id={href} className='mem-bg' key={key}>
                            <div className={cname}>
                                <img src={img} alt={name} className='bio-pic' />
                                <h3>{name}</h3>
                                <p>{bio}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <h1 id='accounting'>Accounting and Tax Representatives</h1>
                <div className='accounting-members'>
                    {accountingMembers.map(({img, name, bio, cname, key, href}) => (
                        <div id={href} className='mem-bg' key={key}>
                            <div className={cname}>
                                <img src={img} alt={name} className='bio-pic' />
                                <h3>{name}</h3>
                                <p>{bio}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <h1 id='legal'>Legal and Administrative Support Staff</h1>
                <div className='legal-members'>
                    {legalMembers.map(({img, name, bio, cname, key, href}) => (
                        <div id={href} className='mem-bg' key={key}>
                            <div className={cname}>
                                <img src={img} alt={name} className='bio-pic' />
                                <h3>{name}</h3>
                                <p>{bio}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}