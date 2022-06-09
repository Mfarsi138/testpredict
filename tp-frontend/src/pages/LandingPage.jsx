import {
  Box,
  Button,
  Card,
  CardContent, CardHeader,
  Container,
  createTheme,
  CssBaseline,
  Grid,
  Typography,
} from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { Link } from "react-router-dom";
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
import svg1 from '../assets/mainmenuhead1.svg';
import svg2 from '../assets/mainmenubody1.svg';
import svg3 from '../assets/mainmenubody2.svg';
import svg4 from '../assets/mainmenubody3.svg';

export default function LandingPage() {
  return (
    <ThemeProvider theme={theme}>
      <div className='landing-head'/>
      <Container component="main" maxWidth="lg">
        <CssBaseline />
        <Grid container sx={{my:20 }}>
          <Grid item xs={6} sx={{textAlign:'start', mt: 10}}>
            <Typography component='h5' variant='h5' sx={{fontWeight:1000}}>
              Predict your language test score before you take the test.
            </Typography>
            <Typography component='h5' variant='h6'>
              Save a lot of your time. And a lot of your money.
            </Typography>
            <Link to='/login'>
              <Button
                sx={{mt:3}}
                variant="contained"
                color='primary'
              >
                Sign Up
              </Button>
            </Link>
          </Grid>
        <Grid item xs={6}>
          <img src={svg1} />
        </Grid>
        </Grid>
        <Grid container spacing={2} sx={{my:30}}>
          <Grid xs={3.5} sx={{mt:3}}>
            <img src={svg2}/>
            <Card sx={{borderRadius:4,background: '#277AFF',color:"#FFF", minHeight:'200px'}}>
              <CardHeader sx={{boxShadow:3,background:"#5AA5FF"}} title='Why TestPredikt?'/>
              <CardContent sx={{mb:3, mx:3}}>
                Join our international team of language teaching experts.
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={0.5}></Grid>
          <Grid xs={3.5}>
            <img src={svg3}/>
            <Card sx={{borderRadius:4,background: '#15B79B',color:"#FFF", minHeight:'200px'}}>
              <CardHeader sx={{boxShadow:3,background:"#0D7160"}} title='Why is there a -k in Predikt?'/>
              <CardContent sx={{mb:3, mx:3}}>
                Don’t worry - we’re linguists, and we know how to spell. :D
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={0.5}></Grid>
          <Grid xs={3.5}>
            <img src={svg4}/>
            <Card sx={{borderRadius:4,background: '#3380CC',color:"#FFF", minHeight:'200px'}}>
              <CardHeader sx={{boxShadow:3,background:"#245A90"}} title='Pricing'/>
              <CardContent sx={{mb:3, mx:3}}>
                1 IELTS test = $250 USD
                1 TestPredikt™ prediction = $29.99 (&lt; 12%)
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={0.5}></Grid>
        </Grid>
        <Grid sx={{ mb: 40 }}/>
        <Grid>
          <Typography component='h6' variant='h6'>
            TestPredikt™
          </Typography>
          <Typography component='p' variant='body2'>
            © 2022 TestPredikt – All rights reserved. Made with ♡️ in Calgary, Canada
          </Typography>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}
