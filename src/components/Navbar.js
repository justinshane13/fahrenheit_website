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
    if (scrollPosition >= 184) {
        navClassName += ' sticky'
    }

    return (
        <div className={navClassName}>
            <a href="/" className='breadNav'>BREAD</a>
            <a href="/" className='sweetNav'>SWEET</a>
            <a href="/" className='savoryNav'>SAVORY</a>
            <a href="/" className='aboutNav'>ABOUT</a>
            <a href="/" className='pressNav'>PRESS</a>
        </div>
    )
}

export default Navbar