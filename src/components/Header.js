import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='header'>
            <Link to='/'>
                <img src='/images/logo_placeholder2.png' alt='fahrenheit logo' className='logo'/>
            </Link>
            <p>Fahrenheit Bakery – Stadiou 5, Larnaca, Cyprus</p>
        </div>
    )
}

export default Header