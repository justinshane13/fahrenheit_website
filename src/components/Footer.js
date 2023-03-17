import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer_main'>
                <div className='footer_logistics'>
                    <p className='footer_title'>Hours of operation</p>
                    <p className='hours_weekdays'>Tuesday-Friday 10:00-18:00</p>
                    <p className='hours_weekends'>Saturday 10:00-17:00</p>
                    <p className='footer_title'>Location</p>
                    <a href='https://goo.gl/maps/3MXjnVwuUbo87p7L7' target='_blank' rel='noopener noreferrer' className='address'>Stadiou 5, Larnaca, Cyprus</a>
                    <p className='footer_title'>Contact us</p>
                    <p className='phone_number'>24322259</p>
                </div>
                <div className='footer_links'>
                    <p className='footer_title'>Links</p>
                    <div className='footer_links_horizontal'>
                        <div className='footer_links1'>
                            <Link to='/' className='footer_link'>Home</Link>
                            <Link to='/bread' className='footer_link'>Bread</Link>
                            <Link to='/sweet' className='footer_link'>Sweet</Link>
                        </div>
                        <div className='footer_links2'>
                            <Link to='/savory' className='footer_link'>Savory</Link>
                            <Link to='/story' className='footer_link'>Story</Link>
                            <a href='https://www.instagram.com/fahrenheitbakery_cy/' className='footer_link' target="_blank" rel='noopener noreferrer'>Instagram</a>
                        </div>
                    </div>
                </div>
            </div>
            <p className='copyright'>2023 Fahrenheit Bakery</p>
        </div>
    )
}

export default Footer