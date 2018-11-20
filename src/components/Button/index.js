import React from 'react'
import PropTypes from 'prop-types'

import {
  PrimaryButton,
  DangerButton,
  InfoButton,
  WarningButton,
  SuccessButton
} from './StyledButton'

const Button = (props) => {
  let Component = PrimaryButton
  switch (props.color) {
    case 'danger':
      Component = DangerButton
      break
    case 'info':
      Component = InfoButton
      break
    case 'warning':
      Component = WarningButton
      break
    case 'success':
      Component = SuccessButton
      break
    default:
      break
  }

  let button = (
    <Component {...props}>
      {props.children}
    </Component>
  )

  return button
}

Button.propTypes = {
  onClick: PropTypes.func,
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
  size: PropTypes.string,
  outline: PropTypes.bool,
  as: PropTypes.string,
}

export default Button
