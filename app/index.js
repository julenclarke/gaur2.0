import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

// Component is concerned about State, Lifecycle and UI
// State
// Lifecycle - fetching data from thee API or
// doing some event when the component is added to the DOM itself.
// UI - render()
// Babel converts JSX to regular Javascript

class App extends React.Component {
  render() {
    return (
      <div>
        Ongi etorri GAUR 2.0ra
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