import React from 'react';

//CSS file will be applied for each files
import './Ninjas.css'
// UI component
const Ninjas = ({ninjas, deleteNinja}) => {
    
    const ninjaList = ninjas.map(ninja => {
        
        if (ninja.age > 25)
        {
            return (
                <div className="ninja" key={ninja.id }>
                    <div>Name: {ninja.name}</div>
                    <div>Age: {ninja.age}</div>
                    <div>Belt: {ninja.belt}</div>
                    <button onClick={()=>{deleteNinja(ninja.id)}}>Delete</button>
                </div>   
            )
        }
        else{
            return null
        }
    })
    
    return (
        <div className="ninja-list">
            {ninjaList}
        </div>
    )
}

export default Ninjas;
