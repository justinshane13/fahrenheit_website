

const Body = (props) => {
    let imageElementsHtml
    if (props.images) {
        imageElementsHtml = props.images.map(image => {
            return <img src={image.path} alt={image.alt} className='image' key={image.path} />
        })
    }

    return (
        <div className='body'>
            <h2 className='body_title'>{props.title}</h2>
            {imageElementsHtml && 
            <div className='imagesContainer'>
                {imageElementsHtml}
            </div>}
        </div>
    )
}

export default Body