import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import {useState,useEffect} from 'react'
import Button from '@mui/material/Button';

function preventDefault(event) {
  event.preventDefault();
}

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

function TuitionContent({ repos, selected }) {
  const [language, setLanguage] = useState({})
    useEffect(() => {
      switch (selected) {
        case "EU":
          setLanguage(repos[0].terms)
          break;
        case "ES":
          setLanguage(repos[1].terms)
          break;
        case "EN":
          setLanguage(repos[2].terms)
          break;
        default:
          setLanguage({})
      }
    }, [selected])

  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              <Grid item md={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                  <Title>{language.tuitions}</Title>
                  <h4>1. {language.tuition}</h4>
                  <Table size="small">
                    <TableHead>
                        <TableRow>
                          <TableCell>{language.idnumber}</TableCell>
                          <TableCell>{language.tuitionyear}</TableCell>
                          <TableCell>{language.faculty}</TableCell>
                          <TableCell>{language.degree}</TableCell>
                          <TableCell>{language.status}</TableCell>
                          <TableCell>{language.whenopened}</TableCell>
                          <TableCell>{language.lasttuition}</TableCell>
                          <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                          <TableCell>98765433A</TableCell>
                          <TableCell>2021/22</TableCell>
                          <TableCell>{language.itfaculty}</TableCell>
                          <TableCell>{language.informaticsengineering}</TableCell>
                          <TableCell>{language.opened}</TableCell>
                          <TableCell>2014/09/03</TableCell>
                          <TableCell>2021/10/07</TableCell>
                          <TableCell>
                            <Button
                              variant="contained"
                              onClick={()=> window.open("https://gestion-alumnos.ehu.es/tmp/matr0010_368179_20211016_170709_043857.pdf", "_blank")}
                            >
                              {language.print}
                            </Button>
                          </TableCell>
                        </TableRow>
                    </TableBody>
                  </Table>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default class Tuition extends React.Component {
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
          {repos && <TuitionContent repos={repos} selected={selectedLanguage} />}
      </React.Fragment>
    )
  }
}