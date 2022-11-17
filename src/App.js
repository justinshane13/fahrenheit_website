import Header from './components/Header'
import Navbar from './components/Navbar'
import Body from './components/Body'
import Footer from './components/Footer'
import Slideshow from './components/Slideshow'
import Reviews from './components/Reviews'
import sectionData from './sectionData'

function App() {

  let bodyHtml = sectionData.map(section => {
    return <Body title={section.title} images={section.images} key={section.title}/>
  })

  return (
    <div className='App'>
      <Header />
      <Navbar />
      <div className='header_top'>
        <div className='landing_bread_container'>
          <img className='landing_bread_img1' src='/images/landing_bread4.jpg' alt='several croissants on a baking tray' />
          <img className='landing_bread_img2' src='/images/landing_bread5.jpg' alt='several croissants on a baking tray' />
          <img className='landing_bread_img3' src='/images/landing_bread6.jpg' alt='several croissants on a baking tray' />
        </div>
        <div className='slogan_container'>
          <p className='slogan'>Authentic.</p>
          <p className='slogan'>Housemade.</p>
          <p className='slogan'>American desserts, pastries, and bread in the heart of Larnaca.</p>
        </div>
      </div>
      <h2 className='body_title'>Get to know our bakery</h2>
      <div className='categories_links'>
          <div className='category_box'>
            <a href='www.google.com'>
              <img src='/images/Savory5.png' alt='' className='categories_image' />
              <p>sweet</p>
            </a>
          </div>
          <div className='category_box'>
            <a href='www.google.com'>
              <img src='/images/Savory5.png' alt='' className='categories_image' />
              <p>savory</p>
            </a>
          </div>
          <div className='category_box'>
            <a href='www.google.com'>
              <img src='/images/Savory5.png' alt='' className='categories_image' />
              <p>bread</p>
            </a>
          </div>
          <div className='category_box'>
            <a href='www.google.com'>
              <img src='/images/Savory5.png' alt='' className='categories_image' />
              <p>story</p>
            </a>
          </div>
        </div>
        <div className='categories'>
          <div className='categories_text'>
            <p className='categories_text_1'>Are you in the mood for . . .</p>
            <div className='categories_text_vertical'>
              <p className='categories_text_2'>something sweet?</p>
              <p className='categories_text_2'>something savory?</p>
              <p className='categories_text_2'>fresh-baked bread?</p>
            </div>
          </div>
        </div>
      <h2 className='body_title'>What our customers have to say</h2>
      <Reviews />
      {bodyHtml}
      <Slideshow />
      <Footer />
    </div>
  );
}

export default App;
