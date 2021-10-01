import React from 'react'
import PropTypes from 'prop-types'
import Card from './Card'
import { fetchLanguageRepos } from '../utils/api'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import { deepOrange, deepPurple } from '@material-ui/core/colors'

function ProfileList ({ repos, selected, onHandlePassChanged }) {
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
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <h3> {language.name} </h3>
          </Grid>
          <Grid item xs={12} sm={6}>
            <p> Julen Clarke </p>
          </Grid>
          <Grid item xs={12} sm={6}>
            <h3> {language.username} </h3>
          </Grid>
          <Grid item xs={12} sm={6}>
            <p> jclarke001 </p>
          </Grid>
          <Grid item xs={12} sm={6}>
            <h3> {language.email} </h3>
          </Grid>
          <Grid item xs={12} sm={6}>
            <p> jclarke001@ikasle.ehu.eus </p>
          </Grid>
          <Grid item xs={12} sm={6}>
            <h3> {language.password} </h3>
          </Grid>
          <Grid item xs={6} sm={3}>
            <TextField
                variant="outlined"
                fullWidth
                name="password"
                label={language.password}
                type="password"
                id="password"
                autoComplete="current-password"
            >
            </TextField>
          </Grid>
          <Grid item xs={6} sm={3}>
            <button
              className='btn dark-btn'
              type='submit'
              onClick={() => {onHandlePassChanged()}}
            >
              {language.changepass}
            </button>
          </Grid>
        </Grid>
      </Card>
    </div>
  )
}

function ProfileListPassChanged ({ repos, selected }) {
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
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <h3> {language.name} </h3>
          </Grid>
          <Grid item xs={12} sm={6}>
            <p> Julen Clarke </p>
          </Grid>
          <Grid item xs={12} sm={6}>
            <h3> {language.username} </h3>
          </Grid>
          <Grid item xs={12} sm={6}>
            <p> jclarke001 </p>
          </Grid>
          <Grid item xs={12} sm={6}>
            <h3> {language.email} </h3>
          </Grid>
          <Grid item xs={12} sm={6}>
            <p> jclarke001@ikasle.ehu.eus </p>
          </Grid>
          <Grid item xs={12} sm={6}>
            <h3> {language.password} </h3>
          </Grid>
          <Grid item xs={12} sm={6}>
          {/*Add more styling.*/}
            <p> {language.passchangesuccess} </p>
          </Grid>
        </Grid>
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
      passchanged: false
    }

    this.handlePassChanged = this.handlePassChanged.bind(this)
  }

  handlePassChanged () {
    this.setState({
      passchanged: true
    })
  }

  render() {
    const { selectedLanguage, repos, error } = this.props

    const { passchanged } = this.state

    if (passchanged === true) {
      return (
      <React.Fragment>
          <br />
          <br />
          {repos && <ProfileListPassChanged repos={repos} selected={selectedLanguage} />}
      </React.Fragment>
      )
    }

    return (
      <React.Fragment>
          <br />
          <br />
          {repos && <ProfileList repos={repos} selected={selectedLanguage} onHandlePassChanged={this.handlePassChanged} />}
      </React.Fragment>
    )
  }
}