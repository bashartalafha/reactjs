import React from 'react'

// A component that supercharge an old component
const Rainbow = (WrapperComponent) =>{
    
    const colours = ['red', 'pink', 'orange', 'blue', 'green', 'yellow'];
    const randomColor = colours[Math.floor(Math.random() *5)];
    const className = randomColor + '-text';

    return (props) =>{
        // Surround the old component with a new div with a new className
        // props here are the props of the old component, we should return them as well
        return(
            <div className={className}>
                <WrapperComponent {...props}/>
            </div>
        )
    }
    
}

export default Rainbow;