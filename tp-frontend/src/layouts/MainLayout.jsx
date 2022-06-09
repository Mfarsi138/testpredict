import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { useNavigate, Outlet, Link } from "react-router-dom";

export default function MainLayout() {
  let navigate = useNavigate();

  const pages = [
    { label: "About", to: "/about" },
    { label: "Contact", to: "/contact" },
    { label: "Testimonials", to: "/testimonials" },
    { label: "FAQ", to: "/faq" },
  ];
  const toTarget = ()=>{
    navigate(pages.to);
  }
  return (
    <div>
      <AppBar
        position="static"
        elevation={0}
      >
        <Toolbar>
          <Typography sx={{ml: 30}} variant="h4" color="inherit" noWrap>
            <Link  to='/'>
            TestPredikt™
            </Link>
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
            <div style={{ marginTop: "20px", color: "grey" }}>|</div>
            <Link to='/login'>
              <Button
                variant="outlined"
                size="small"
                sx={{ mx: 1, my: 2, color: "primary", display: "block" }}
              >
                Login
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Outlet />
      <div className='mainLayout'></div>
    </div>
  );
}
