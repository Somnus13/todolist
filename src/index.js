import React from 'react'
import ReactDOM from 'react-dom'
import './a.sass'
import './utils/index'

const Index = () => (
  <div>Hello React!</div>
)

if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(<Index/>, document.getElementById('root'))
