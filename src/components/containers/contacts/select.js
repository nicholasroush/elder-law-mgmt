import React, {useState, useEffect} from "react";

const states = [
    {
        label: 'Select a State*',
        value: 'Default',
        key: 1
    },
    {
        label: 'Pennsylvania',
        value: 'Pennaylvania',
        key: 2
    },
    {
        label: 'West Virginia',
        value: 'West Virginia',
        key: 3
    }
]

export function Select() {
    const [option, setOption] = useState(states[0].value);
    const [disabled, setDisabled] = useState('');
    const [checked, setChecked] = useState(false);

    const handleOptionChange = e => {
        e.preventDefault();
        setOption(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        if(option === 'Default') {
            alert('Please select a state.')
        };
        if(checked === false) {
            alert('Please confirm you have read the disclaimer.')
        }
    }

    useEffect(() => {
        if(option === 'Default' || checked === false) {
            setDisabled(true)
        } else {
            setDisabled(false)
        };
    }, [option, disabled, checked])

    return (
        <form method="POST">
            <div id="container" className="fname field">
                <label className="fname-label" htmlFor="input-1">
                </label>
                <input id="input-1" type="text" name="first_name" placeholder="First Name*" required />
            </div>
            <div id="container" className="lname field">
                <label className="lname-label" htmlFor="input-2">
                </label>
                <input id="input-2" type="text" name="last_name" placeholder="Last Name*" required />
            </div>
            <div id="container" className="state field">
                <select value={option} onChange={handleOptionChange} required>
                    {states.map((states) => (
                    <option value={states.value} key={states.key}>{states.label}</option> 
                    ))}
                </select>
            </div>
            <div id="container" className="phone field">
                <label className="phone-label" htmlFor="input-4">
                </label>
                <input id="input-4" type="tel" name="phone" placeholder="Phone Number (ex. 999-999-9999)" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />
            </div>
            <div id="container" className="email field">
                <label className="email-label" htmlFor="input-5">
                </label>
                <input  id="input-5" type="email" name="email_address" placeholder="Email*" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required />
            </div>
            <div id="container" className="message">
                <label className="message-label" htmlFor="input-6">
                </label>
                <textarea id="input-6" name="comments" minLength="50" maxLength="1500" placeholder="Please provide a brief discription of your reason for contact.*" required></textarea>
            </div>
            <div className='checkbox'>
                <input type="checkbox" id="check" name="check" defaultChecked={checked} onChange={() => setChecked(!checked)} />
                <label htmlFor="check"> I have read the <a href='/disclaimer' target="_blank">disclaimer</a>.</label>
            </div>
            <div className="sub-btn">
                <button style={{cursor: disabled ? 'default' : 'pointer'}} onClick={handleSubmit} type='submit' className="contact-btn" disabled={disabled}>Submit</button>
            </div>
        </form>
    )
}