import React, { Component } from 'react';
import Ninjas from './Ninjas'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>My first react app! </h1>
        <p>Welcome :)</p>
        <Ninjas name="Bashar" age="27" belt="Black" />
        <Ninjas name="Ali" age="22" belt="Green" />
      </div>
    );
  }
}

export default App;
