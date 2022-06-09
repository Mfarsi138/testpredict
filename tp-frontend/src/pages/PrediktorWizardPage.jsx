import {
  Box,
  Button,
  Card, CardActions,
  CardContent, CardHeader, Checkbox,
  Container,
  createTheme,
  CssBaseline, FormControlLabel, FormGroup,
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

export default function PrediktorWizardPage() {
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="lg">
        <CssBaseline />
        <Typography sx={{mt:3}} component='h4' variant='h4'>
          Prediktor™ Wizard (Readme)
        </Typography>
        <Grid container spacing={2} sx={{mt:3}}>
          <Grid item xs={12} sx={{minHeight:"500px"}}>
            [DESCRIPTION]
          </Grid>
          <Grid item xs={2}>
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
          <Grid item xs={3}>
          </Grid>
          <Grid item xs={4}>
            <FormGroup>
              <FormControlLabel control={<Checkbox />} label="I am now ready to take the Prediktor™ Wizard" />
            </FormGroup>
          </Grid>
          <Grid item xs={3}>
            <Link to='/dashboard/prediktor-wizard-2'>
              <Button
                variant="contained"
                color='primary'
                sx={{
                  textTransform: "none",
                }}
              >
                Start Prediktor™ Wizard
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}
