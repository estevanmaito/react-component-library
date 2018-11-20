import { css } from 'styled-components'

const buttonStyles = css`
  background-color: hsl(130, 50%, 50%);
  border: none;
  border-radius: 3px;
  padding: 0.5rem 1rem;
  display: inline-block;
  margin: 0 .35rem;
  font-size: 1rem;
  text-decoration: none;
  line-height: 1rem;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: hsl(130, 50%, 40%);
  }

  &:focus,
  &:active {
    background-color: hsl(130, 50%, 35%);
  }
`

export default buttonStyles