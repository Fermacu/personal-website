import React from "react";

//UI Material
import { Grid } from "@mui/material";

//Components
import ActionsCard from "../Components/ActionsCard";
import AboutMeCard from "../Components/AboutMeCard";

//Helpers
import {
  typographyForMainTitles,
  typographyForSubtitles,
} from "../Helpers/typography";
import WorkWithMeCard from "../Components/WorkWithMeCard";

export default function Home() {
  // ==========> Component <==========
  return (
    <Grid container spacing={1} justifyContent="center">
      {/**SECTION 1 - HOME */}
      <Grid item xs={12} md={10}>
        {typographyForSubtitles("> Home", "secondary")}
      </Grid>
      <Grid item xs={12} md={10}>
        {typographyForMainTitles(
          "The place where coffee becomes code.",
          "white"
        )}
      </Grid>
      <Grid item xs={12} md={10}>
        <ActionsCard />
      </Grid>
      {/**SECTION 2 - ABOUT ME */}
      <Grid item xs={12} md={10} sx={{marginTop:"20px"}}>
        {typographyForSubtitles("> About Me", "secondary")}
      </Grid>
      <Grid item xs={12} md={10}>
        <AboutMeCard/>
      </Grid>
      {/**SECTION 3 - HIRE ME*/}
      <Grid item xs={12} md={10} sx={{marginTop:"20px"}}>
        {typographyForSubtitles("> Have An Idea? Let's Build It.", "secondary")}
      </Grid>
      <Grid item xs={12} md={10}>
        <WorkWithMeCard/>
      </Grid>
      {/**SECTION 4 - CONTACT ME*/}
      <Grid item xs={12} md={10} sx={{marginTop:"20px"}}>
        {typographyForSubtitles("> Any Type Of Query & Discussion", "secondary")}
      </Grid>
    </Grid>
  );
}
