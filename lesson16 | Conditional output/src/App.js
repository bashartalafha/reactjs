import React, { Component } from 'react';
import Ninjas from './Ninjas'

class App extends Component {
  state = {
    ninjas: [
      {name: "Bashar", age:27, belt:"Green", id: 1},
      {name: "Ahmad", age:22, belt:"Black", id: 2},
      {name: "Omar", age:26, belt:"Blue", id: 3}
    ]
  }
  
  render() {
    return (
      <div className="App">
            
        <h1>My first react app! </h1>
        <p>Welcome :)</p>
        <Ninjas ninjas={this.state.ninjas} />
      </div>
    );
  }
}

export default App;