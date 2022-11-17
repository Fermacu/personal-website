import React from "react";

//UI Material
import { Grid } from "@mui/material";

//Helpers
import {
  typographyForMainTitles,
} from "../Helpers/typography";

export default function WorkWithMeCard() {
  return (
    <Grid container spacing={2} justifyContent="flex-start">
      <Grid item xs={12}>
        {typographyForMainTitles("Think. Design. Develop.", "white")}
      </Grid>
    </Grid>
  );
}
