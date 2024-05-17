import MainTitle from "../../components/MainTitle";
import Description from "../../components/Description";
import { Link, useNavigate } from "react-router-dom";

function Profile () {
    const navigate = useNavigate();

    const handleSignOut = (e) => {
        e.preventDefault();
        navigate('/');
    }

    return (
        <>
            <MainTitle title="Dobrodošao <br /> u Nutricionist Marko!" />
            <Description desc="Lako upravljaj svojim računom na jednom mjestu!" />

            <div className='form--submit-buttons'>
                <button type='submit' onClick={handleSignOut} className='primary-button disable'>Odjavi se</button>
                <Link to="/" className='delete-link'>Izbriši moj račun</Link>
            </div>
        </>
    );
}

export default Profile;