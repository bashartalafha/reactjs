import React, { Component } from 'react';

class Ninjas extends Component {
  render() {
    // console.log(this.props)
    // the prop ninjas is a list 
    const {ninjas} = this.props;
    // We want to iterate over the list
    // for each ninja in ninjas
    const ninjaList = ninjas.map(ninja => {
        return (
            <div className="ninja" key={ninja.id }>
                <div>Name: {ninja.name}</div>
                <div>Age: {ninja.age}</div>
                <div>Belt: {ninja.belt}</div>
                
            </div>   
        )
    })
    
    return (
        <div className="ninja-list">
            {ninjaList}
        </div>
    )
  }
}

export default Ninjas;
