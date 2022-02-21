import React from 'react';

function SearchBox({inputVal}){
    return(
        <div className='form'> 
            <input placeholder="enter word" id="inputId" className='input'></input>
            <button onClick={()=>inputVal()} className='btn'>submit</button> 
        </div>
    )
}

export default SearchBox;