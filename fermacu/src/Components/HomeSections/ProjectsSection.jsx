import React from "react";

//UI Material
import { Grid } from "@mui/material";
import { typographyForText } from "../../Helpers/typography";
import PresentationCard from "../Projects/Quidditch/PresentationCard";

export default function ProjectsSection() {
  return (
    <Grid container spacing={2} sx={{ color: "white", marginTop: "10px" }}>
      <Grid item xs={12}>
        {typographyForText("> Recents", "bold")}
      </Grid>
      <Grid item xs={12} md={6}>
        {/**Quidditch Final Project */}
        <PresentationCard/>
      </Grid>
    </Grid>
  );
}
