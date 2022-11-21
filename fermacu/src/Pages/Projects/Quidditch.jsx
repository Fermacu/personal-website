import React from "react";

//UI Material
import { Grid } from "@mui/material";

//Helpers
import { typographyForSubtitles } from "../../Helpers/typography";

//Components
import QuidditchIntro from "../../Components/Projects/Quidditch/QuidditchIntro";
import QuidditchOptions from "../../Components/Projects/Quidditch/QuidditchOptions";

export default function Quidditch() {
  return (
    <Grid container spacing={1} justifyContent="center">
      <Grid item xs={12} md={10}>
        {typographyForSubtitles("> Intro", "secondary")}
      </Grid>
      <Grid item xs={12} md={10}>
        <QuidditchIntro />
      </Grid>
      <Grid item xs={12} md={10} sx={{marginTop:"20px"}}>
        {typographyForSubtitles("> Options", "secondary")}
      </Grid>
      <Grid item xs={12} md={10}>
        <QuidditchOptions/>
      </Grid>
    </Grid>
  );
}
