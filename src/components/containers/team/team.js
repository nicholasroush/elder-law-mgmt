import React, {useState, useEffect} from "react";
import './team.css';
import { investMembers, accountingMembers, legalMembers } from "./memberDirectory";


export function Team() {
    const [show, setShow] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", listenToScroll);
        return () => 
            window.removeEventListener("scroll", listenToScroll); 
    },[])

    const listenToScroll = () => {
        let heightToShow = 450;
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
           
        if (winScroll > heightToShow) { 
            setShow(true);
        } else {
            setShow(false);
        }
    };
    
    return (
        <div className='team-main'>
            <div className='team-members'>
                {
                    show
                    &&
                    <div className='department-nav'>
                        <a href='#investment' className='tp-inv tp'>Investment</a> 
                        <a href='#accounting' className='tp-acc tp'>Accounting</a> 
                        <a href='#legal' className='tp-leg tp'>Legal</a> 
                        <a href='#nav' className='tp-nav tp'>Back To Top</a>
                    </div>
                }
                <div className='dep-head'>
                    <h1 id='investment'>Investment Adviser Representatives</h1>
                </div>
                <div className='invest-members'>
                    {investMembers.map(({img, name, bio, cname, key, href, bgColor}) => (
                        <div id={href} key={key} className={cname} style={{backgroundColor: bgColor}}>
                            <div className='person'>
                                <img src={img} alt={name} className='bio-pic' />
                                <h3>{name}</h3>
                            </div>
                            <div className='bio'>
                                <p>{bio}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div  className='dep-head'>
                 <h1 id='accounting'>Accounting and Tax Representatives</h1>
                </div>
                <div className='accounting-members'>
                    {accountingMembers.map(({img, name, bio, cname, key, href, bgColor}) => (
                        <div id={href} key={key} className={cname} style={{backgroundColor: bgColor}}>
                            <div className='person'>
                                <img src={img} alt={name} className='bio-pic' />
                                <h3>{name}</h3>
                            </div>
                            <div className='bio'>
                                <p>{bio}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='dep-head'>
                    <h1 id='legal'>Legal and Administrative Support Staff</h1>
                </div>
                <div className='legal-members'>
                    {legalMembers.map(({img, name, bio, cname, key, href, bgColor}) => (
                        <div id={href} key={key} className={cname} style={{backgroundColor: bgColor}}>
                            <div className='person'>
                                <img src={img} alt={name} className='bio-pic' />
                                <h3>{name}</h3>
                            </div>
                            <div className='bio'>
                                <p>{bio}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}