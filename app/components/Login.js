import React from 'react'
import PropTypes from 'prop-types'
import { languagedata } from './Languages'
import languagesdata from '../languagesdata.json'
import { fetchLanguageRepos } from '../utils/api'
import Dashboard from './Dashboard'

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

function LoginForm ({ repos, selected, dashboard, onUpdateLogin }) {
  var language = {}
  switch (selected) {
    case "EU":
      selected = "EU";
      language  = repos[0].terms;
      break;
    case "ES":
      selected = "ES";
      language = repos[1].terms;
      break;
    case "EN":
      selected = "EN";
      language = repos[2].terms;
      break;
  }

  return (
    <form className='column player'>
      <div className='row player-inputs'>
        <input
          type='text'
          id='username'
          className='input-light'
          placeholder={language.username}
          autoComplete='off'
        />
      </div>
      <div className='row player-inputs'>
        <input
          type='password'
          id='password'
          className='input-light'
          placeholder={language.password}
          autoComplete='off'
        />
      </div>
      <div className='row player-inputs'>
        <button
          className='btn dark-btn'
          type='submit'
          onClick={() => {onUpdateLogin(`${dashboard}`)}}
        >
          {language.login}
        </button>
      </div>
    </form>
  )
}

LoginForm.propTypes = {
  repos: PropTypes.array.isRequired
}

export default class Login extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedLanguage: 'EU',
      repos: null,
      error: null,
      dashboard: false
    }

    this.updateLanguage = this.updateLanguage.bind(this)
    this.updateLogin = this.updateLogin.bind(this)

  }
  componentDidMount () {
    this.updateLanguage(this.state.selectedLanguage)
  }
  updateLanguage (selectedLanguage) {
    this.setState({
      selectedLanguage,
      error: null
    })

    fetchLanguageRepos(selectedLanguage)
      .then((repos) => this.setState({
          repos,
          error: null,
      }))
      .catch(() => {
        console.warn('Error fetching repos: ', error)

        this.setState({
          error: 'There was an error fetching the repositories.'
        })
      })
  }
  updateLogin (dashboard) {
    this.setState({
      error: null,
      dashboard: true
    })
  }
  render() {
    const { selectedLanguage, repos, error, dashboard } = this.state

    if (dashboard === true) {
      return (
        <React.Fragment>
          <LanguagesNav
            selected={selectedLanguage}
            onUpdateLanguage={this.updateLanguage}
          />
          {repos && <Dashboard repos={repos} selectedLanguage={selectedLanguage} />}
        </React.Fragment>
      )
    }

    return (
      <React.Fragment>
        <LanguagesNav
          selected={selectedLanguage}
          onUpdateLanguage={this.updateLanguage}
        />

        {error && <p>{error}</p>}

        {repos && <LoginForm repos={repos} selected={selectedLanguage} dashboard={dashboard} onUpdateLogin={this.updateLogin} />}

      </React.Fragment>
    )
  }
}