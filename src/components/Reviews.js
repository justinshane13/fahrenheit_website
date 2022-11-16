

const Review = () => {
    return (
        <div>
            <div className='reviews'>
                <img src='/images/Savory1.png' alt=''  className='review_img'/>
                <div className='review_body'>
                    <p className='review_text'>"From bread, cookies, cakes...omg the cheesecake...hard to choose one thing from this place. If you ever wonder what a mixture of American Cypriot receipes would taste like this is the place to visit. Owners super friendly always welcoming with a big smile. Beautiful place located in Larnaca."</p>
                    <p className='reviewer'>Rakis G.</p>
                </div>
            </div>
            <hr />
            <div className='reviews'>
                <div className='review_body'>
                    <p className='review_text'>"Amazing new bakery! I've only tried the almond croissants here, and they are perfect. Definitely the best in Cyprus."</p>
                    <p className='reviewer'>Violet V.</p>
                </div>
                <img src='/images/Savory2.png' alt=''  className='review_img'/>
            </div>
            <hr />
            <div className='reviews'>
                <img src='/images/Savory3.png' alt=''  className='review_img'/>
                <div className='review_body'>
                    <p className='review_text'>"The BEST bakery in Cyprus. Maria has created the most amazing bread and pastries ever. I never can choose just one pastry. I always get 2 or 3. We're lucky to have her bakery right here in Larnaca."</p>
                    <p className='reviewer'>Martha R.</p>
                </div>
            </div>
        </div>
    )
}

export default Review