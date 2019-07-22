import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Login from './components/Login'

// Component is concerned about State, Lifecycle and UI
// State
// Lifecycle - fetching data from thee API or
// doing some event when the component is added to the DOM itself.
// UI - render()
// Babel converts JSX to regular Javascript

class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <Login />
      </div>
    )
  }
}

ReactDOM.render(
  // Creates a React Element:
  <App />,
  // Render the element to:
  document.getElementById('app')
)