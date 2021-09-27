import React, { useEffect, useState } from 'react'
import './styles.css'

const ScrollButton = () => {
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    })
  }, [])

  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }

  return (
    <div>
      <div className="container">
        <div className="box box--1"></div>
        <div className="box box--1"></div>
        <div className="box box--1"></div>
        <div className="box box--1"></div>
        <div className="box box--1"></div>
      </div>
      {showButton && (
        <button onClick={scrollToTop} className="back-to-top">
          &#8679;
        </button>
      )}
    </div>
  )
}

export default ScrollButton
