import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Post from './components/Post'

// Get route as parameter for example an id or username ...
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          
          <Route path="/:post_id" component={Post} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
