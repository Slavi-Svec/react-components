import React, { useState } from 'react';

const ButtonThree = () => {
 const [text, setText] = useState('click me')

  return (
    <>
      <section>
        <button onClick={() => setText('it is clicked')}>{text}</button>
      </section>
    </>
  )
}

export default ButtonThree