import { faBarsStaggered, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconButton, Link, Toolbar, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import React from "react";
import { ColorModeContext } from "../Layout";

const Header = () => {
  const colorMode = React.useContext(ColorModeContext);

  return (
    <AppBar
      className="header"
      color="inherit"
      position="sticky"
      aria-label="header"
    >
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="logo"
          href="/"
        >
          <FontAwesomeIcon icon={faBarsStaggered} />
        </IconButton>
        <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
          <Link href="/" underline="none" color="inherit">
            milesstax
          </Link>
        </Typography>
        <IconButton
          size="large"
          onClick={colorMode.toggleColorMode}
          color="inherit"
        >
          <FontAwesomeIcon icon={faSun} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
