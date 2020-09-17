import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons"

 const SocialFollow = () => {
  return (
    <div className="container">
      <div className="container__heading">Follow me on social media</div>
      <a href="https://www.youtube.com/c/jamesqquick"
        className="container__youtube social">
        <FontAwesomeIcon icon={faYoutube} size="5x" />
      </a>
      <a href="https://www.facebook.com/learnbuildteach/"
        className="container__facebook social">
        <FontAwesomeIcon icon={faFacebook} size="5x" />
      </a>
      <a href="https://www.twitter.com/jamesqquick"
        className="container__twitter social">
        <FontAwesomeIcon icon={faTwitter} size="5x" />
      </a>
      <a href="https://www.instagram.com/learnbuildteach"
        className="container__instagram social">
        <FontAwesomeIcon icon={faInstagram} size="5x" />
      </a>
    </div>
  )
}

export default SocialFollow

// install these packages to access the fonts and icons
// npm install --save @fortawesome/react-fontawesome @fortawesome/fontawesome-svg-core @fortawesome/free-brands-svg-icons
