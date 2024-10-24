import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

function MyNavbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "black" }}>
      <Toolbar sx={{ display: "flex", flexDirection: "row-reverse" }}>
        {/* Icono del menú para pantallas pequeñas */}
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer(true)}
          sx={{ display: { xs: "block", md: "none" } }} // Solo mostrar en pantallas pequeñas
        >
          <MenuIcon />
        </IconButton>

        {/* Botones de navegación para pantallas medianas y grandes */}
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/about">
            About
          </Button>
          <Button color="inherit" component={Link} to="/projects">
            Projects
          </Button>
          <Button color="inherit" component={Link} to="/contact">
            Contact
          </Button>
        </Box>
      </Toolbar>

      {/* Drawer (menú lateral) */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <div
          role="presentation"
          onClick={toggleDrawer(false)} // Cierra el Drawer al hacer clic
          onKeyDown={toggleDrawer(false)} // Cierra el Drawer al presionar una tecla
        >
          <List>
          <ListItem
              button
              onClick={toggleDrawer(false)}
              component={Link}
              to="/"
            >
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem
              button
              onClick={toggleDrawer(false)}
              component={Link}
              to="/about"
            >
              <ListItemText primary="About" />
            </ListItem>
            <ListItem
              button
              onClick={toggleDrawer(false)}
              component={Link}
              to="/projects"
            >
              <ListItemText primary="Projects" />
            </ListItem>
            <ListItem
              button
              onClick={toggleDrawer(false)}
              component={Link}
              to="/contact"
            >
              <ListItemText primary="Contact" />
            </ListItem>
          </List>
        </div>
      </Drawer>
    </AppBar>
  );
}

export default MyNavbar;
