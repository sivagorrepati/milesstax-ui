import { faSun as faSunRegular } from "@fortawesome/free-regular-svg-icons";
import {
  faBarsStaggered,
  faSun as faSunSolid,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconButton, Toolbar, Typography, useTheme } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import React from "react";
import ColorModeContext from "./ColorModeContext";

const Header = () => {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  return (
    <AppBar
      className="header"
      color="inherit"
      position="sticky"
      aria-label="header"
    >
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          <FontAwesomeIcon icon={faBarsStaggered} />
        </IconButton>
        <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
          milesstax
        </Typography>
        <IconButton
          size="large"
          onClick={colorMode.toggleColorMode}
          color="inherit"
        >
          {theme.palette.mode === "dark" ? (
            <FontAwesomeIcon icon={faSunRegular} />
          ) : (
            <FontAwesomeIcon icon={faSunSolid} />
          )}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
