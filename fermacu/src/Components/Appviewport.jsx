import React from "react";

//UI Material
import { Grid } from "@mui/material";

//Helpers
import LogoWhite from "./Logos/LogoWhite";

export default function Appviewport({page}) {
  return (
    <Grid container sx={{ padding: "15px", backgroundColor: "#13233A" }}>
      <Grid item xs={12} align="center">
        <LogoWhite />
      </Grid>
      <Grid
        item
        xs={12}
      >
        {page}
      </Grid>
    </Grid>
  );
}
