import { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  Container,
  createTheme,
  CssBaseline,
  FormControlLabel,
  Grid,
  TextField,
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

export default function LoginPage() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Card sx={{ borderRadius: "15px", mt: "75px" }} variant="outlined">
          <CardContent>
            <Box
              sx={{
                marginTop: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography component="h1" variant="h5">
                LogIn
              </Typography>
              <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 1 }}
              >
                <TextField
                  sx={{
                    "& fieldset": {
                      borderRadius: "15px",
                    },
                  }}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  sx={{
                    "& fieldset": {
                      borderRadius: "15px",
                    },
                  }}
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <Grid container sx={{ my: 2 ,textAlign:"start"}}>
                  <Grid item xs={4} sx={{ mt: 1 }}>
                    <Link to='/reset-password'>
                      <Typography variant="body2">
                        Forgot password?
                      </Typography>
                    </Link>
                  </Grid>
                  <Grid item xs={5.5} />
                  <Grid item xs={2.5} sx={{textAlign:"end"}}>
                    <Link to='/dashboard'>
                    <Button
                      type="submit"
                      variant="contained"
                      sx={{
                        background: "#E5EFFF",
                        color: "black",
                        textTransform: "none",
                      }}
                    >
                      Login
                    </Button>
                    </Link>
                  </Grid>
                  <Grid item xs={12} sx={{mt:2,textAlign:"end"}}>
                    <Link to='/register'>
                      <Typography variant="body2">
                        Register here
                      </Typography>
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </ThemeProvider>
  );
}
