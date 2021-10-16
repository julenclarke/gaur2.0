import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ButtonGroup from '@mui/material/ButtonGroup';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom'

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

function SmsForm({ repos, selected, activeStep, onHandleNext}) {
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

  const steps = [`${language.sms}`];

  const options = [`${language.basque}`, `${language.spanish}`, `${language.english}`];

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleClick = () => {
    console.info(`You clicked ${options[selectedIndex]}`);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            {language.sms}
          </Typography>
          <br />
          <br />
          <Grid container spacing={3}>
            <Grid item xs={6} md={6}>
              <TextField
                required
                id="phoneNumber"
                label={language.phonenumber}
                fullWidth
                autoComplete="cc-name"
                variant="standard"
              />
            </Grid>
            <Grid item xs={6} sm={6}></Grid>
            <Grid item xs={9} sm={5}>
              <h4> {language.communicationlanguage} </h4>
            </Grid>
            <Grid item xs={6} sm={3}>
              <ButtonGroup variant="text" ref={anchorRef} aria-label="split button">
                <Button
                  sx={{ mt: 1.5 }}
                  size="medium"
                  aria-controls={open ? 'split-button-menu' : undefined}
                  aria-expanded={open ? 'true' : undefined}
                  aria-label="select merge strategy"
                  aria-haspopup="menu"
                  onClick={handleToggle}
                >
                  {options[selectedIndex]}
                  <ArrowDropDownIcon />
                </Button>
              </ButtonGroup>
              <Popper
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                transition
                disablePortal
              >
                {({ TransitionProps, placement }) => (
                  <Grow
                    {...TransitionProps}
                    style={{
                      transformOrigin:
                        placement === 'bottom' ? 'center top' : 'center bottom',
                    }}
                  >
                    <Paper>
                      <ClickAwayListener onClickAway={handleClose}>
                        <MenuList id="split-button-menu">
                          {options.map((option, index) => (
                            <MenuItem
                              key={option}
                              selected={index === selectedIndex}
                              onClick={(event) => handleMenuItemClick(event, index)}
                            >
                              {option}
                            </MenuItem>
                          ))}
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>
            </Grid>
          </Grid>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button
              variant="contained"
              onClick={() => {onHandleNext()}}
              sx={{ mt: 3, ml: 1 }}
            >
              {language.enable}
            </Button>
          </Box>
        </Paper>
      </Container>
    </ThemeProvider>
  )
}

function Final({ repos, selected, activeStep, onHandleNext, onHandleBack }) {
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
      <CssBaseline />
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            {language.sms}
          </Typography>
          <br />
          <br />
          <Typography variant="h5" gutterBottom>
            {language.smsconfirmation}
          </Typography>
          <Typography variant="subtitle1">
            {language.smsconfirmationdescription}
          </Typography>
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
        </Paper>
      </Container>
    </ThemeProvider>
  )
}

export default class Sms extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedLanguage: 'EU',
      repos: null,
      error: null,
      step: 0
    }

    this.handleNext = this.handleNext.bind(this)
    this.handleBack = this.handleBack.bind(this)
  }

  handleNext (state) {
    this.setState((state) => {
      return {step: state.step + 1}
    })
  }

  handleBack (state) {
    this.setState((state) => {
      return {step: state.step - 1}
    })
  }

  render() {
    const { selectedLanguage, repos, error } = this.props

    const { step } = this.state

    if (step === 0) {
      return (
        <React.Fragment>
          {repos && <SmsForm repos={repos} selected={selectedLanguage} activeStep={step} onHandleNext={this.handleNext} />}
        </React.Fragment>
      )
    } else {
      return (
        <React.Fragment>
          {repos && <Final repos={repos} selected={selectedLanguage} activeStep={step} />}
        </React.Fragment>
      )
    }
  }
}