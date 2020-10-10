import React, { useState } from 'react';
import './style.scss'

const ButtonThree = () => {
  const [shouldShowText, setShouldShowText] = useState(false)
  let buttonClass = 'button'
  // if true buttonClass = 'button--active
  // append --active to the string button
  if (shouldShowText) {
    buttonClass += '--active'
  }
  console.log(buttonClass)

  return (
    <>
      <button className="button" onClick={() => setShouldShowText(!shouldShowText)}>button press</button>
      <h1 className={buttonClass}>{shouldShowText ? 'on' : 'off'}</h1>
    </>
  )
}

const ButtonThree = () => {
  const [isOn, toggleIsOn] = useState()
  return (
    <>
      <h1></h1>{isOn ? 'I Want To vote For D Trump!' : 'I want to Vote for V Putin!'}
      <button onClick={toggleIsOn}>
        Press me
      </button>
    </>
  )
}

export default ButtonThree




