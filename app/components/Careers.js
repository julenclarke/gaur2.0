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

function PersonalData({ repos, selected, activeStep, onHandleNext }) {
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

  const steps = [`${language.personalinfo}`, `${language.accountnumber}`, `${language.review}`];

  const options = ['DNI', 'NIF'];

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
      <CssBaseline />
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            {language.careers}
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <Typography variant="h6" gutterBottom>
            {language.personalinfo}
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={6} sm={3}>
              <h4> {language.idnumber} </h4>
            </Grid>
            <Grid item xs={6} sm={3}>
              <p> 98765433A </p>
            </Grid>
            <Grid item xs={6} sm={3}>
              <h4> {language.dateofbirth} </h4>
            </Grid>
            <Grid item xs={6} sm={3}>
              <p> {language.birthday} </p>
            </Grid>
            <Grid item xs={6} sm={3}>
              <h4> {language.name} </h4>
            </Grid>
            <Grid item xs={6} sm={3}>
              <p> Julen </p>
            </Grid>
            <Grid item xs={6} sm={3}>
              <h4> {language.surname} </h4>
            </Grid>
            <Grid item xs={6} sm={3}>
              <p> Clarke </p>
            </Grid>
            <Grid item xs={3} sm={3}>
              <h4> {language.address} </h4>
            </Grid>
            <Grid item xs={9} sm={9}>
              <p> Manuel Lardizabal Ibilbidea, 1, 20018 Donostia, Gipuzkoa </p>
            </Grid>
          </Grid>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button
              variant="contained"
              onClick={() => {onHandleNext()}}
              sx={{ mt: 3, ml: 1 }}
            >
              {language.next}
            </Button>
          </Box>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}

function PaymentForm ({ repos, selected, activeStep, onHandleNext, onHandleBack }) {
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

  const steps = [`${language.personalinfo}`, `${language.accountnumber}`, `${language.review}`];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            {language.careers}
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <Typography variant="h6" gutterBottom>
            {language.accountnumber}
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={9} md={9}>
              <TextField
                required
                id="cardName"
                label="IBAN"
                fullWidth
                autoComplete="cc-name"
                variant="standard"
                helperText={language.sameperson}
              />
            </Grid>
          </Grid>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button onClick={() => {onHandleBack()}} sx={{ mt: 3, ml: 1 }}>
              {language.back}
            </Button>
            <Button
              variant="contained"
              onClick={() => {onHandleNext()}}
              sx={{ mt: 3, ml: 1 }}
            >
              {language.next}
            </Button>
          </Box>
        </Paper>
      </Container>
    </ThemeProvider>
  )
}

function Review({ repos, selected, activeStep, onHandleNext, onHandleBack }) {
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

  const steps = [`${language.personalinfo}`, `${language.accountnumber}`, `${language.review}`];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            {language.careers}
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <Typography variant="h6" gutterBottom>
            {language.review}
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                {language.address}
              </Typography>
              <Typography gutterBottom>Julen Clarke</Typography>
              <Typography gutterBottom>Manuel Lardizabal Ibilbidea, 1, 20018 Donostia, Gipuzkoa</Typography>
            </Grid>
            <Grid item container direction="column" xs={12} sm={6}>
              <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                {language.accountnumber} (IBAN)
              </Typography>
              <Typography gutterBottom>ESXX XXXX XXXX XXXX XXXX XXXX</Typography>
            </Grid>
          </Grid>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button onClick={() => {onHandleBack()}} sx={{ mt: 3, ml: 1 }}>
              {language.back}
            </Button>
            <Button
              variant="contained"
              onClick={() => {onHandleNext()}}
              sx={{ mt: 3, ml: 1 }}
            >
              {language.next}
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

  const steps = [`${language.personalinfo}`, `${language.accountnumber}`, `${language.review}`];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            {language.careers}
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <Typography variant="h5" gutterBottom>
            {language.confirmationmessage}
          </Typography>
          <Typography variant="subtitle1">
            {language.confirmationdescription}
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

export default class Careers extends React.Component {
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
          {repos && <PersonalData repos={repos} selected={selectedLanguage} activeStep={step} onHandleNext={this.handleNext} />}
        </React.Fragment>
      )
    } else if (step === 1) {
      return (
        <React.Fragment>
          {repos && <PaymentForm repos={repos} selected={selectedLanguage} activeStep={step} onHandleNext={this.handleNext} onHandleBack={this.handleBack} />}
        </React.Fragment>
      )
    } else if (step === 2) {
      return (
        <React.Fragment>
          {repos && <Review repos={repos} selected={selectedLanguage} activeStep={step} onHandleNext={this.handleNext} onHandleBack={this.handleBack} />}
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