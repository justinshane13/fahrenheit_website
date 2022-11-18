import Header from './components/Header'
import Navbar from './components/Navbar'
import Body from './components/Body'
import Footer from './components/Footer'
import Slideshow from './components/Slideshow'
import Reviews from './components/Reviews'
import Landing from './components/Landing'
import sectionData from './sectionData'

function App() {

  let bodyHtml = sectionData.map(section => {
    return <Body title={section.title} images={section.images} key={section.title}/>
  })

  return (
    <div className='App'>
      <Header />
      <Navbar />
      <Landing />
      <div className='intro_container'>
        <div>
          <p className='intro_summary'>As a family-run bakery, we place a premium on quality. We source the best ingredients available, and stay true to the American baking methods our head baker learned while training in San Francisco.</p>
          <p className='intro_summary'>What we bake varies from week to week, based on which ingredients that are fresh, available, and in-season. We love to try new things, so stop by in-person to see what we're making this week.</p>
          <p className='intro_summary'>Our guarantee is that every cookie, bagel, pastry, cake, and loaf of bread you try from us was prepared with the highest level of care.</p>
        </div>
        <img src='/images/kneading_dough.jpg' alt='baker kneading dough' className='intro_image' />
      </div>
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
      {/* {bodyHtml} */}
      <Slideshow />
      <Footer />
    </div>
  );
}

export default App;
