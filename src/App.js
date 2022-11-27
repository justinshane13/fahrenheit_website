import React, { useState, useEffect } from 'react' 
import Header from './components/Header'
import Navbar from './components/Navbar'
import Intro from './components/Intro'
import Body from './components/Body'
import Footer from './components/Footer'
import Reviews from './components/Reviews'
import Hero from './components/Hero'
import Categories from './components/Categories'
import ScrollToTop from './components/ScrollToTop'
import sectionData from './sectionData'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMobile] = useState(window.matchMedia('(max-width: 550px)').matches)

  const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
  };
  
  useEffect(() => {
      window.addEventListener('scroll', handleScroll, { passive: true });
  
      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className='App'>
        <Header />
        <Navbar scrollPosition={scrollPosition} isMobile={isMobile} />
        <div>
          <Switch>
            <Route exact path='/'>
              <Hero isMobile={isMobile} />
              <Intro />
              <Reviews />
              <Categories />
            </Route>
            <Route exact path='/bread'>
              <Body data={sectionData[0]}/>
            </Route>
            <Route exact path='/sweet'>
              <Body data={sectionData[1]}/>
            </Route>
            <Route exact path='/savory'>
              <Body data={sectionData[2]}/>
            </Route>
            <Route exact path='/story'>
              <Body data={sectionData[3]}/>
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
