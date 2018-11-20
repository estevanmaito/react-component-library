import styled from 'styled-components'
import { darken } from 'polished'
import { themeProp } from '../../utils/theme'

export const baseStyles = styled.button`
  background-color: ${themeProp('primary')};
  border: none;
  border-radius: 3px;
  padding: 0.5rem 1rem;
  display: inline-block;
  margin: 0 .35rem;
  font-size: 1rem;
  text-decoration: none;
  color: #fff;
  cursor: pointer;

  &:hover {
    /* this won't work on a dark theme */
    background-color: ${props => darken(0.05, props.theme.primary)};
  }

  &:focus,
  &:active {
    /* this won't work on a dark theme */
    background-color: ${props => darken(0.15, props.theme.primary)};
  }
`

export const dangerStyles = styled(baseStyles)`
  background-color: ${themeProp('danger')};
  &:hover {
    background-color: ${props => darken(0.05, props.theme.danger)};
  }
  &:focus,
  &:active {
    background-color: ${props => darken(0.15, props.theme.danger)};
  }
`

export const infoStyles = styled(baseStyles)`
  background-color: ${themeProp('info')};
  &:hover {
    background-color: ${props => darken(0.05, props.theme.info)};
  }
  &:focus,
  &:active {
    background-color: ${props => darken(0.15, props.theme.info)};
  }
`

export const warningStyles = styled(baseStyles)`
  background-color: ${themeProp('warning')};
  &:hover {
    background-color: ${props => darken(0.05, props.theme.warning)};
  }
  &:focus,
  &:active {
    background-color: ${props => darken(0.15, props.theme.warning)};
  }
`

export const successStyles = styled(baseStyles)`
  background-color: ${themeProp('success')};
  &:hover {
    background-color: ${props => darken(0.05, props.theme.success)};
  }
  &:focus,
  &:active {
    background-color: ${props => darken(0.15, props.theme.success)};
  }
`

export default baseStyles