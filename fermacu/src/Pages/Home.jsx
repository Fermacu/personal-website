import React from "react";

//UI Material
import { Grid } from "@mui/material";

//Components
import AboutMeSection from "../Components/HomeSections/AboutMeSection";
import Services from "../Components/HomeSections/Services";

//Helpers
import { typographyForSubtitles } from "../Helpers/typography";

export default function Home() {
  // ==========> Component <==========
  return (
    <Grid container spacing={1} justifyContent="center">
      <Grid item xs={12} md={10} sx={{ marginTop: "15px" }}>
        {typographyForSubtitles("Services", "secondary")}
      </Grid>
      <Grid item xs={12} md={10}>
       <Services/> 
      </Grid>
      <Grid item xs={12} md={10} sx={{ marginTop: "15px" }}>
        {typographyForSubtitles("About Me", "secondary")}
      </Grid>
      <Grid item xs={12} md={10}>
        <AboutMeSection />
      </Grid>
    </Grid>
  );
}
