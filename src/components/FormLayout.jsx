import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function FormLayout() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email === 'test@test.com' && password === '123') {
            navigate('/profile');
        } else {
            setError('Lozinka ili e-mail nisu točni');
        }
    }

    const isFilled = email !== '' && password !== '';

    const submitButtonClass = isFilled ? 'primary-button enable' : 'primary-button disable'

    return (
        <>
            <form onSubmit={handleSubmit} className='form'>
                <p className='form--email'>
                    <label htmlFor="email">E-mail adresa</label>
                    <input  
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Unesi svoj e-mail"
                        required
                    />
                </p>

                <p className='form--password'>
                    <label htmlFor="password">Lozinka</label>
                    <input 
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='Unesi svoju lozinku'
                        required
                    />
                </p>

                <div className="error-message">
                    {error && <p>{error}</p>}
                </div>

                <div className='form--submit-buttons'>
                    <button type='submit' className={submitButtonClass}>Prijavi se</button>
                    <Link to="/password-forgotten" className='primary-link'>Zaboravljena lozinka?</Link>
                </div>
            </form>
        </>
    );
}

export default FormLayout;
