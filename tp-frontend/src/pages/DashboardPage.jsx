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
import playpause from '../assets/playpause.svg'
import seekbar from '../assets/seekbar.svg'
import alltests from '../assets/alltests.svg'


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

export default function DashboardPage() {
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="lg">
        <CssBaseline />
        <Typography sx={{mt:3}} component='h4' variant='h4'>
          Dashboard
        </Typography>
        <Grid container spacing={2}>
          <Grid item md={4} sm={6} xs={12}>
            <Card sx={{borderRadius:4,background: '#EFF0F5',color:"#000", minHeight:'275px', textAlign:'start'}}>
              <CardContent sx={{mx:1}}>
                <Typography variant='h6'>IMPORTANT!</Typography>
                <Typography variant='h6'>Read before you begin</Typography>
              </CardContent>
              <CardContent sx={{mx:1}}>
                <Typography variant='body2'>
                  Click on “Read more” to become familiar with the whole process: Prediktor™ Wizard, C-Test and V-Test.
                </Typography>
              </CardContent>
              <CardActions sx={{mx:1,mb:1, justifyContent:"center"}}>
                <Link to='/dashboard/at-a-glance'>
                  <Button
                    variant="contained"
                    color='primary'
                    sx={{background:"#fff",color:"#000",textTransform:"none",borderRadius:3,}}
                  >
                    Read more
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
          <Grid item md={4} sm={6} xs={12}>
            <Card sx={{borderRadius:4,background: '#FFEEF8',color:"#C11574", minHeight:'275px'}}>
              <CardContent sx={{mx:1}}>
                <Typography variant='h6'>Discounts & offers</Typography>
              </CardContent>
              <CardContent sx={{mx:1}}>
                <Typography variant='body2'>
                  Upload your official test results form to improve your prediction, and receive a $X TestPredikt™ credit.
                </Typography>
              </CardContent>
              <CardActions sx={{mx:1,mb:1,mt:6.5, justifyContent:"center"}}>
                <Link to='/dashboard/upload'>
                  <Button
                    variant="contained"
                    color='primary'
                    sx={{background:"#fff",color:"#000",textTransform:"none",borderRadius:3,}}
                  >
                    Upload
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
          <Grid item md={4} sm={6} xs={12}>
            <Card sx={{borderRadius:4,background: '#F5F0FF',color:"#5A32A3", minHeight:'275px'}}>
              <CardContent sx={{mx:1}}>
                <Typography variant='h6'>Take a look at</Typography>
              </CardContent>
              <CardContent sx={{mx:1}}>
                <Typography variant='body2'>
                  Lorem ipsum dolor sit amet,
                </Typography>
                <Typography variant='body2'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                </Typography>
              </CardContent>
              <CardActions sx={{mx:1,mb:1,mt:5, justifyContent:"center"}}>
              </CardActions>
            </Card>
          </Grid>


          <Grid item md={4} sm={6} xs={12}>
            <Card sx={{borderRadius:4,background: '#F0FFF4',color:"#000", minHeight:'275px'}}>
              <CardContent sx={{mx:1}}>
                <Typography variant='h6' sx={{color:'#054F31'}}>Start Prediction</Typography>
                <Typography variant='h6' sx={{color:'#054F31'}}>(Prediktor™ Wizard)</Typography>
              </CardContent>
              <CardContent sx={{mx:1}}>
                <img src={playpause}/>
              </CardContent>
              <CardActions sx={{mx:1,mb:1, justifyContent:"center"}}>
                <Link to='/dashboard'>
                  <Button
                    variant="contained"
                    color='primary'
                    sx={{background:"#fff",color:"#000",textTransform:"none",borderRadius:3,}}
                  >
                    Continue
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
          <Grid item md={4} sm={6} xs={12}>
            <Card sx={{borderRadius:4,background: '#EDF1F5',color:"#277AFF", minHeight:'275px'}}>
              <CardContent sx={{mx:1}}>
                <Typography variant='h6'>Progress bar</Typography>
              </CardContent>
              <CardContent sx={{mx:1}}>
                <Typography variant='body2' sx={{mb:5}}>
                  Next step is <strong>Prediktor™ Wizard</strong>
                </Typography>
                <img src={seekbar}/>
              </CardContent>
              <CardActions sx={{mx:1,mb:1,mt:3, justifyContent:"center"}}>
              </CardActions>
            </Card>
          </Grid>
          <Grid item md={4} sm={6} xs={12}>
            <Card sx={{borderRadius:4, minHeight:'275px'}}>
              <CardContent sx={{mx:1}}>
                <Typography variant='h6'>Forecasted language test score</Typography>
              </CardContent>
              <CardContent sx={{mx:1, filter:"blur(5px);"}}>
                <img style={{ width:'225px'}} src={alltests}/>
              </CardContent>
              <CardActions sx={{mx:1,mb:1,mt:5, justifyContent:"center"}}>
              </CardActions>
            </Card>
          </Grid>

        </Grid>
      </Container>
    </ThemeProvider>
  );
}
