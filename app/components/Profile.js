import React from 'react'
import PropTypes from 'prop-types'
import Card from './Card'
import Loading from './Loading'
import { fetchLanguageRepos } from '../utils/api'

function ProfileList ({ repos, selected }) {
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
    <div className='grid space-around container-sm'>
      <Card
        header={language.personalinfo}
      >
        <ul className='card-list'>
          <li>
            <b>{language.name}</b> Julen Clarke
          </li>
          <li>
            <b>{language.username}</b> jclarke001
          </li>
          <li>
            <b>{language.email}</b> jclarke001@ikasle.ehu.eus
          </li>
          <li>
            <b>{language.password}</b> ··············
          </li>
        </ul>
      </Card>
    </div>
  )
}

export default class Profile extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedLanguage: 'EU',
      repos: null,
      error: null,
      loading: true
    }
  }

  componentDidMount () {
    var { repos, selectedLanguage } = this.props
    this.setState({
      selectedLanguage,
      repos,
      error: null,
      loading: false
    })
  }

  render() {
    const { selectedLanguage, repos, error } = this.props

    return (
      <React.Fragment>
          {repos && <ProfileList repos={repos} selected={selectedLanguage}/>}
      </React.Fragment>
    )
  }
}