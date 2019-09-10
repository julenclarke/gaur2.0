import React from 'react'
import PropTypes from 'prop-types'
import Loading from './Loading'

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }
  render() {
    return (
      <React.Fragment>
        <div className='grid space-around container-sm'>
          <h1> Welcome to the Dashboard! </h1>
        </div>
      </React.Fragment>
    )
  }
}