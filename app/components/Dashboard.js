import React from 'react'
import PropTypes from 'prop-types'
import Card from './Card'
import Loading from './Loading'
import { fetchLanguageRepos } from '../utils/api'
import Profile from './Profile'

function ReposGrid ({ repos, selected, profile, onUpdateProfile }) {
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
    <ul className='grid space-around'>
      <li key={language.studyplan}>
        <button
          onClick={() => {onUpdateProfile(`${profile}`)}}
        >
          <Card
            header={language.studyplan}
          >
          </Card>
        </button>
      </li>
      <li key={language.careers}>
        <Card
          header={language.careers}
        >
        </Card>
      </li>
      <li key={language.census}>
        <Card
          header={language.census}
        >
        </Card>
      </li>
      <li key={language.sms}>
        <Card
          header={language.sms}
        >
        </Card>
      </li>
      <li key={language.tuitions}>
        <Card
          header={language.tuitions}
        >
        </Card>
      </li>
      <li key={language.surveys}>
        <Card
          header={language.surveys}
        >
        </Card>
      </li>
      <li key={language.titles}>
        <Card
          header={language.titles}
        >
        </Card>
      </li>
      <li key={language.exams}>
        <Card
          header={language.exams}
        >
        </Card>
      </li>
      <li key={language.record}>
        <Card
          header={language.record}
        >
        </Card>
      </li>
    </ul>
  )
}

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedLanguage: 'EU',
      repos: null,
      error: null,
      loading: true,
      profile: false
    }

    this.updateProfile = this.updateProfile.bind(this)
  }

  componentDidMount () {
    var { repos, selectedLanguage } = this.props
    this.setState({
      selectedLanguage,
      repos,
      error: null,
      loading: false,
      profile: false
    })
  }

  updateProfile (profile) {
    this.setState({
      error: null,
      profile: true
    })
  }

  render() {
    const { selectedLanguage, repos, error } = this.props
    const { profile } = this.state

    if (profile === true) {
      return (
        <React.Fragment>
          {repos && <Profile repos={repos} selectedLanguage={selectedLanguage} />}
        </React.Fragment>
      )
    }

    return (
      <React.Fragment>
        {repos && <ReposGrid repos={repos} selected={selectedLanguage} profile={profile} onUpdateProfile={this.updateProfile} />}
      </React.Fragment>
    )
  }
}