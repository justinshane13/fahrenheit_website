import Header from './components/Header'
import Navbar from './components/Navbar'
import Intro from './components/Intro'
import Body from './components/Body'
import Footer from './components/Footer'
import Reviews from './components/Reviews'
import Landing from './components/Landing'
import Categories from './components/Categories'
import ScrollToTop from './components/ScrollToTop'
import sectionData from './sectionData'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className='App'>
        <Header />
        <Navbar />
        <div>
          <Switch>
            <Route exact path='/'>
              <Landing />
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
