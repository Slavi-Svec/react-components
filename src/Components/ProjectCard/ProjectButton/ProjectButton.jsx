import React from 'react'
// import cn from 'classnames'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faCodepen} from "@fortawesome/free-brands-svg-icons"

import './styles.scss'

const ProjectButton = ({ heading,  variant, src }) => (
  <button
    className={`button__${variant}`}
    onClick={() => window.open(src)}
  >
  { heading }
  <FontAwesomeIcon icon={faCodepen} size="3x" color="white" />
  </button>
)

export default ProjectButton

