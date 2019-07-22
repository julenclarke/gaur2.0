import React from 'react'
import PropTypes from 'prop-types'

function Welcome () {
  return (
    <div className='instructions-container'>
      <h1 className='center-text header-lg'>
        GAUR 2.0
      </h1>
      <ol className='container-sm grid center-text battle-instructions'>
        <li>
          <h3 className='header-sm'>Enter two Github users</h3>
        </li>
        <li>
          <h3 className='header-sm'>Battle</h3>
        </li>
        <li>
          <h3 className='header-sm'>See the winners</h3>
        </li>
        <li>
          <button
            style={{fontSize: 30}}
            className='btn-clear'
            onClick={() => this.setState({
              language: 'english'
            })}
          >
            {language === 'euskara' ? 'Euskara' : 'English'}
          </button>
        </li>
      </ol>
    </div>
  )
}

export default class Login extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      language: 'euskara'
    }
  }

  render() {
    return (
      <React.Fragment>
        <Welcome />

        <form className='column player'>
          <label htmlFor='username' className='player-label'>
            Sartu GAUR 2.0ra
          </label>
          <div className='row player-inputs'>
            <input
              type='text'
              id='username'
              className='input-light'
              placeholder='Erabiltzailea'
              autoComplete='off'
            />
            <button
              className='btn dark-btn'
              type='submit'
            >
              Sartu
            </button>
          </div>
        </form>
      </React.Fragment>
    )
  }

}