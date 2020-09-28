import React from 'react'

const ButtonTwo = ({ text, alert, className}) => {
  return (
    <button className={className} onClick={() => console.log({alert})}>{text}
    </button>
  )
}

export default ButtonTwo


