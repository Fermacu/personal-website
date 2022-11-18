import React from "react";

//UI Material
import { Button, Grid } from "@mui/material";
import { typographyForText } from "../../Helpers/typography";
import { ArrowForwardIosRounded, AutoAwesomeMotion } from "@mui/icons-material";

export default function ProjectsSection() {
  return (
    <Grid container spacing={2} sx={{ color: "white", marginTop: "10px" }}>
      <Grid item xs={12}>
        {typographyForText("> Recents", "bold")}
      </Grid>
      <Grid item xs={12}>
        {typographyForText("> All Projects", "bold")}
      </Grid>
      <Grid item xs={12} align="center">
        <Button
          size="small"
          variant="outlined"
          startIcon={<AutoAwesomeMotion />}
          endIcon={<ArrowForwardIosRounded />}
        >
          View projects
        </Button>
      </Grid>
    </Grid>
  );
}
