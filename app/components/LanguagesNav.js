import React from 'react'
import PropTypes from 'prop-types'
import languagesdata from '../languagesdata.json'
import { fetchLanguageRepos } from '../utils/api'
import Dashboard from './Dashboard'
import Nav from './Nav'
import {BrowserRouter as Router, Route, Link } from 'react-router-dom'

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
