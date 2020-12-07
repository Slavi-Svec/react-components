import React, { useState } from 'react';
import styles from './styles.scss'

const ColorChanger = () => {
  const [showText, setShowText] = useState(false)

  return (
    <>
      <button onClick={() => setShowText()}>{showText ? 'on' : 'off'}</button>
    </>
  )
}

export default ColorChanger







