import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='header'>
            <Link to='/'>
                <img src='/images/logo_placeholder2.png' alt='fahrenheit logo' className='logo'/>
            </Link>
            <p>Fahrenheit Bakery</p>
        </div>
    )
}

export default Header