import React from 'react'
import PropTypes from 'prop-types'
import Loading from './Loading'
import { fetchLanguageRepos } from '../utils/api'
import Profile from './Profile'
import Nav from './Nav'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

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
    <ThemeProvider theme={theme}>
      <Container sx={{ py: 8 }} maxWidth="md">
        {/* End hero unit */}
        <Grid container spacing={4}>
          <Grid item key={language.personalinfo} xs={12} sm={6} md={4}>
            <Link
              to={{
                pathname: '/profile',
                search: `?lang=${selected}`
              }}
              style={{ textDecoration: 'none' }}
            >
              <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    // 16:9
                    maxHeight: 150,
                  }}
                  image="https://source.unsplash.com/random"
                  alt="random"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {language.personalinfo}
                  </Typography>
                  <Typography>
                    {language.personalinfo}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
          <Grid item key={language.record} xs={12} sm={6} md={4}>
            <Card
              sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
            >
              <CardMedia
                component="img"
                sx={{
                  // 16:9
                  maxHeight: 150,
                }}
                image="https://source.unsplash.com/random"
                alt="random"
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {language.record}
                </Typography>
                <Typography>
                  {language.record}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item key={language.careers} xs={12} sm={6} md={4}>
            <Card
              sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
            >
              <CardMedia
                component="img"
                sx={{
                  // 16:9
                  maxHeight: 150,
                }}
                image="https://source.unsplash.com/random"
                alt="random"
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {language.careers}
                </Typography>
                <Typography>
                  {language.careers}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item key={language.census} xs={12} sm={6} md={4}>
            <Card
              sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
            >
              <CardMedia
                component="img"
                sx={{
                  // 16:9
                  maxHeight: 150,
                }}
                image="https://source.unsplash.com/random"
                alt="random"
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {language.census}
                </Typography>
                <Typography>
                  {language.census}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item key={language.sms} xs={12} sm={6} md={4}>
            <Card
              sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
            >
              <CardMedia
                component="img"
                sx={{
                  // 16:9
                  maxHeight: 150,
                }}
                image="https://source.unsplash.com/random"
                alt="random"
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {language.sms}
                </Typography>
                <Typography>
                  {language.sms}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item key={language.tuitions} xs={12} sm={6} md={4}>
            <Card
              sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
            >
              <CardMedia
                component="img"
                sx={{
                  // 16:9
                  maxHeight: 150,
                }}
                image="https://source.unsplash.com/random"
                alt="random"
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {language.tuitions}
                </Typography>
                <Typography>
                  {language.tuitions}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item key={language.surveys} xs={12} sm={6} md={4}>
            <Card
              sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
            >
              <CardMedia
                component="img"
                sx={{
                  // 16:9
                  maxHeight: 150,
                }}
                image="https://source.unsplash.com/random"
                alt="random"
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {language.surveys}
                </Typography>
                <Typography>
                  {language.surveys}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item key={language.titles} xs={12} sm={6} md={4}>
            <Card
              sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
            >
              <CardMedia
                component="img"
                sx={{
                  // 16:9
                  maxHeight: 150,
                }}
                image="https://source.unsplash.com/random"
                alt="random"
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {language.titles}
                </Typography>
                <Typography>
                  {language.titles}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item key={language.exams} xs={12} sm={6} md={4}>
            <Card
              sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
            >
              <CardMedia
                component="img"
                sx={{
                  // 16:9
                  maxHeight: 150,
                }}
                image="https://source.unsplash.com/random"
                alt="random"
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {language.exams}
                </Typography>
                <Typography>
                  {language.exams}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  )
}

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedLanguage: 'EU',
      repos: null,
      error: null
    }

  }

  render() {
    const { selectedLanguage, repos, error } = this.props

    return (
      <React.Fragment>
        {repos && <ReposGrid repos={repos} selected={selectedLanguage} />}
      </React.Fragment>
    )
  }
}