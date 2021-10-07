import * as React from 'react';
import PropTypes from 'prop-types'
import languagesdata from '../languagesdata.json'
import { fetchLanguageRepos } from '../utils/api'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#333333',
      main: '#000',
      dark: '#000',
      contrastText: '#fff',
    },
    secondary: {
      light: '#000',
      main: '#000',
      dark: '#000',
      contrastText: '#fff',
    },
  },
});

function ResetForm({ repos, selected, onHandleResetPass }) {
  const languages = ['EU', 'ES', 'EN']

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
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <img
            src="https://loginsso.ehu.es/login/images/logo_UPV_peq.png"
          />
          <br/>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label={language.email}
              name="email"
              autoComplete="email"
              autoFocus
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={() => {onHandleResetPass()}}
            >
              {language.resetpass}
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

ResetForm.propTypes = {
  repos: PropTypes.array.isRequired
}

function ResetFormEmailSent({ repos, selected }) {
  const languages = ['EU', 'ES', 'EN']

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
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <img
            src="https://loginsso.ehu.es/login/images/logo_UPV_peq.png"
          />
          <br/>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <p> {language.recoverypass} </p>
            <Link
                to={{
                  pathname: '/',
                  search: `?lang=${selected}`
                }}
              >
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  {language.backtologin}
                </Button>
            </Link>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default class ForgotPass extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedLanguage: 'EU',
      repos: null,
      error: null,
      emailsent: false
    }

    this.handleResetPass = this.handleResetPass.bind(this)
  }

  handleResetPass () {
    this.setState({
      emailsent: true
    })
  }

  render() {
    const { selectedLanguage, repos, error } = this.props

    const { emailsent } = this.state

    if (emailsent === true) {
      return (
      <React.Fragment>

        {error && <p>{error}</p>}

        {repos && <ResetFormEmailSent repos={repos} selected={selectedLanguage} />}

      </React.Fragment>
      )
    }

    return (
      <React.Fragment>

        {error && <p>{error}</p>}

        {repos && <ResetForm repos={repos} selected={selectedLanguage} onHandleResetPass={this.handleResetPass} />}

      </React.Fragment>
    )
  }
}