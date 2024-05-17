import Logo from '../../assets/images/Logo-Nutri.svg?react';

function Header() {
    return (
        <header>
            <a href="/"><img src={Logo} alt="Nutricionist logo" /></a>
        </header>
    );
}

export default Header;