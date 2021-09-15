import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import Profile from './components/Profile'
import PropTypes from 'prop-types'
import languagesdata from './languagesdata.json'
import { fetchLanguageRepos } from './utils/api'
import {BrowserRouter as Router, Route, Link } from 'react-router-dom'

// Component is concerned about State, Lifecycle and UI
// State
// Lifecycle - fetching data from thee API or
// doing some event when the component is added to the DOM itself.
// UI - render()
// Babel converts JSX to regular Javascript

function LanguagesNav ({ selected, onUpdateLanguage}) {
  const languages = ['EU', 'ES', 'EN']

  return (
    <div >
      <Link
        to={{
          pathname: '/',
          // search: `?lang=${selected}`
        }}
      >
        <h1 className='center-text header-lg'>
          GAUR 2.0
        </h1>
      </Link>
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

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedLanguage: 'EU',
      repos: null,
      error: null
    }

    this.updateLanguage = this.updateLanguage.bind(this)
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
      .then(
        (repos) => this.setState({
          repos,
          error: null,
        })
      )
      .catch(() => {
        console.warn('Error fetching repos: ', error)

        this.setState({
          error: 'There was an error fetching the repositories.'
        })
      })

  }

  render() {
    const { selectedLanguage, repos, error } = this.state

    return (
      <Router>
        <div className='container'>
          <LanguagesNav
            selected={selectedLanguage}
            onUpdateLanguage={this.updateLanguage}
          />
          <Route
            exact path='/'
            render={(props) => (
              <Login
                repos={repos}
                selectedLanguage={selectedLanguage}
              />
            )}
          />
          <Route
            path='/dashboard'
            render={(props) => (
              <Dashboard
                repos={repos}
                selectedLanguage={selectedLanguage}
              />
            )}
          />
          <Route
            path='/profile'
            render={(props) => (
              <Profile
                repos={repos}
                selectedLanguage={selectedLanguage}
              />
            )}
          />
        </div>
      </Router>
    )
  }
}

ReactDOM.render(
  // Creates a React Element:
  <App />,
  // Render the element to:
  document.getElementById('app')
)