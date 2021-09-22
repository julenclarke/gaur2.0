import React from 'react'
import PropTypes from 'prop-types'
import languagesdata from '../languagesdata.json'
import { fetchLanguageRepos } from '../utils/api'
import Dashboard from './Dashboard'
import Nav from './Nav'
import {BrowserRouter as Router, Route, Link } from 'react-router-dom'

function LanguagesNavi ({ selected, onUpdateLanguage}) {
  const languages = ['EU', 'ES', 'EN']

  return (
    <div >
      <ul className='flex-center'>
        {languages.map((language) => (
          <Link key={language}
            to={{
              search: `?lang=${language}`
            }}
          >
            <li key={language}>
              <button
                className='btn-clear nav-link'
                style={language === selected ? { color: 'rgb(187, 46, 31)' } : null }
                onClick={() => onUpdateLanguage(language)}>
                {language}
              </button>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  )
}

export default class LanguagesNav extends React.Component {
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

    const { selected } = this.props

    const languages = ['EU', 'ES', 'EN']

    return (
      <React.Fragment>

        <LanguagesNavi
          selected={selected}
          onUpdateLanguage={this.updateLanguage}
        />

      </React.Fragment>
    )
  }
}
