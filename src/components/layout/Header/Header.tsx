import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  useMediaQuery,
  List,
  ListItemButton,
  ListItemText,
  useTheme,
  Grid,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import SchemaIcon from "@mui/icons-material/Schema";
import BoltIcon from "@mui/icons-material/Bolt";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import SpeedIcon from "@mui/icons-material/Speed";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import HelpIcon from "@mui/icons-material/Help";
import logo from "./../../../assets/img/logo.svg";

const Header: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery("(max-width:600px)");
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuItems = [
    {
      text: "Single Line Diagram",
      icon: (
        <SchemaIcon
          style={{
            color: isMobile ? theme.palette.primary.main : "white",
            marginRight: 8,
          }}
        />
      ),
      link: "/",
    },
    {
      text: "Flexible Load Identification",
      icon: (
        <BoltIcon
          style={{
            color: isMobile ? theme.palette.primary.main : "white",
            marginRight: 8,
          }}
        />
      ),
      link: "/about",
    },
    {
      text: "Uploads",
      icon: (
        <CloudUploadIcon
          style={{
            color: isMobile ? theme.palette.primary.main : "white",
            marginRight: 8,
          }}
        />
      ),
      link: "/uploads",
    },
    {
      text: "Monitoring Equipment",
      icon: (
        <SpeedIcon
          style={{
            color: isMobile ? theme.palette.primary.main : "white",
            marginRight: 8,
          }}
        />
      ),
      link: "/monitoring",
    },
    {
      text: "Solar & Battery",
      icon: (
        <WbSunnyIcon
          style={{
            color: isMobile ? theme.palette.primary.main : "white",
            marginRight: 8,
          }}
        />
      ),
      link: "/solar",
    },
    {
      text: "Site Questions",
      icon: (
        <HelpIcon
          style={{
            color: isMobile ? theme.palette.primary.main : "white",
            marginRight: 8,
          }}
        />
      ),
      link: "/questions",
    },
  ];

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Grid container alignItems="center">
          {/* Logo Grid Item */}
          <Grid item xs={1}>
            <img src={logo} alt="Logo" style={{ width: isMobile ? "100%" : "20%", height: "auto" }} />
          </Grid>

          {/* Menu Grid Item */}
          <Grid item xs={11}>
            {isMobile ? (
              <Box display="flex" justifyContent="flex-end" alignItems="center">
                <IconButton
                  edge="end"
                  color="inherit"
                  aria-label="menu"
                  onClick={handleMenuOpen}
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                >
                  {menuItems.map((item) => (
                    <MenuItem
                      key={item.text}
                      component={Link}
                      to={item.link}
                      onClick={handleMenuClose}
                    >
                      <Box display="flex" alignItems="center">
                        {item.icon}
                        <ListItemText primary={item.text} />
                      </Box>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            ) : (
              <List
                component="nav"
                sx={{ display: "flex", flexDirection: "row" }}
              >
                {menuItems.map((item) => (
                  <ListItemButton
                    component={Link}
                    to={item.link}
                    key={item.text}
                  >
                    <Box display="flex" alignItems="center">
                      {item.icon}
                      <ListItemText primary={item.text} />
                    </Box>
                  </ListItemButton>
                ))}
              </List>
            )}
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
