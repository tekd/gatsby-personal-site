import React from 'react'
import { button } from '../styles/button.module.scss'

const Button = ({ buttonText }) => {
  return <button className={button}>{buttonText}</button>
}

export default Button
