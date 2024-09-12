import React from 'react'
import "./Tittle.css"

function Tittle({subTitle, title}) {
  return (
    <div className='title'>
    <p>{subTitle}</p>
    <h2>{title}</h2>
      
    </div>
  )
}

export default Tittle
