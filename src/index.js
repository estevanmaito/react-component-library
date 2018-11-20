import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './containers/App'
import { ThemeProvider } from 'styled-components'
import theme from './utils/theme'

const AppContainer = (
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
)

ReactDOM.render(AppContainer, document.getElementById('root'));
