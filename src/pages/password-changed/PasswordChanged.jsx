import MainTitle from '../../components/MainTitle';
import KeyIcon from '../../assets/images/Lozinka.svg?react';
import { Link } from 'react-router-dom';

function PasswordChanged() {
    return (
        <div className="message">
            <span className='content-card--icon'>
               <img src={KeyIcon} alt="Key icon" />
            </span>

            <MainTitle title="Tvoja lozinka je promijenjena" />
            <div className='form--submit-buttons'>
                <Link to="/" className='primary-link'>Vrati se na prijavu</Link>
            </div>
        </div>
    );
}

export default PasswordChanged;