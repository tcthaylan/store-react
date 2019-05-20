import React from 'react'

export default  ( {name,handleCheck } ) => (
    <div>
        <label>{name}</label>
        <input type="radio" id={name} name="radio" data-category={name} onChange={handleCheck}/>
    </div>
)