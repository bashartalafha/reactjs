import React, { Component } from 'react';

class Ninjas extends Component {
  render() {
      //console.log(this.props)
      // betwee squared brackets are the props
      // the names should be the same as the passed props
      const {name, age, belt} = this.props;
    return (
      <div className="ninja">
            <div>Name: {name}</div>
            <div>Age: {age}</div>
            <div>Belt: {belt}</div>
      </div>
    );
  }
}

export default Ninjas;
