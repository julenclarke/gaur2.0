import React from 'react'
import PropTypes from 'prop-types'

function LanguagesNav ({ selected, onUpdateLanguage}) {
  const languages = ['EU', 'ES', 'EN']

  return (
    <div >
      <h1 className='center-text header-lg'>
        GAUR 2.0
      </h1>
      <ul className='flex-center'>
        {languages.map((language) => (
          <li key={language}>
            <button
              className='btn-clear nav-link'
              style={language === selected ? { color: 'rgb(187, 46, 31)' } : null }
              onClick={() => onUpdateLanguage(language)}>
              {language}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

LanguagesNav.propTypes = {
  selected: PropTypes.string.isRequired,
  onUpdateLanguage: PropTypes.func.isRequired
}

export default class Login extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedLanguage: 'EU'
    }

    this.updateLanguage = this.updateLanguage.bind(this)
  }
  componentDidMount () {
    this.updateLanguage(this.state.selectedLanguage)
  }
  updateLanguage (selectedLanguage) {
    this.setState({
      selectedLanguage
    })
  }
  render() {
    const { selectedLanguage } = this.state
    return (
      <React.Fragment>
        <LanguagesNav
          selected={selectedLanguage}
          onUpdateLanguage={this.updateLanguage}
        />
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
          </div>
          <div className='row player-inputs'>
            <input
              type='password'
              id='username'
              className='input-light'
              placeholder='Pasahitza'
              autoComplete='off'
            />
          </div>
          <div className='row player-inputs'>
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