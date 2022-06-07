import React from 'react'
import styles from  "./Background.module.css"
const Background = (props) => {
  return (
    <div>
        <div className={styles.background}>
          <div className={styles.left}>
            <p>{props.date}</p>
            <button>{props.button}</button>
            <h1>{props.apple}</h1>
            <h1>{props.pay}</h1>
            <p>{props.mac}</p>
          </div>
          <img src={props.url}/>
        </div>
    </div>
  )
}

export default Background