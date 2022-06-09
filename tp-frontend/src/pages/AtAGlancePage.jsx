import {
  Box,
  Button,
  Card, CardActions,
  CardContent, CardHeader,
  Container,
  createTheme,
  CssBaseline,
  Grid,
  Typography,
} from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { Link } from "react-router-dom";
import map from '../assets/map.svg'

const theme = createTheme({
  typography: {
    fontFamily: [
      'Fira Sans',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif'
    ].join(','),
  }
});

export default function AtAGlancePage() {
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="lg">
        <CssBaseline />
        <Typography sx={{mt:3}} component='h4' variant='h4'>
          At-a-glance
        </Typography>
        <Grid container spacing={2} sx={{mt:3}}>
          <Grid item xs={12}>
            <img src={map}/>
          </Grid>
          <Grid item xs={3}>
            <Link to='/dashboard'>
              <Button
                variant="contained"
                color='primary'
                sx={{
                  color: "#000",
                  background: '#fff',
                  textTransform: "none",
                }}
              >
                Back to dashboard
              </Button>
            </Link>
          </Grid>
          <Grid item xs={6}>
          </Grid>
          <Grid item xs={3}>
            <Link to='/dashboard/prediktor-wizard'>
              <Button
                variant="contained"
                color='primary'
                sx={{
                  textTransform: "none",
                }}
              >
                Start
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}
