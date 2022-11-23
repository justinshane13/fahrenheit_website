import Header from './components/Header'
import Navbar from './components/Navbar'
import Body from './components/Body'
import Footer from './components/Footer'
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
          <p className='intro_summary'>As a family-run bakery, we focus on quality. We source the best ingredients available, and stay true to the American baking methods our head baker learned while training in San Francisco.</p>
          <p className='intro_summary'>What we bake varies from week to week, based on which ingredients are fresh, available, and in-season. We love to try new things, so stop by in-person to see what we're making this week.</p>
          <p className='intro_summary'>Our guarantee is that every cookie, bagel, pastry, cake, and loaf of bread you try from us was prepared with the highest level of care.</p>
        </div>
        <img src='/images/kneading_dough.jpg' alt='baker kneading dough' className='intro_image' />
      </div>
      <div className='social'>
        <div>
          <p className='social_text'>The best way to keep up with Fahrenheit Bakery is on Instagram!</p>
          <p className='social_text'>We share what we're baking, our weekly bread schedule, hours of operation, and more. Tap or click on the phone to follow us!</p>
        </div>
        <a href='https://www.instagram.com/fahrenheitbakery_cy/'><img src='/images/Fahrenheit_Instagram_Mockup.png' alt='fahrenheit instagram page screenshot' className='social_mockup'/></a>
      </div>
      <Reviews />
      <div className='categories_container'>
        <div className='categories_text'>
          <p>Every week we bake new things to keep our menu fresh, but we have some favorites that we think you'll love.</p>
          <p>Check out some of our most common pastries – both sweet and savory – as well as our fresh-baked breads. Our weekly bread schedule doesn't change, but we do sell out. If you see something you want, stop by before it's gone!</p>
        </div>
        <div className='categories_links'>
          <a href='www.google.com'>
            <div className='category_link_box box1'>
              <img src='/images/Savory5.png' alt='' className='categories_image image1' />
              <p className='category_link_name'>savory</p>
            </div>
          </a>
          <a href='www.google.com'>
            <div className='category_link_box box2'>
              <img src='/images/Sweet2.png' alt='' className='categories_image image2' />
              <p className='category_link_name'>sweet</p>
            </div>
          </a>
          <a href='www.google.com'>
            <div className='category_link_box box3'>
              <img src='/images/Bread.png' alt='' className='categories_image image3' />
              <p className='category_link_name'>bread</p>
            </div>
          </a>
          <a href='www.google.com'>
            <div className='category_link_box box4'>
              <img src='/images/Story2.png' alt='' className='categories_image image4' />
              <p className='category_link_name'>story</p>
            </div>
          </a>
        </div>
      </div>
      {/* {bodyHtml} */}
      <Footer />
    </div>
  );
}

export default App;
