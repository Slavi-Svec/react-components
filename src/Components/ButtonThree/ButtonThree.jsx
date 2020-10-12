import React, { useState } from 'react';
import './style.scss'

const ButtonThree = () => {
  const [shouldShowText, setShouldHowText] = useState(false)
  let headingClass = 'heading'

  if (shouldShowText) {
    headingClass += '--active'
  }
    console.log(headingClass)
  return (
    <>
      <button onClick={() => setShouldHowText(!shouldShowText)}>press</button>
      <h1 className={headingClass}>{shouldShowText ? 'on' : 'off'}</h1>
    </>
  )
}

export default ButtonThree

// const [president, setPresident] = useState(['Trump', 'Obmama', 'Clinton'])
// have an onclick that dispalys presedents randoml

//  array of words in defaut usestate



