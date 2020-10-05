import React, { useState } from 'react';

const RenderString = () => {
  const [words, setWords] = useState('')

  return (
    <>
      <button onClick={() => setWords('Hello World')}>click me now</button>
      <span>{words}</span>
    </>
  )
}

export default RenderString







