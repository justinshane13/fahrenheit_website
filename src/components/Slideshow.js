

const Slideshow = () => {
    return (
        <div>
            <div id="slider">                
                <ul className='overflow-hidden'>
                <li className="image-wrapper img1 animation">
                    <img src="/images/Savory1.png" alt=""/>
                    </li>
                    <li className="image-wrapper img2 animation">
                    <img src="/images/Savory2.png" alt=""/>
                    </li>
                    <li className="image-wrapper img3 animation">
                    <img src="/images/Savory3.png" alt=""/>
                    </li>
                    <li className="image-wrapper img4 animation">
                    <img src="/images/Savory4.png" alt=""/>
                    </li>
                    <li className="image-wrapper img5 animation">
                    <img src="/images/Savory5.png" alt=""/>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Slideshow