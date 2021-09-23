import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Login from './components/Login'
import Nav from './components/Nav'
import SignInSide from './components/SignInSide'
import NewDashboard from './components/NewDashboard'
import Album from './components/Album'
import Dashboard from './components/Dashboard'
import Profile from './components/Profile'
import DrawerPage from './components/DrawerPage'
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
import { mainListItems, secondaryListItems } from './components/listItems'
import Chart from './components/Chart'
import Deposits from './components/Deposits'
import Orders from './components/Orders'
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Drawer from '@mui/material/Drawer';

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

// const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
//   ({ theme, open }) => ({
//     '& .MuiDrawer-paper': {
//       position: 'relative',
//       whiteSpace: 'nowrap',
//       width: drawerWidth,
//       transition: theme.transitions.create('width', {
//         easing: theme.transitions.easing.sharp,
//         duration: theme.transitions.duration.enteringScreen,
//       }),
//       boxSizing: 'border-box',
//       ...(!open && {
//         overflowX: 'hidden',
//         transition: theme.transitions.create('width', {
//           easing: theme.transitions.easing.sharp,
//           duration: theme.transitions.duration.leavingScreen,
//         }),
//         width: theme.spacing(7),
//         [theme.breakpoints.up('sm')]: {
//           width: theme.spacing(9),
//         },
//       }),
//     },
//   }),
// );

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

// function LanguagesNav ({ selected, onUpdateLanguage}) {
//   const languages = ['EU', 'ES', 'EN']

//   return (
//     <ThemeProvider theme={mdTheme}>
//       <Box sx={{ display: 'flex' }}>
//         <CssBaseline />
//         <AppBar position="static">
//           <Toolbar>
//             <Typography
//               component="h1"
//               variant="h6"
//               color="inherit"
//               noWrap
//               sx={{ flexGrow: 1 }}
//             >
//               <Link
//                 to={{
//                   pathname: '/',
//                   search: `?lang=${selected}`
//                 }}
//                 style={{
//                   color: 'rgb(255, 255, 255)',
//                   textDecoration: 'none',
//                 }}
//               >
//                 <strong>GAUR 2.0</strong>
//               </Link>
//             </Typography>
//             <ul className='flex-center'>
//               {languages.map((language) => (
//                 <Link key={language}
//                   to={{
//                     search: `?lang=${language}`
//                   }}
//                   style={{
//                     color: 'rgb(255, 255, 255)',
//                     textDecoration: 'none'
//                   }}
//                 >
//                   <li key={language}>
//                     <button
//                       className='btn-clear nav-link'
//                       style={language === selected ? { color: 'rgb(0, 128, 0)' } : null }
//                       onClick={() => onUpdateLanguage(language)}>
//                       {language}
//                     </button>
//                   </li>
//                 </Link>
//               ))}
//             </ul>
//           </Toolbar>
//         </AppBar>
//       </Box>
//     </ThemeProvider>
//   );
// }

// LanguagesNav.propTypes = {
//   selected: PropTypes.string.isRequired,
//   onUpdateLanguage: PropTypes.func.isRequired
// }

function LanguagesNav ({ selected, onUpdateLanguage}) {
  const languages = ['EU', 'ES', 'EN']

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
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
                <strong>GAUR 2.0</strong>
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
                      style={language === selected ? { color: 'rgb(0, 128, 0)' } : null }
                      onClick={() => onUpdateLanguage(language)}>
                      {language}
                    </button>
                  </li>
                </Link>
              ))}
            </ul>
            <Nav />
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
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Box>
    </ThemeProvider>
  );
}

// LanguagesNavLogged.propTypes = {
//   selected: PropTypes.string.isRequired,
//   onUpdateLanguage: PropTypes.func.isRequired
// }

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

  render() {
    const { selectedLanguage, repos, error, loggedin } = this.state

    // if (loggedin === false) {
      // return (
      //   <Router>
      //     <div className='container'>
      //       <LanguagesNav
      //         selected={selectedLanguage}
      //         onUpdateLanguage={this.updateLanguage}
      //       />
      //       <Route
      //         exact path='/'
      //         render={(props) => (
      //           <Login
      //             repos={repos}
      //             selectedLanguage={selectedLanguage}
      //             loggedin={this.handler}
      //           />
      //         )}
      //       />
      //       <Route
      //         path='/dashboard'
      //         render={(props) => (
      //           <Dashboard
      //             repos={repos}
      //             selectedLanguage={selectedLanguage}
      //           />
      //         )}
      //       />
      //       <Route
      //         path='/profile'
      //         render={(props) => (
      //           <Profile
      //             repos={repos}
      //             selectedLanguage={selectedLanguage}
      //           />
      //         )}
      //       />
      //       <Route path='/newdashboard'>
      //           <DrawerPage />
      //       </Route>
      //     </div>
      //   </Router>
      // )
    // } else {
      return (
        <Router>
          <div className='container'>
            <LanguagesNav
              selected={selectedLanguage}
              onUpdateLanguage={this.updateLanguage}
            />
            <Main open={open}>
              <DrawerHeader />
              <Route
                exact path='/'
                render={(props) => (
                  <Login
                    repos={repos}
                    selectedLanguage={selectedLanguage}
                    loggedin={this.handler}
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
                  <DrawerPage />
              </Route>
            </Main>
          </div>
        </Router>
      )
    // }
  }
}

ReactDOM.render(
  // Creates a React Element:
  <App />,
  // Render the element to:
  document.getElementById('app')
)