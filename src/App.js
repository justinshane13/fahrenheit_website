import Header from './components/Header'
import Navbar from './components/Navbar'
import Body from './components/Body'
import Footer from './components/Footer'
import sectionData from './sectionData'
import Slideshow from './components/Slideshow'

function App() {

  let bodyHtml = sectionData.map(section => {
    return <Body title={section.title} images={section.images} key={section.title}/>
  })

  return (
    <div className='App'>
      <Header />
      <Navbar />
      <div className='header_top'>
        <img src='/images/Header_Dark.png' alt='several croissants on a baking tray' className='header_img' />
        <div className='slogan_container'>
          <p className='slogan'>Authentic.</p>
          <p className='slogan'>Housemade.</p>
          <p className='slogan'>American desserts, pastries, and bread in the heart of Larnaca.</p>
        </div>
      </div>
      {bodyHtml}
      <Slideshow />
      <Footer />
    </div>
  );
}

export default App;
