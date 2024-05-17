import MainTitle from '../../components/MainTitle';
import Description from '../../components/Description';
import react, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Newpassword() {
    const [ newPassword, setNewPassword ] = useState('');
    const [ verifyPassword, setVerifyPassword ] = useState ('');
    const navigate = useNavigate();
    const [ error, setError ] = useState('');

    const handleNewPassword =  (e) => {
        e.preventDefault();
        if ( newPassword === verifyPassword ) {
            navigate('/password-changed');
        } else {
            setError('Lozinka nije ista u oba polja');
        }
    }

    return (
        <>
            <MainTitle title="Postavi novu lozinku" />
            <Description desc="Upiši e-mail adresu na koju želiš da ti pošaljemo link za ponovnu prijavu." />

            <form method='post' className='form'>
                <p className='form--password'>
                    <label htmlFor="password">Lozinka</label>
                    <input 
                        type="password" 
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        placeholder="Unesi svoju novu lozinku"
                        required
                    />
                </p>

                <p className='form--password'>
                    <label htmlFor="password">Lozinka</label>
                    <input 
                        type="password" 
                        value={verifyPassword}
                        onChange={(e) => setVerifyPassword(e.target.value)}
                        placeholder="Unesi svoju novu lozinku"
                        required
                    />
                </p>
            </form>

            <div className="error-message">
                {error && <p>{error}</p>}
            </div>

            <div className='form--submit-buttons'>
                <button type='submit' className="primary-button enable" onClick={handleNewPassword}>Nastavi</button>
            </div>
        </>
    );
}

export default Newpassword;