import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import styles from "./counter.module.css"


const Counter = (prop) => {
    const [count,setcount]= useState(0)

    const [color,setcolor]=useState("black")

 useEffect(() => {
    (count%2===0)? setcolor ("green") : setcolor("red")
 }, [count])
 
  return (
    <div className={styles.back}>
<h1 className={styles.head}>Counter App</h1>
<h2 style={{color: color }} >count :{count}</h2>
<button onClick={()=>setcount(count+1)}>Increment</button>
<button onClick={()=>{
    if(count>0){
        setcount(count-1)
    }
}}>Decrement</button>
<button onClick={()=>setcount(count*2)}>Double</button>

    </div>
  )
}

export default Counter

