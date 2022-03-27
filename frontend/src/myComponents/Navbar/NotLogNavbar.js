import React from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import logo from "../../media/logo.png";
import useStyles from './styles'
import { useTheme } from "../../Hooks/useThemeContext";
import CustomizedSwitches from "./DarkSwitch";

export default function NotLogNavbar() {

  const classes = useStyles();

  let themestyle = {};

  if (useTheme()) {
    themestyle = { background: '#000000', color: '#FFFFFF', textdecoration: 'none' }
  }
  else {
    themestyle = { color: '#000000', background: '#FFFFFF' }
  }

  return (
        <AppBar position="fixed" className={classes.appBar} style={themestyle}>
          <Toolbar>
            <Typography variant="h6" className={classes.title} style={themestyle}>
              <img src={logo} alt="Ecommerce" height="25px" className={classes.image} />
              E-Commerce
            </Typography>
            <div className={classes.grow} />
            <div className={classes.button}>
              <IconButton aria-label="Show Cart Items" color="inherit">
                <CustomizedSwitches />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
  )
}