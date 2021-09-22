import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Login from './components/Login'
import SignInSide from './components/SignInSide'
import NewDashboard from './components/NewDashboard'
import Dashboard from './components/Dashboard'
import Profile from './components/Profile'
import PropTypes from 'prop-types'
import languagesdata from './languagesdata.json'
import { fetchLanguageRepos } from './utils/api'
import {BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { styled, createTheme, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import MuiDrawer from '@mui/material/Drawer'
import Box from '@mui/material/Box'
import MuiAppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import Badge from '@mui/material/Badge'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import MenuIcon from '@mui/icons-material/Menu'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import NotificationsIcon from '@mui/icons-material/Notifications'
import { mainListItems, secondaryListItems } from './components/listItems'
import Chart from './components/Chart'
import Deposits from './components/Deposits'
import Orders from './components/Orders'

// Component is concerned about State, Lifecycle and UI
// State
// Lifecycle - fetching data from thee API or
// doing some event when the component is added to the DOM itself.
// UI - render()
// Babel converts JSX to regular Javascript

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

const mdTheme = createTheme({
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

function LanguagesNav ({ selected, onUpdateLanguage}) {
  const languages = ['EU', 'ES', 'EN']

  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="static">
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              <Link
                to={{
                  pathname: '/',
                  search: `?lang=${selected}`
                }}
                style={{
                  color: 'rgb(255, 255, 255)',
                  textDecoration: 'none',
                }}
              >
                GAUR 2.0
              </Link>
            </Typography>
            <ul className='flex-center'>
              {languages.map((language) => (
                <Link key={language}
                  to={{
                    search: `?lang=${language}`
                  }}
                  style={{ textDecoration: 'none' }}
                >
                  <li key={language}>
                    <button
                      className='btn-clear nav-link'
                      style={language === selected ? { color: 'rgb(255, 255, 255)' } : null }
                      onClick={() => onUpdateLanguage(language)}>
                      {language}
                    </button>
                  </li>
                </Link>
              ))}
            </ul>
          </Toolbar>
        </AppBar>
       {/* <Drawer variant="permanent" open={false}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
        </Drawer>*/}

    {/*<div >
      <Link
        to={{
          pathname: '/',
          search: `?lang=${selected}`
        }}
      >
        <h1 className='center-text header-lg'>
          GAUR 2.0
        </h1>
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


      </Box>
    </ThemeProvider>
  );
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
          {/*<Route exact path='/'>
              <SignInSide />
          </Route>*/}
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
          <Route path='/newdashboard'>
              <NewDashboard />
          </Route>
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