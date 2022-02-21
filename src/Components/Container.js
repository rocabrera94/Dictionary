import React from "react";


let Container = ({data}) => { 
    let meaning = data.meanings[0].definitions[0].definition;  
    
    
    
    let aya = data.meanings;
    


     return ( 
        <div id='container' className="container">
            <p><span>word</span>: {data.word}</p>
            <p><span>phonetic</span>: {data.phonetic}</p>
            
            {aya.map((examples)=>{
                return (
                  <div key={examples.definitions[0].definition}>    
                    <p><span>definition</span>: {examples.definitions[0].definition}</p>
                  </div>)
            })}    
        </div>
               ) 
           
           
          
        
        
        
    
}

export default Container;