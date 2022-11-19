import React, { useState, useEffect } from 'react' 

const Navbar = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    
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
    if (scrollPosition >= 220) {
        navClassName += ' sticky'
        logoPresent = true
    }
    if (scrollPosition < 220) {
        logoPresent = false
    }

    return (
        <div className={navClassName}>
            {logoPresent && <a href='localhost:3000'><img src='/images/logo_placeholder_white.png' alt='logo' className='logo_navbar' /></a>}
            <a href="/" className='breadNav'>BREAD</a>
            <a href="/" className='sweetNav'>SWEET</a>
            <a href="/" className='savoryNav'>SAVORY</a>
            <a href="/" className='aboutNav'>ABOUT</a>
        </div>
    )
}

export default Navbar