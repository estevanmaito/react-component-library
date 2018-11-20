import React, { Component } from 'react'

import Button from '../../components/Button'
import A from '../../components/A'

class App extends Component {
  render() {
    return (
      <div>
        <Button>Button</Button>
        <Button href='#'>Link</Button>
        <div>
          <A href='#'>This is a link</A>
        </div>
      </div>
    );
  }
}

export default App
