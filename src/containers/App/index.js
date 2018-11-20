import React, { Component } from 'react'

import Button from '../../components/Button'
import A from '../../components/A'

class App extends Component {
  render() {
    return (
      <div>
        <Button>Button</Button>
        <Button color="danger">Danger</Button>
        <Button color="info">Info</Button>
        <Button color="warning">Warning</Button>
        <Button color="success">Success</Button>
        <Button outline>Outline</Button>
        <Button as="a" href='#'>Link</Button>
        <div>
          <A href='#'>This is a link</A>
        </div>
      </div>
    );
  }
}

export default App
