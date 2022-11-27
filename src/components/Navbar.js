import React, { useState, useEffect } from 'react' 
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isMobile] = useState(window.matchMedia('(max-width: 550px)').matches)

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

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
            {logoPresent && <Link to='/'><img src='/images/logo_placeholder_white.png' alt='logo' className='logo_navbar' /></Link>}
            <Link to="/" className='breadNav'>HOME</Link>
            <Link to="/bread" className='breadNav'>BREAD</Link>
            <Link to="/sweet" className='sweetNav'>SWEET</Link>
            <Link to="/savory" className='savoryNav'>SAVORY</Link>
            <Link to="/story" className='aboutNav'>STORY</Link>
        </div>
    )
}

export default Navbar