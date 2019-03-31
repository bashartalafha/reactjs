import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Post from './components/Post'

// /:post_id will accept anything including (Home, About, Contact)
// We can solve this problem by adding '/post' before /:post_id, for instance (Route path="/post/:post_id)  
// Also in Home.js we have to change Link to={"/" to Link to={"/post/"
// The second solution is to use Switch tag, which perform as in other programing langs. So it will use
// only one Route and break then (first occurance).
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/:post_id" component={Post} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
