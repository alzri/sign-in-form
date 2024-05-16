import Logo from '../../assets/images/Logo-Nutri.svg?react';

function Header() {
    return (
        <header>
            <img src={Logo} alt="Nutricionist logo" />
        </header>
    );
}

export default Header;