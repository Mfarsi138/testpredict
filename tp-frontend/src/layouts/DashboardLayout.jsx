import { AppBar, Box, Button, MenuItem, Toolbar, Typography } from "@mui/material";
import { useNavigate, Outlet, Link } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import LocalPostOfficeOutlinedIcon from '@mui/icons-material/LocalPostOfficeOutlined';
import Menu from '@mui/material/Menu';

export default function DashboardLayout() {
  let navigate = useNavigate();

  const pages = [
    // { label: "About", to: "/about" },
    // { label: "Contact", to: "/contact" },
    // { label: "Testimonials", to: "/testimonials" },
    // { label: "FAQ", to: "/faq" },
  ];
  const toTarget = ()=>{
    navigate(pages.to);
  }
  return (
    <>
      <AppBar
        position="static"
        elevation={0}
        sx={{
          px: 0,
          mx: "auto",
          position: "relative",
          background: "white",
          color: "black",
          borderBottom: (t) => `1px solid black`,
          boxShadow: 3
        }}
      >
        <Toolbar>
          <Link to='/'>
          <Typography variant="h4" color="inherit" sx={{color:"#555",ml: 35,}} noWrap>
            TestPredikt™
          </Typography>
        
          </Link>
          <LocalPostOfficeOutlinedIcon fontSize="large" sx={{ ml: 3}}/>
          <Typography variant="h6" color="inherit" sx={{color:"#555",ml: 2,}} noWrap>
            Talk to Us
          </Typography>
          <Box
            sx={{
              justifyContent: "end",
              flexGrow: 1,
              display: { xs: "none", sm: "flex" },
            }}
          >
            {pages.map((page) => (
              <Link to={page.to} key={page.label} >
                <Button
                  variant="outlined"
                  size="small"
                  sx={{
                    mx: 1,
                    my: 2,
                    color: "black",
                    display: "block",
                    textTransform: "none",
                  }}
                >
                  {page.label}
                </Button>
              </Link>
            ))}
            {/*<div style={{ marginTop: "20px", color: "grey" }}>|</div>*/}
            {/*<Link to='/login'>*/}
            {/*  <Button*/}
            {/*    variant="outlined"*/}
            {/*    size="small"*/}
            {/*    sx={{ mx: 1, my: 2, color: "primary", display: "block" }}*/}
            {/*  >*/}
            {/*    Login*/}
            {/*  </Button>*/}
            {/*</Link>*/}
            <NotificationsActiveOutlinedIcon fontSize="large" sx={{ ml: 3}}/>
                <AccountCircleOutlinedIcon fontSize="large" sx={{ ml: 3,mr:35}}/>
          </Box>

        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
}
