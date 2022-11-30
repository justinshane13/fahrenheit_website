

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
                    <div className='social_text'>The best way to keep up with Fahrenheit Bakery is on Instagram!</div>
                    <div className='social_text'>We share what we're baking, our weekly bread schedule, hours of operation, and more.</div>
                </div>
                <div className='social_image_container'>
                    <a href='https://www.instagram.com/fahrenheitbakery_cy/' target="_blank" rel='noopener noreferrer'><img src='/images/social_media_callout.jpg' alt='fahrenheit instagram page screenshot' className='social_mockup'/><div className='social_image_text'><span className='social_image_text_inner'>Follow us on Instagram!</span></div></a>
                </div>
            </div>
        </div>
    )
}

export default Intro