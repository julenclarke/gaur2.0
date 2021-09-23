import React from 'react'
import PropTypes from 'prop-types'
import languagesdata from '../languagesdata.json'
import { fetchLanguageRepos } from '../utils/api'
// import LanguagesNav from './LanguagesNav'
import Dashboard from './Dashboard'
import {BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
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

function LoginForm ({ repos, selected }) {
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
{/*            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>

              <LockOutlinedIcon />
            </Avatar>*/}
{/*            <Typography component="h1" variant="h5">
              GAUR 2.0
            </Typography>*/}
            {/*<div >
              <Link
                to={{
                  pathname: '/',
                  search: `?lang=${selected}`
                }}
              >
              </Link>
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
            </div>*/}
            {/*<LanguagesNav selectedLanguage={selected} />*/}
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
                  pathname: '/dashboard',
                  search: `?lang=${selected}`
                }}
              >
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  // onClick={() => {this.props.logIn}}
                >
                  {language.login}
                </Button>
              </Link>
              <Grid container>
                <Grid item xs>
                  <Link
                    to={{
                      pathname: '/newdashboard',
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
      error: null,
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
    const { selectedLanguage, repos, error, loggedin } = this.props

    return (
      <React.Fragment>

{/*        <LanguagesNav
          selected={selectedLanguage}
          onUpdateLanguage={this.updateLanguage}
        />*/}

        {error && <p>{error}</p>}

        {repos && <LoginForm repos={repos} selected={selectedLanguage}/>}

      </React.Fragment>
    )
  }
}