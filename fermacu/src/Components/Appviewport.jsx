import React from "react";

//UI Material
import { Grid } from "@mui/material";

//Helpers
import LogoWhite from "./Logos/LogoWhite";
import Home from "../Pages/Home";

export default function Appviewport() {
  return (
    <Grid container sx={{ padding: "15px", backgroundColor: "#13233A" }}>
      <Grid item xs={12} align="center">
        <LogoWhite />
      </Grid>
      <Grid
        item
        xs={12}
      >
        <Home />
      </Grid>
    </Grid>
  );
}
