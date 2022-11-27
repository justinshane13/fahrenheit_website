

const Intro = () => {
    return (
        <div className='intro_full'>
            <div className='intro_container'>
            <div>
                <p className='intro_summary'>As a family-run bakery, we focus on quality. We source the best ingredients available, and stay true to the American baking methods our head baker learned while training in San Francisco.</p>
                <p className='intro_summary'>What we bake varies from week to week, based on which ingredients are fresh, available, and in-season. We love to try new things, so stop by in-person to see what we're making this week.</p>
                <p className='intro_summary'>Our guarantee is that every cookie, bagel, pastry, cake, and loaf of bread you try from us was prepared with the highest level of care.</p>
            </div>
            <img src='/images/kneading_dough.jpg' alt='baker kneading dough' className='intro_image' />
            </div>
            <div className='social'>
                <div className='social_text_container'>
                    <p className='social_text'>The best way to keep up with Fahrenheit Bakery is on Instagram!</p>
                    <p className='social_text'>We share what we're baking, our weekly bread schedule, hours of operation, and more. Tap or click on the phone to follow us!</p>
                </div>
                <a href='https://www.instagram.com/fahrenheitbakery_cy/' target="_blank" rel='noopener noreferrer'><img src='/images/Fahrenheit_Instagram_Mockup.png' alt='fahrenheit instagram page screenshot' className='social_mockup'/></a>
            </div>
        </div>
    )
}

export default Intro