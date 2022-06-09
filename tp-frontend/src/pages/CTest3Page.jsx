import {
  Box,
  Button,
  Card, CardActions,
  CardContent, CardHeader, Checkbox,
  Container,
  createTheme,
  CssBaseline, FormControlLabel, FormGroup,
  Grid, IconButton, Tooltip,
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

function DeleteIcon() {
  return null;
}

export default function CTest3Page() {
  const EmptyPlace = (props)=>{
    let spaces='';
    for(let i=0;i<props.length;i++){
      spaces += "  ";
    }
    return (<span style={{whiteSpace: "pre",background:'#ddd'}}>{spaces}</span>)
  }
  const HelpToolTip = (props) => {
    return (<Tooltip title={props.title} open={true}><span/></Tooltip>)
  }
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="lg">
        <CssBaseline />
        <Typography sx={{mt:3}} component='h4' variant='h4'>
          C-Test
        </Typography>
        <Grid container spacing={2} sx={{mt:3,px:30, textAlign:'start'}}>
          <Grid item xs={12} sx={{minHeight:"450px"}}>
            <Typography type='text2' sx={{textAlign:'center',my:2}}>
              <strong>life and work of Marie Curie</strong>
            </Typography>
            <Typography variant='body2'>
              Marie Curie is probably the most famous woman scientist who has ever lived. Born Maria Sklodowska in Poland in 1867, she is famous for her work on radioactivity, and was twice a winner of the Nobel Prize. With h<EmptyPlace length={2}/> husband, Pierre Curie, a<EmptyPlace length={2}/> Henri Becquerel, s<EmptyPlace length={2}/> was awa<EmptyPlace length={4}/> the 1903 Nobel Prize f<EmptyPlace length={2}/> Physics, a<EmptyPlace length={2}/> was t<EmptyPlace length={2}/> sole win<EmptyPlace length={3}/> of t<EmptyPlace length={2}/> 1911 No<EmptyPlace length={3}/> Prize f<EmptyPlace length={2}/> Chemistry. S<EmptyPlace length={2}/> was t<EmptyPlace length={2}/> first wo<EmptyPlace length={3}/> to w<EmptyPlace length={2}/> a No<EmptyPlace length={3}/> Prize. Fr<EmptyPlace length={2}/> childhood, Ma<EmptyPlace length={3}/> was remar<EmptyPlace length={5}/> for her prodigious memory, and at the age of 16 won a gold medal on completion of her secondary education.
            </Typography>
            {/*<Typography sx={{mt:5, textAlign:'center'}}><strong>Solution</strong></Typography>*/}
            {/*<Typography variant='body2'>*/}
            {/*  Millions of children in the United States go to summer camp. Some go to play outdoors at traditional camps in the woods, in the mountains or on a lake. But families now have many choices of specialty camps. These can be in the middle of nature or a big city. Specialty camps offer young people the chance to learn about different subjects. Anything from space exploration to business to medicine.*/}
            {/*</Typography>*/}
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{mt:3}}>
          <Grid item xs={7}>
          </Grid>
          <Grid item xs={2.5}>
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
                Save & return to dashboard
              </Button>
            </Link>
          </Grid>
          <Grid item xs={2.5}>
            <Link to='/dashboard/c-test-4'>
              <Button
                variant="contained"
                color='primary'
                sx={{
                  textTransform: "none",
                }}
              >
                Save & next step
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}
