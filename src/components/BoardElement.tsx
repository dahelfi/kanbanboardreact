import React from 'react'
import "../styles/mainPage.scss"

export const BoardElement = () => {


  return (
    <main id="board">

    <div className="column-container">
        <h3>TO DO</h3>
        <div className="card" id="todo" ></div>
    </div>
    
    <div className="column-container">
        <h3>IN PROGRESS</h3>
        <div className="card" id="inProgress" ></div>
    </div>
    
    <div className="column-container">
        <h3>TESTING</h3>
        <div className="card" id="testing" ></div>
    </div>
    
    <div className="column-container">
        <h3>DONE</h3>
        <div className="card" id="done" ></div>
    </div>

</main> 
  )
}
