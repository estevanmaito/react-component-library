import React from 'react'
import PropTypes from 'prop-types'

import StyledA from './anchorStyles'

const A = (props) => {
  return (
    <StyledA href={props.href}>
      {props.children}
    </StyledA>
  )
}

A.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default A
