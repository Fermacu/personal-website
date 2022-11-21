import { Grid } from "@mui/material";
import React from "react";
import { typographyForMainTitles } from "../../../Helpers/typography";

export default function QuidditchIntro() {
  return (
    <Grid container spacing={2} justifyContent="flex-start">
      <Grid item xs={12}>
        {typographyForMainTitles("Quidditch", "white")}
      </Grid>
    </Grid>
  );
}
