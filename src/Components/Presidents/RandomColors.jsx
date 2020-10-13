import React from 'react'

const RandomColors = (random) => {
  let colorHex = '#'
  let ColorsRandomise = random.split('').sort(() => .5 - Math.random()).slice(0,6).join("")
  colorHex += ColorsRandomise
  return colorHex
}

export default RandomColors




