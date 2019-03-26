import React, { Component } from 'react';

class SingleCard extends Component{
    
    render(){
        
        const {data} = this.props;           
        return(
            <div className="bashar">
                <ul>
                    <li>First Name: {data.fname}</li>
                    <li>Last Name: {data.lname}</li>
                    <br />
                </ul>
            </div>
        )
    }
}
export default SingleCard;