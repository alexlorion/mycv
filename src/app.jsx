import React from 'react'
import Presentation from "components/Presentation"

import "styles/index.scss"

const App = React.createClass({
  render() {
    return (
      <div>
        <Presentation />
        {this.props.children}
      </div>
    )
  }
})

export default App
