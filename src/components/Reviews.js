

const Review = () => {
    return (
        <div className='reviews_container'>
            <div className='reviews'>
                <div className='review_body'>
                    <p className='review_text'>"The BEST bakery in Cyprus. Maria has created the most amazing bread and pastries ever. I never can choose just one pastry. I always get 2 or 3. We're lucky to have her bakery right here in Larnaca."</p>
                    <div className='reviewer_stars'>
                        <p className='reviewer'><b>Martha R.</b></p>
                        <p className='reviewer'>August 2022</p>
                        <img src='images/star.png' alt='star icon' className='star_icon'/>
                        <img src='images/star.png' alt='star icon' className='star_icon'/>
                        <img src='images/star.png' alt='star icon' className='star_icon'/>
                        <img src='images/star.png' alt='star icon' className='star_icon'/>
                        <img src='images/star.png' alt='star icon' className='star_icon'/>
                    </div>
                </div>
            </div>
            <div className='reviews'>
                <div className='review_body'>
                    <p className='review_text'>"From bread, cookies, cakes...omg the cheesecake...hard to choose one thing from this place. If you ever wonder what a mixture of American Cypriot receipes would taste like this is the place to visit. Owners super friendly always welcoming with a big smile. Beautiful place located in Larnaca."</p>
                    <div className='reviewer_stars'>
                        <p className='reviewer'><b>Rakis G.</b></p>
                        <p className='reviewer'>June 2022</p>
                        <img src='images/star.png' alt='star icon' className='star_icon'/>
                        <img src='images/star.png' alt='star icon' className='star_icon'/>
                        <img src='images/star.png' alt='star icon' className='star_icon'/>
                        <img src='images/star.png' alt='star icon' className='star_icon'/>
                        <img src='images/star.png' alt='star icon' className='star_icon'/>
                    </div>
                </div>
            </div>
            <div className='reviews'>
                <div className='review_body'>
                    <p className='review_text'>"Amazing new bakery! I've only tried the almond croissants here, and they are perfect. Definitely the best in Cyprus."</p>
                    <div className='reviewer_stars'>
                        <p className='reviewer'><b>Violet V.</b></p>
                        <p className='reviewer'>August 2022</p>
                        <img src='images/star.png' alt='star icon' className='star_icon'/>
                        <img src='images/star.png' alt='star icon' className='star_icon'/>
                        <img src='images/star.png' alt='star icon' className='star_icon'/>
                        <img src='images/star.png' alt='star icon' className='star_icon'/>
                        <img src='images/star.png' alt='star icon' className='star_icon'/>
                    </div>
                </div>
            </div>
            <div className='reviews_link'><a href='https://www.google.com/maps/place/Fahrenheit+Bakery/@34.9130927,33.6317567,17z/data=!4m7!3m6!1s0x14e0833b14f25d2f:0xff2dd6a4a14c6ca9!8m2!3d34.9130927!4d33.6339454!9m1!1b1' target='_blank' rel='noopener noreferrer'>See more reviews</a></div>
        </div>
    )
}

export default Review