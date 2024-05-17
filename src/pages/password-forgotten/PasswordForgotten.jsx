import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MainTitle from "../../components/MainTitle";
import Description from "../../components/Description";

function PasswordForgotten() {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleNewPassword = (e) => {
        e.preventDefault();
        if (email) {
            navigate('/confirm');
        }
    }

    return (
        <>
            <MainTitle title="Zaboravio/la si <br /> lozinku?" />
            <Description desc="Upiši e-mail adresu na koju želiš da ti pošaljemo link za ponovnu prijavu." />
            <form method="post" className='form' onSubmit={handleNewPassword}>
                <p className='form--email'>
                    <label htmlFor="email">E-mail adresa</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Unesi svoj e-mail"
                        name="email"
                        required
                    />
                </p>
            </form>

            <div className='form--submit-buttons'>
                <button type='submit' className='primary-button enable' onClick={handleNewPassword}>Prijavi se</button>
                <Link to="/password-forgotten" className='primary-link'>Zaboravljena lozinka?</Link>
            </div>
        </>
    );
}

export default PasswordForgotten;
