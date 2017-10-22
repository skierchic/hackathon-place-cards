import React from 'react'
import ReactDOM from 'react-dom'
import CardContainer from '../react/containers/CardContainer'


document.addEventListener('DOMContentLoaded', () => {
  let reactElement = document.getElementById('app')
  if (reactElement) {
    ReactDOM.render(
      <CardContainer/>,
      reactElement
    )
  }
})
