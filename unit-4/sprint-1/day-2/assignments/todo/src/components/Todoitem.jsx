import React from 'react'


const Todoitem = ({item}) => {
  return (
    <div>
        <p >{item}</p>
        <input type="radio" /> 
    </div>
  )
}

export default Todoitem