

const Body = (props) => {
    let { images, text, content_1, content_2, content_3 } = props.data
    let imageElementsHtml
    if (images) {
        imageElementsHtml = images.map(image => {
            return <img src={image.path} alt={image.alt} className='image' key={image.path} />
        })
    }

    return (
        <div className='body'>
            {text && <h2 className='body_title'>{text}</h2>}
            {content_1 && 
            <div className='body_content_container'>
                <p className='body_content'>{content_1}</p>
                <p className='body_content'>{content_2}</p>
                <p className='body_content'>{content_3}</p>
            </div>}
            {imageElementsHtml && 
            <div className='imagesContainer'>
                {imageElementsHtml}
            </div>}
        </div>
    )
}

export default Body