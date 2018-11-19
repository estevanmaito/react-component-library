import React from 'react'
import PropTypes from 'prop-types'

import StyledButton from './StyledButton'
import AnchorButton from './AnchorButton'

const Button = (props) => {
  let button = (
    <AnchorButton href={props.href}>
      {props.children}
    </AnchorButton>
  )

  if (props.type === 'button') {
    button = (
      <StyledButton onClick={props.onClick}>
        {props.children}
      </StyledButton>
    )
  }
  return button
}

Button.propTypes = {
  onClick: PropTypes.func,
  href: PropTypes.string,
  type: PropTypes.string,
  children: PropTypes.node.isRequired,
  // size: PropTypes.string,
  // outline: PropTypes.bool,
  // style: PropTypes.string
}

export default Button
