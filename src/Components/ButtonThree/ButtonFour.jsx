import React, { useState } from 'react';
import './style.scss'

const ButtonFour = () => {
  const [newColor, SetNewColor]= useState(false)
  let colorClass = "heading"

  if (newColor) {
    colorClass += '--active'
  }

  return (
    <>
      <button class="button" onClick={() => SetNewColor(!newColor)}>press</button>
      <h1 class={colorClass}>{newColor ? 'on' : 'off'}</h1>
    </>
  )
}


export default ButtonFour