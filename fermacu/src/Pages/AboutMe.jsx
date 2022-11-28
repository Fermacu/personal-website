import React from "react";

//UI Material
import { Grid, Stack } from "@mui/material";

//Components
import Dashboard from "../Components/HomeSections/Dashboard";

//Helpers
import {
  typographyForMainTitles,
  typographyForText,
} from "../Helpers/typography";

export default function AboutMe() {
  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={12} md={10}>
      <Stack justifyContent="flex-start">
          {typographyForMainTitles("I am Fernando Matamoros", "white")}
          {typographyForText(
            "I'm Fernando, a professional web designer & front end developer focused on crafting clean & user friendly experiences.",
            null,
            "white"
          )}
        </Stack>
      </Grid>
      <Grid item xs={12} md={10}>
        <Dashboard />
      </Grid>

    </Grid>
  );
}
