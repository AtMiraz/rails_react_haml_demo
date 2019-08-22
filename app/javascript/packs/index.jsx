import React from 'react'
import ReactDOM from 'react-dom'

function Index (props) {
  const { message } = props
  return (
    <div> Im a react component rendering this from rails: { message }</div>
  )
  
}

document.addEventListener('DOMContentLoaded', () => {
  const node = document.getElementById('index_greeter')
  const data = JSON.parse(node.getAttribute('data'))
  console.log('data', data);
  ReactDOM.render(
    <Index message={data} name="React" />,
    document.body.appendChild(document.createElement('div')),
  )
})