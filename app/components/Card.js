import React from 'react'
import PropTypes from 'prop-types'

export default function Card ({ header }) {
  return (
    <div className='card bg-light'>
      <h4 className='header-lg center-text'>
        {header}
      </h4>
    </div>
  )
}

Card.propTypes = {
  header: PropTypes.string.isRequired,

}