import { Link } from 'react-router-dom';
import MainTitle from '../../components/MainTitle';
import Description from '../../components/Description';
import KeyIcon from '../../assets/images/Lozinka.svg?react';

function ConfirmPage() {
    return (
        <div className="message">
            <span className='content-card--icon'>
               <img src={KeyIcon} alt="Key icon" />
            </span>
            <MainTitle title="Link je poslan na vaš <br /> e-mail." />
            <Description desc="Provjerite vaš e-mail kako bi postavili novu lozinku." />
            <div className='form--submit-buttons'>
                <Link to="/" className='primary-link'>Vrati se na prijavu</Link>
            </div>
        </div>
    );
}

export default ConfirmPage;