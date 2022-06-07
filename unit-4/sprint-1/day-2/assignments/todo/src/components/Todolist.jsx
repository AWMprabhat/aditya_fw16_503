
import React from 'react'
import Todoitem from  "./Todoitem"
import styles from "./App.module.css"

const Todolist = ({value}) => {

  return (
    <div>
      {value.map((item)=>{
        return (
          
          <div className={styles.todo}>
            <Todoitem item={item} />
          
          </div>
          
        )
      })}
    </div>
  )
}

export default Todolist