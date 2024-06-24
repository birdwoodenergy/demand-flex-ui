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
import { Link as RouterLink, useLocation } from "react-router-dom"; // Import as RouterLink
import SchemaIcon from "@mui/icons-material/Schema";
import BoltIcon from "@mui/icons-material/Bolt";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import SpeedIcon from "@mui/icons-material/Speed";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import HelpIcon from "@mui/icons-material/Help";
import HomeIcon from "@mui/icons-material/Home";
import logo from "./../../../assets/img/logo.svg";

const Header: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery("(max-width:830px)");
  const location = useLocation();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [selectedMenuText, setSelectedMenuText] = React.useState<string>("");

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (text: string) => {
    setSelectedMenuText(text);
    handleMenuClose();
  };

  // Set selectedMenuText to "Home" when clicking on the logo
  const handleLogoClick = () => {
    setSelectedMenuText("Home");
  };

  const menuItems = [
    ...(isMobile
      ? [
          {
            text: "Home",
            icon: <HomeIcon style={{ marginRight: 8 }} />,
            link: "/",
          },
        ]
      : []),
    {
      text: "Single Line Diagram",
      icon: <SchemaIcon style={{ marginRight: 8 }} />,
      link: "/singlelinediagram",
    },
    {
      text: "Flexible Load Identification",
      icon: <BoltIcon style={{ marginRight: 8 }} />,
      link: "/flexibleloadnotification",
    },
    {
      text: "Uploads",
      icon: <CloudUploadIcon style={{ marginRight: 8 }} />,
      link: "/uploads",
    },
    {
      text: "Monitoring Equipment",
      icon: <SpeedIcon style={{ marginRight: 8 }} />,
      link: "/monitoring",
    },
    {
      text: "Solar & Battery",
      icon: <WbSunnyIcon style={{ marginRight: 8 }} />,
      link: "/solar",
    },
    {
      text: "Site Questions",
      icon: <HelpIcon style={{ marginRight: 8 }} />,
      link: "/questions",
    },
  ];

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item xs={8} sm={8} md={1} lg={1}>
            {/* Link to="/" with onClick handler to set selectedMenuText to "Home" */}
            <RouterLink
              to="/"
              style={{ textDecoration: "none", color: "inherit" }}
              onClick={handleLogoClick}
            >
              <img
                src={logo}
                alt="Logo"
                style={{ width: isMobile ? "30px" : "25%", height: "auto" }}
              />
            </RouterLink>
            {isMobile ? (
              <span style={{ paddingLeft: 10, verticalAlign: "super" }}>
                {selectedMenuText}
              </span>
            ) : (
              ""
            )}
          </Grid>

          <Grid item xs={4} sm={4} md={11} lg={11}>
            {isMobile ? (
              // Mobile Menu Button and Menu Items
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
                      component={RouterLink} // Use RouterLink for navigation
                      to={item.link}
                      onClick={() => {
                        handleMenuItemClick(item.text);
                        handleMenuClose();
                      }}
                      sx={{
                        backgroundColor:
                          location.pathname === item.link
                            ? theme.palette.secondary.main
                            : "transparent",
                        color:
                          location.pathname === item.link ? "white" : "inherit",
                      }}
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
              // Desktop Menu Items
              <List component="nav" sx={{ display: "flex", flexDirection: "row" }}>
                {menuItems
                  .filter((item) => item.text !== "Home")
                  .map((item) => (
                    <ListItemButton
                      component={RouterLink} // Use RouterLink for navigation
                      to={item.link}
                      key={item.text}
                      onClick={() => handleMenuItemClick(item.text)}
                      sx={{
                        borderBottom: `3px solid ${
                          location.pathname === item.link
                            ? theme.palette.secondary.main
                            : "transparent"
                        }`,
                        borderRadius: theme.shape.borderRadius,
                        "&:hover": {
                          backgroundColor: "#2D4A69",
                          color: "white",
                        },
                        color:
                          location.pathname === item.link
                            ? theme.palette.secondary.main
                            : "white", // Set icon color dynamically
                      }}
                    >
                      <Box display="flex" alignItems="center">
                        {React.cloneElement(item.icon, {
                          sx: {
                            color:
                              location.pathname === item.link
                                ? theme.palette.secondary.main
                                : "white",
                          },
                        })}
                        <ListItemText
                          primary={item.text}
                          primaryTypographyProps={{
                            sx: {
                              color:
                                location.pathname === item.link
                                  ? theme.palette.secondary.main
                                  : "white",
                              fontWeight:
                                location.pathname === item.link
                                  ? "bold"
                                  : "normal",
                            },
                          }}
                        />
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
