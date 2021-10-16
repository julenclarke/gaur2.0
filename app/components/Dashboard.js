import React from 'react'
import PropTypes from 'prop-types'
import { fetchLanguageRepos } from '../utils/api'
import Profile from './Profile'
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

function ReposGrid ({ repos, selected }) {
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
                  image="https://raw.githubusercontent.com/julenclarke/gaur2.0/master/app/img/dashprofile.png"
                  alt="random"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {language.personalinfo}
                  </Typography>
                  <Typography>
                    {language.personalinfodescription}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
          <Grid item key={language.record} xs={12} sm={6} md={4}>
            <Link
              to={{
                pathname: '/record',
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
                  image="https://raw.githubusercontent.com/julenclarke/gaur2.0/master/app/img/dashrecord.png"
                  alt="random"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {language.record}
                  </Typography>
                  <Typography>
                    {language.recorddescription}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
          <Grid item key={language.careers} xs={12} sm={6} md={4}>
            <Link
              to={{
                pathname: '/careers',
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
                  image="https://raw.githubusercontent.com/julenclarke/gaur2.0/master/app/img/dashcareers.png"
                  alt="random"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {language.careers}
                  </Typography>
                  <Typography>
                    {language.careersdescription}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
          <Grid item key={language.census} xs={12} sm={6} md={4}>
            <Link
              to={{
                pathname: '/census',
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
                  image="https://raw.githubusercontent.com/julenclarke/gaur2.0/master/app/img/dashcensus.png"
                  alt="random"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {language.census}
                  </Typography>
                  <Typography>
                    {language.censusdescription}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
          <Grid item key={language.sms} xs={12} sm={6} md={4}>
            <Link
              to={{
                pathname: '/sms',
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
                  image="https://raw.githubusercontent.com/julenclarke/gaur2.0/master/app/img/dashsms.png"
                  alt="random"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {language.sms}
                  </Typography>
                  <Typography>
                    {language.smsdescription}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
          <Grid item key={language.tuitions} xs={12} sm={6} md={4}>
            <Link
              to={{
                pathname: '/tuitions',
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
                  image="https://raw.githubusercontent.com/julenclarke/gaur2.0/master/app/img/dashtuition.png"
                  alt="random"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {language.tuitions}
                  </Typography>
                  <Typography>
                    {language.tuitionsdescription}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
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
                image="https://raw.githubusercontent.com/julenclarke/gaur2.0/master/app/img/lime.png"
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
                image="https://raw.githubusercontent.com/julenclarke/gaur2.0/master/app/img/lime.png"
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
                image="https://raw.githubusercontent.com/julenclarke/gaur2.0/master/app/img/lime.png"
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