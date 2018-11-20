export const theme = {
  // colors
  primary: '#a04ed9',
  danger: 'red',
  info: 'blue',
  warning: 'orange',
  success: 'green',
}

/**
 *  Get a prop from theme
 */
export const themeProp = propName => props => props.theme[propName]

export default theme