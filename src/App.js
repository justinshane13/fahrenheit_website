import Header from './components/Header'
import Navbar from './components/Navbar'
import Body from './components/Body'
import Footer from './components/Footer'
import sectionData from './sectionData'

function App() {

  let bodyHtml = sectionData.map(section => {
    return <Body title={section.title} images={section.images} key={section.title}/>
  })

  return (
    <div className='App'>
      <div className='header_container'>
        <Header />
        <Navbar />
      </div>
      <div 
        className='slogan_container'
        style={{
          backgroundImage: `url('/images/Savory5.png')`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
      }}>
        <p className='slogan'>Authentic housemade American desserts,<br/>pastries, and bread in the heart of Larnaca</p>
      </div>
      {bodyHtml}
      <Footer />
    </div>
  );
}

export default App;
