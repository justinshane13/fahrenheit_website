import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='header'>
            <Link to='/'>
                <img src='/images/logo_dark.svg' alt='fahrenheit logo' className='logo'/>
            </Link>
            <p>Stadiou 5, Larnaca, Cyprus</p>
        </div>
    )
}

export default Header