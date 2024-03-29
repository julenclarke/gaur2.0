import React from 'react'
import PropTypes from 'prop-types'
import languagesdata from '../languagesdata.json'
import { fetchLanguageRepos } from '../utils/api'
import Dashboard from './Dashboard'
import {BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
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

function LoginForm ({ repos, selected, onLogIn }) {
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
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://loginsso.ehu.es/login/images/forest.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
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
                label={language.username}
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label={language.password}
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label={language.remember}
              />
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
                  onClick={() => {onLogIn()}}
                >
                  {language.login}
                </Button>
              </Link>
              <Grid container>
                <Grid item xs>
                  <Link
                    to={{
                      pathname: '/forgotpass',
                      search: `?lang=${selected}`
                    }} variant="body2">
                    {language.forgot}
                  </Link>
                </Grid>
                <Grid item>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
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

    this.logIn = this.logIn.bind(this)
  }

  logIn() {
    this.props.logIn();
  }

  render() {
    const { selectedLanguage, repos, error, logIn } = this.props

    return (
      <React.Fragment>

        {error && <p>{error}</p>}

        {repos && <LoginForm repos={repos} selected={selectedLanguage} onLogIn={this.logIn}/>}

      </React.Fragment>
    )
  }
}