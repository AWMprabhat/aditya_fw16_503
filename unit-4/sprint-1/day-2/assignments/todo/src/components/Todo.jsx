import React from 'react'
import Todolist from "./Todolist"
import { useState} from 'react'
import styles from "./App.module.css"

const Todo = () => {
    const [todo,settodo]=useState("")
     const [value,setvalue] = useState([])

     const change=(todo)=>{
       setvalue([...value, todo])
       
     }
  return (
    <div>
      <div>
       <Todolist value={value}/>
      </div>
     <div >
        <input type="text"
       
         placeholder="   Write Something..."
          onChange={(e)=>settodo(e.target.value)} />
        <button onClick={() => change(todo)} >+</button>
        </div>
       
    </div>
  )
}

export default Todo