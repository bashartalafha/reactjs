import React, { Component } from 'react';
import Ninjas from './Ninjas'
import AddNinja from './AddNinja'

class App extends Component {
  state = {
    ninjas: [
      {name: "Bashar", age:27, belt:"Green", id: 1},
      {name: "Ahmad", age:22, belt:"Black", id: 2},
      {name: "Omar", age:26, belt:"Blue", id: 3}
    ]
  }
  
  addNinja = (ninja) => {
    console.log(ninja);
    ninja.id = Math.random();
    //Spread the ninja arr to this new variable, and then add the new ninja object
    let ninjas = [...this.state.ninjas, ninja]
    this.setState({
      ninjas: ninjas
    })
  }
  deleteNinja =(id)=> {
    console.log(id);
    //filter will loop over the data and return what true to the condition
    // It wont alter the state
    let ninjas = this.state.ninjas.filter(ninja=>{
      return ninja.id !== id
    })
    this.setState({
      ninjas: ninjas
    })
  } 
  render() {
    return (
      <div className="App">
            
        <h1>My first react app! </h1>
        <p>Welcome :)</p>
        <Ninjas ninjas={this.state.ninjas}  deleteNinja={this.deleteNinja}/>
        <AddNinja addNinja={this.addNinja}/>
      </div>
    );
  }
}

export default App;