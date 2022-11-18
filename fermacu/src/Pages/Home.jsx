import React from "react";

//UI Material
import { Grid } from "@mui/material";

//Components
import Dashboard from "../Components/HomeSections/Dashboard";
import AboutMe from "../Components/HomeSections/AboutMe";
import WorkWithMe from "../Components/HomeSections/WorkWithMe";

//Helpers
import {
  typographyForSubtitles,
} from "../Helpers/typography";

export default function Home() {
  // ==========> Component <==========
  return (
    <Grid container spacing={1} justifyContent="center">

      {/**SECTION 1 - HOME */}
      <Grid item xs={12} md={10}>
        {typographyForSubtitles("> Home", "secondary")}
      </Grid>
      <Grid item xs={12} md={10}>
        <Dashboard />
      </Grid>

      {/**SECTION 2 - ABOUT ME */}
      <Grid item xs={12} md={10} sx={{marginTop:"20px"}}>
        {typographyForSubtitles("> About Me", "secondary")}
      </Grid>
      <Grid item xs={12} md={10}>
        <AboutMe/>
      </Grid>

      {/**SECTION 3 - WORK WITH ME*/}
      <Grid item xs={12} md={10} sx={{marginTop:"20px"}}>
        {typographyForSubtitles("> Have An Idea? Let's Build It.", "secondary")}
      </Grid>
      <Grid item xs={12} md={10}>
        <WorkWithMe/>
      </Grid>
      
    </Grid>
  );
}
