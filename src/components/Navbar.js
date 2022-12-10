import { Link } from 'react-router-dom'

const Navbar = (props) => {
    let scrollPosition = props.scrollPosition
    let isMobile = props.isMobile

    let navClassName = 'navbar'
    let logoPresent = false;

    if (isMobile) {
        if (scrollPosition >= 124) {
            navClassName += ' sticky'
            logoPresent = true
        }
        if (scrollPosition < 125) {
            logoPresent = false
        }
    }
    if (!isMobile) {
        if (scrollPosition >= 188) {
            navClassName += ' sticky'
            logoPresent = true
        }
        if (scrollPosition < 188) {
            logoPresent = false
        }
    }


    return (
        <div className={navClassName}>
            {logoPresent && <Link to='/'><img src='/images/logo_light.svg' alt='logo' className='logo_navbar' /></Link>}
            <Link to="/bread" className='breadNav'>BREAD</Link>
            <Link to="/sweet" className='sweetNav'>SWEET</Link>
            <Link to="/savory" className='savoryNav'>SAVORY</Link>
            <Link to="/story" className='aboutNav'>STORY</Link>
        </div>
    )
}

export default Navbar