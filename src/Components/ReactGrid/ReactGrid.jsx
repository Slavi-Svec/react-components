import React from 'react'
import './styles.css'

const ReactGrid = () => {
  return (
    <>
      <div class="flex-grid-fours">
        <div className="col">DIV 1</div>
        <div className="col">DIV 2</div>
      </div>
      <div class="flex-grid-fours">
        <div className="col">DIV 3</div>
        <div className="col">DIV 4</div>
      </div>
    </>
  )
}

export default ReactGrid
