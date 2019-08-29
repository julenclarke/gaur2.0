import React from 'react'
import PropTypes from 'prop-types'
import { languagedata } from './Languages'
import languagesdata from '../languagesdata.json'
import { fetchPopularRepos } from '../utils/api'

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

function LoginForm ({ repos, selectedLanguage }) {
  var lang = {}
  switch (selectedLanguage) {
    case "EU":
      selectedLanguage = "EU";
      lang  = repos[0].terms;
      break;
    case "ES":
      selectedLanguage = "ES";
      lang = repos[1].terms;
      break;
    case "EN":
      selectedLanguage = "EN";
      lang = repos[2].terms;
      break;
  }

  return (
    <form className='column player'>
      <div className='row player-inputs'>
        <input
          type='text'
          id='username'
          className='input-light'
          placeholder={lang.username}
          autoComplete='off'
        />
      </div>
      <div className='row player-inputs'>
        <input
          type='password'
          id='password'
          className='input-light'
          placeholder={lang.password}
          autoComplete='off'
        />
      </div>
      <div className='row player-inputs'>
        <button
          className='btn dark-btn'
          type='submit'
        >
          {lang.login}
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
      error: null
    }

    this.updateLanguage = this.updateLanguage.bind(this)
    this.isLoading = this.isLoading.bind(this)
  }
  componentDidMount () {
    this.updateLanguage(this.state.selectedLanguage)
  }
  updateLanguage (selectedLanguage) {
    this.setState({
      selectedLanguage,
      error: null,
      repos: null
    })

    fetchPopularRepos(selectedLanguage)
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
  isLoading() {
    return this.state.repos === null && this.state.error === null
  }
  render() {
    const { selectedLanguage, repos, error } = this.state

    return (
      <React.Fragment>
        <LanguagesNav
          selected={selectedLanguage}
          onUpdateLanguage={this.updateLanguage}
        />

        {this.isLoading() && <p>LOADING...</p>}

        {error && <p>{error}</p>}

        {repos && <LoginForm repos={repos} selectedLanguage={selectedLanguage} />}

      </React.Fragment>
    )
  }
}