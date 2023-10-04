import React from 'react';
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import { BrowserRouter as Router} from 'react-router-dom';
import Howitwork from './components/howitwork/Howitwork';
import Special from './components/special/Special';
import Holiday from './components/holiday/Holiday';
import Our_Blog from './components/our_blog/Our_Blog';
import Sub from './components/subcribe/Sub';
import Comment from './components/comment/Comment';
import WorldBest from './components/worldbest/WorldBest';

function App() {
  return (
    <div>
      <Router>
          <Header/>
          <Howitwork/>
          <Special/>
          <WorldBest/>
          <Holiday/>
          <Comment/>
          <Our_Blog/>
          <Sub/>
          <Footer/>
          
        {/* <Switch>
          
        </Switch> */}
      </Router>
        
    </div>
    
  )
}

export default App;
