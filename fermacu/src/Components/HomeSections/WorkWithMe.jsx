import React from "react";

//UI Material
import { Button, Grid } from "@mui/material";
import { ArrowForwardIos, Email } from "@mui/icons-material";

//Helpers
import {
  typographyForMainTitles,
} from "../../Helpers/typography";

export default function WorkWithMeCard() {
  return (
    <Grid container spacing={2} justifyContent="flex-start">
      <Grid item xs={12}>
        {typographyForMainTitles("Think. Design. Develop.", "white")}
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" color="secondary" startIcon={<Email/>} endIcon={<ArrowForwardIos/>}>
          LET'S TALK
        </Button>
      </Grid>
    </Grid>
  );
}
