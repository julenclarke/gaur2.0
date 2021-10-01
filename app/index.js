import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Login from './components/Login'
import ProfileButton from './components/ProfileButton'
import Dashboard from './components/Dashboard'
import Profile from './components/Profile'
import PropTypes from 'prop-types'
import languagesdata from './languagesdata.json'
import { fetchLanguageRepos } from './utils/api'
import {BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { styled, useTheme, createTheme, ThemeProvider } from '@mui/material/styles'
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
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import HomeIcon from '@mui/icons-material/Home';
import Drawer from '@mui/material/Drawer';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import Record from './components/Record'
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import LanguageIcon from '@mui/icons-material/Language';
import DomainIcon from '@mui/icons-material/Domain';
import LogoutIcon from '@mui/icons-material/Logout';
import Tooltip from '@mui/material/Tooltip';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import Logout from '@mui/icons-material/Logout';

// Component is concerned about State, Lifecycle and UI
// State
// Lifecycle - fetching data from thee API or
// doing some event when the component is added to the DOM itself.
// UI - render()
// Babel converts JSX to regular Javascript

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    padding: -24,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

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

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

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

function Nav ({ selected, onUpdateLanguage}) {
  const languages = ['EU', 'ES', 'EN']

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="static">
          <Toolbar>
            <Typography
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
                <img
                  className="logo"
                  src="https://raw.githubusercontent.com/julenclarke/gaur2.0/master/app/img/logogaur20.png"
                  height="40"
                />
              </Link>
            </Typography>
            <ul className='flex-center'>
              {languages.map((language) => (
                <Link key={language}
                  to={{
                    search: `?lang=${language}`
                  }}
                  style={{
                    color: 'rgb(255, 255, 255)',
                    textDecoration: 'none'
                  }}
                >
                  <li key={language}>
                    <button
                      className='btn-clear nav-link'
                      style={language === selected ? { color: 'rgb(142, 235, 142)' } : null }
                      onClick={() => onUpdateLanguage(language)}>
                      {language}
                    </button>
                  </li>
                </Link>
              ))}
            </ul>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}

Nav.propTypes = {
  selected: PropTypes.string.isRequired,
  onUpdateLanguage: PropTypes.func.isRequired
}

function NavLogged ({ selected, onUpdateLanguage, onLogOut }) {
  var language = {}
  switch (selected) {
    case "EU":
      selected = "EU";
      language  = {
        "dashboard": "Kontrol-panela",
        "studyplan": "Ikasketa-planak",
        "careers": "Lan Mundura Trantsizioa bekak",
        "census": "Errolda",
        "sms": "SMS Zerbitzua",
        "tuitions": "Matrikulak",
        "surveys": "Inkestak",
        "titles": "Tituluak",
        "exams": "Azterketak",
        "record": "Espedientea",
        "personalinfo": "Informazio Pertsonala",
        "logout": "Saioa Itxi",
        "faculty": "Informatika Fakultatea"
      };
      break;
    case "ES":
      selected = "ES";
      language = {
        "dashboard": "Panel de control",
        "studyplan": "Plan de estudios",
        "careers": "Becas a",
        "census": "Censo",
        "sms": "Servicio SMS",
        "tuitions": "Matrículas",
        "surveys": "Encuestas",
        "titles": "Títulos",
        "exams": "Exámenes",
        "record": "Expediente",
        "personalinfo": "Información Personal",
        "logout": "Cerrar Sesión",
        "faculty": "Facultad de Informática"
      };
      break;
    case "EN":
      selected = "EN";
      language = {
        "dashboard": "Dashboard",
        "studyplan": "Study plan",
        "careers": "Careers",
        "census": "Census",
        "sms": "SMS Service",
        "tuitions": "Tuitions",
        "surveys": "Surveys",
        "titles": "Titles",
        "exams": "Exams",
        "record": "Student Record",
        "personalinfo": "Personal Info",
        "logout": "Log Out",
        "faculty": "IT Faculty"
      };
      break;
  }

  const languages = ['EU', 'ES', 'EN']

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const opened = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <AppBar position="fixed" open={open}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
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
                <img
                  className="logo"
                  src="https://raw.githubusercontent.com/julenclarke/gaur2.0/master/app/img/logogaur20.png"
                  height="40"
                />
              </Link>
            </Typography>
            <ul className='flex-center'>
              {languages.map((language) => (
                <Link key={language}
                  to={{
                    search: `?lang=${language}`
                  }}
                  style={{
                    color: 'rgb(255, 255, 255)',
                    textDecoration: 'none'
                  }}
                >
                  <li key={language}>
                    <button
                      className='btn-clear nav-link'
                      style={language === selected ? { color: 'rgb(142, 235, 142)' } : null }
                      onClick={() => onUpdateLanguage(language)}>
                      {language}
                    </button>
                  </li>
                </Link>
              ))}
            </ul>
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
              {/*Tooltip shows info when hovering*/}
              <Tooltip title="Account settings">
                <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
                  {/*<Avatar sx={{ width: 32, height: 32 }}>M</Avatar>*/}
                  <ProfileButton />
                </IconButton>
              </Tooltip>
            </Box>
            <Menu
              anchorEl={anchorEl}
              open={opened}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: 'visible',
                  filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                  mt: 1.5,
                  '& .MuiAvatar-root': {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  '&:before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: 'background.paper',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
              <Link
                to={{
                  pathname: '/profile',
                  search: `?lang=${selected}`
                }}
                style={{
                  color: 'rgba(0, 0, 0, 0.87)',
                  textDecoration: 'none'
                }}
              >
                <MenuItem>
                  <Avatar /> {language.personalinfo}
                </MenuItem>
              </Link>
              <Divider />
              <MenuItem onClick={() => onLogOut()} >
                <ListItemIcon >
                  <Logout fontSize="small" />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            <Link
                to={{
                  pathname: '/',
                  search: `?lang=${selected}`
                }}
                style={{
                  color: 'rgba(0, 0, 0, 0.87)',
                  textDecoration: 'none'
                }}
              >
              <ListItem button key={language.dashboard}>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary={language.dashboard} />
              </ListItem>
            </Link>
            <Link
              to={{
                pathname: '/profile',
                search: `?lang=${selected}`
              }}
              style={{
                color: 'rgba(0, 0, 0, 0.87)',
                textDecoration: 'none'
              }}
            >
              <ListItem button key={language.personalinfo}>
                <ListItemIcon>
                  <PermIdentityIcon />
                </ListItemIcon>
                <ListItemText primary={language.personalinfo} />
              </ListItem>
            </Link>
            <Link
              to={{
                pathname: '/record',
                search: `?lang=${selected}`
              }}
              style={{
                color: 'rgba(0, 0, 0, 0.87)',
                textDecoration: 'none'
              }}
            >
              <ListItem button key={language.record}>
                <ListItemIcon>
                  <FormatAlignJustifyIcon />
                </ListItemIcon>
                <ListItemText primary={language.record} />
              </ListItem>
            </Link>
            <Link
              to={{
                pathname: '/record',
                search: `?lang=${selected}`
              }}
              style={{
                color: 'rgba(0, 0, 0, 0.87)',
                textDecoration: 'none'
              }}
            >
              <ListItem button key={language.careers}>
                <ListItemIcon>
                  <FormatAlignJustifyIcon />
                </ListItemIcon>
                <ListItemText primary={language.careers} />
              </ListItem>
            </Link>
            <Link
              to={{
                pathname: '/record',
                search: `?lang=${selected}`
              }}
              style={{
                color: 'rgba(0, 0, 0, 0.87)',
                textDecoration: 'none'
              }}
            >
              <ListItem button key={language.census}>
                <ListItemIcon>
                  <FormatAlignJustifyIcon />
                </ListItemIcon>
                <ListItemText primary={language.census} />
              </ListItem>
            </Link>
            <Link
              to={{
                pathname: '/record',
                search: `?lang=${selected}`
              }}
              style={{
                color: 'rgba(0, 0, 0, 0.87)',
                textDecoration: 'none'
              }}
            >
              <ListItem button key={language.sms}>
                <ListItemIcon>
                  <FormatAlignJustifyIcon />
                </ListItemIcon>
                <ListItemText primary={language.sms} />
              </ListItem>
            </Link>
            <Link
              to={{
                pathname: '/record',
                search: `?lang=${selected}`
              }}
              style={{
                color: 'rgba(0, 0, 0, 0.87)',
                textDecoration: 'none'
              }}
            >
              <ListItem button key={language.tuitions}>
                <ListItemIcon>
                  <FormatAlignJustifyIcon />
                </ListItemIcon>
                <ListItemText primary={language.tuitions} />
              </ListItem>
            </Link>
            <Link
              to={{
                pathname: '/record',
                search: `?lang=${selected}`
              }}
              style={{
                color: 'rgba(0, 0, 0, 0.87)',
                textDecoration: 'none'
              }}
            >
              <ListItem button key={language.titles}>
                <ListItemIcon>
                  <FormatAlignJustifyIcon />
                </ListItemIcon>
                <ListItemText primary={language.titles} />
              </ListItem>
            </Link>
            <Link
              to={{
                pathname: '/record',
                search: `?lang=${selected}`
              }}
              style={{
                color: 'rgba(0, 0, 0, 0.87)',
                textDecoration: 'none'
              }}
            >
              <ListItem button key={language.exams}>
                <ListItemIcon>
                  <FormatAlignJustifyIcon />
                </ListItemIcon>
                <ListItemText primary={language.exams} />
              </ListItem>
            </Link>
          </List>
          <Divider />
          <List>
            <a href="https://www.ehu.eus/en/en-home" target="_blank">
              <ListItem button key="ehu.eus">
                  <ListItemIcon>
                    <LanguageIcon />
                  </ListItemIcon>
                  <ListItemText primary="ehu.eus" />
                </ListItem>
            </a>
            <a href="https://www.ehu.eus/en/web/informatika-fakultatea" target="_blank">
              <ListItem button key="ehu.eus/if">
                <ListItemIcon>
                  <DomainIcon />
                </ListItemIcon>
                <ListItemText primary={language.faculty} />
              </ListItem>
            </a>
            <Divider />
            <Link
              to={{
                pathname: '/',
                search: `?lang=${selected}`
              }}
              style={{
                color: 'rgba(0, 0, 0, 0.87)',
                textDecoration: 'none'
              }}
              onClick={() => onLogOut()}
            >
              <ListItem button key={language.logout}>
                <ListItemIcon>
                  <LogoutIcon />
                </ListItemIcon>
                <ListItemText primary={language.logout} />
              </ListItem>
            </Link>
          </List>
        </Drawer>
      </Box>
    </ThemeProvider>
  );
}

NavLogged.propTypes = {
  selected: PropTypes.string.isRequired,
  onUpdateLanguage: PropTypes.func.isRequired
}

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedLanguage: 'EU',
      repos: null,
      error: null,
      loggedin: false
    }

    this.updateLanguage = this.updateLanguage.bind(this)
    this.logIn = this.logIn.bind(this)
    this.logOut = this.logOut.bind(this)
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

  logIn() {
    this.setState({
      loggedin: true
    })
  }

  logOut() {
    this.setState({
      loggedin: false
    })
  }

  render() {
    const { selectedLanguage, repos, error, loggedin } = this.state

    if (loggedin === false) {
      return (
        <Router>
          <div className='container'>
            <Nav
              selected={selectedLanguage}
              onUpdateLanguage={this.updateLanguage}
            />
            <Route
              path='/'
              render={(props) => (
                <Login
                  repos={repos}
                  selectedLanguage={selectedLanguage}
                  logIn={this.logIn}
                />
              )}
            />
            <Route
              path='/record'
              render={(props) => (
                <Record
                  repos={repos}
                  selectedLanguage={selectedLanguage}
                />
              )}
            />
          </div>
        </Router>
      )
    } else {
      return (
        <Router>
          <div className='container'>
            <NavLogged
              selected={selectedLanguage}
              onUpdateLanguage={this.updateLanguage}
              onLogOut={this.logOut}
            />
            <Main open={open}>
              <DrawerHeader />
              <Route
                exact path='/'
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
              <Route
                path='/record'
                render={(props) => (
                  <Record
                    repos={repos}
                    selectedLanguage={selectedLanguage}
                  />
                )}
              />
            </Main>
          </div>
        </Router>
      )
    }
  }
}

ReactDOM.render(
  // Creates a React Element:
  <App />,
  // Render the element to:
  document.getElementById('app')
)