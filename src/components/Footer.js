

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer_main'>
                <div className='footer_logistics'>
                    <p className='footer_title'>Hours of operation</p>
                    <p className='hours_weekdays'>Tuesday-Friday 10:00-18:00</p>
                    <p className='hours_weekends'>Saturday 10:00-17:00</p>
                    <p className='footer_title'>Location</p>
                    <p className='address'>Stadiou 5, Larnaca, Cyprus</p>
                    <p className='footer_title'>Contact us</p>
                    <p className='phone_number'>24322259</p>
                </div>
                <div className='footer_links'>
                    <div className='footer_links1'>
                        <p className='footer_title'>Links</p>
                        <a href='localhost:3000' className='footer_link'>Home</a>
                        <a href='localhost:3000' className='footer_link'>Bread</a>
                        <a href='localhost:3000' className='footer_link'>Story</a>
                    </div>
                    <div className='footer_links2'>
                        <p></p>
                        <a href='localhost:3000' className='footer_link'>Savory</a>
                        <a href='localhost:3000' className='footer_link'>Sweet</a>
                        <a href='localhost:3000' className='footer_link'>Instagram</a>
                    </div>
                </div>
            </div>
            <p className='copyright'>2022 Fahrenheit Bakery</p>
        </div>
    )
}

export default Footer