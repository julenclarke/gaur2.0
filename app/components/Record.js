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
import { mainListItems, secondaryListItems } from './listItems';
import Chart from './Chart';
import Deposits from './Deposits';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import {useState,useEffect} from 'react'

function createData(id, subject, year, group, type, credits, grade, qualificationdate, call) {
  return { id, subject, year, group, type, credits, grade, qualificationdate, call };
}

  const rows = [
    createData(
      0,
      '26020 - Datu-baseak',
      '2014/15',
      '61',
      'Nahitaezkoa',
      '6.0',
      'Bikain',
      '10.00',
      '2015/06/09',
      '1',
    ),
  ];

function preventDefault(event) {
  event.preventDefault();
}

const mdTheme = createTheme();

function RecordContent({ repos, selected }) {
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
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              {/* Recent Orders */}
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                  {/*It shows the content*/}
                  <Title>{language.record}</Title>
                  <Table size="small">
                    <TableHead>
                        <TableRow>
                          {/*It won't show the content*/}
                          <TableCell>{language.subject}</TableCell>
                          <TableCell>{language.year}</TableCell>
                          <TableCell>{language.group}</TableCell>
                          <TableCell>{language.type}</TableCell>
                          <TableCell>{language.credits}</TableCell>
                          <TableCell>{language.grade}</TableCell>
                          <TableCell>{language.qualificationdate}</TableCell>
                          <TableCell>{language.call}</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <TableRow key={row.id}>
                          <TableCell>{row.subject}</TableCell>
                          <TableCell>{row.year}</TableCell>
                          <TableCell>{row.group}</TableCell>
                          <TableCell>{row.type}</TableCell>
                          <TableCell>{row.credits}</TableCell>
                          <TableCell>{row.grade}</TableCell>
                          <TableCell>{row.qualificationdate}</TableCell>
                          <TableCell>{row.call}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
{/*                  <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
                    See more orders
                  </Link>*/}
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default class Record extends React.Component {
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
          {repos && <RecordContent repos={repos} selected={selectedLanguage} />}
      </React.Fragment>
    )
  }
}