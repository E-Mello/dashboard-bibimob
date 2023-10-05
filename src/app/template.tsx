"use client"

import React, { useState } from "react";
import { ThemeProvider, createTheme, makeStyles } from "@material-ui/core/styles";

import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import { Container } from "@mui/material";
import CssBaseline from "@material-ui/core/CssBaseline";
import IconButton from "@material-ui/core/IconButton";
import { isDarkModeAtom } from "@/atoms/themeModeAtom";
import { shadows } from "@mui/system";
import { useAtom } from "jotai";

const theme = createTheme();

export const rootStyles = makeStyles((theme) => ({
  themeModeButton: {
    position: "absolute",
    top: 10,
    right: 10,
  },

}));


export default function Template({ children }: { children: React.ReactNode }) {
  const classes = rootStyles();
  const [isDarkMode, setIsDarkMode] = useAtom(isDarkModeAtom);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const appliedTheme = createTheme({
    ...theme,
    palette: {
      type: isDarkMode ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={appliedTheme}>
      <CssBaseline />
      <IconButton className={classes.themeModeButton} onClick={toggleDarkMode}>
        {isDarkMode ? <Brightness4Icon /> : <Brightness7Icon />}
      </IconButton>
      {children}
    </ThemeProvider>
  );
}
