import { Link } from 'react-router-dom'

const Categories = () => {
    return (
        <div className='categories_container'>
          <div className='categories_text'>
            <p>Every week we bake new things to keep our menu fresh, but we have some favorites that we think you'll love.</p>
            <p>Check out some of our most common pastries – both sweet and savory – as well as our fresh-baked breads. Our weekly bread schedule doesn't change, but we do sell out. If you see something you want, stop by before it's gone!</p>
          </div>
          <div className='categories_links'>
            <Link to='/savory'>
              <div className='category_link_box box1'>
                <img src='/images/Savory5.png' alt='' className='categories_image image1' />
                <p className='category_link_name'>savory</p>
              </div>
            </Link>
            <Link to='/sweet'>
              <div className='category_link_box box2'>
                <img src='/images/Sweet3.jpg' alt='' className='categories_image image2' />
                <p className='category_link_name'>sweet</p>
              </div>
            </Link>
            <Link to='/bread'>
              <div className='category_link_box box3'>
                <img src='/images/Bread1.jpg' alt='' className='categories_image image3' />
                <p className='category_link_name'>bread</p>
              </div>
            </Link>
            <Link to='/story'>
              <div className='category_link_box box4'>
                <img src='/images/Story2.png' alt='' className='categories_image image4' />
                <p className='category_link_name'>story</p>
              </div>
            </Link>
          </div>
        </div>
    )
}

export default Categories