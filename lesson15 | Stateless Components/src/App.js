import React, { Component } from 'react';
import Ninjas from './Ninjas'

class App extends Component {
  state = {
    ninjas: [
      {name: "Bashar", age:"27", belt:"Green", id: 1},
      {name: "Ahmad", age:"22", belt:"Black", id: 2},
      {name: "Omar", age:"24", belt:"Blue", id: 3}
    ]
  }
  // Container VS UI components
  // Container Components                 UI components
  // - Contain states                     - Don't contain states  
  // - Contain lifecycle hooks            - Recieve data from props
  // - Not concerned with UI              - Only concerned with UI
  // - Use classes to create              - Use functions to create
  // - (class)                            - (function)
  
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
