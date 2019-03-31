import React from 'react';
// Props take many information from Route,
// We can reroute using history.push from the props  
const Contact = (props) => {
    
    setTimeout(()=>{
        props.history.push('/About');
    }, 2000)

    return(
        <div className="container">
            <h4 className="center">Contact</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste facilis vitae laboriosam inventore commodi eveniet, repellendus illo molestias, sequi dolores ab obcaecati alias quibusdam officiis illum consequatur dolore aperiam at.</p>

        </div>
    )
}
export default Contact;