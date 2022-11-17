import React from "react";

//UI Material
import { Button, Grid, Stack } from "@mui/material";
import {
  ArrowForwardIosRounded,
  Person,
  Phonelink,
  Web,
} from "@mui/icons-material";

//Helpers
import {
  typographyForMainTitles,
  typographyForText,
} from "../Helpers/typography";

export default function ExperienceSection() {
  return (
    <Grid container spacing={2} sx={{ color: "white", marginTop: "10px" }}>

      <Grid item xs={12}>
        <Stack direction="row" alignItems="center" spacing={2}>
          {typographyForMainTitles("2+", "secondary")}
          <Stack>
            {typographyForText("Years", "bold")}
            {typographyForText("Experience")}
          </Stack>
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <Stack direction="row" alignItems="center" spacing={2}>
          <Phonelink color="secondary" />
          <Stack>
            {typographyForText("Front End Developer with React JS", "bold")}
            {typographyForText("I design & build user interfaces")}
          </Stack>
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <Stack direction="row" alignItems="center" spacing={2}>
          <Web color="secondary" />

          <Stack>
            {typographyForText("Web Development", "bold")}
            {typographyForText("I've been developing websites since 2020")}
          </Stack>
        </Stack>
      </Grid>
      <Grid item xs={12} align="center">
        <Button
          size="small"
          variant="outlined"
          startIcon={<Person />}
          endIcon={<ArrowForwardIosRounded />}
        >
          View profile
        </Button>
      </Grid>
    </Grid>
  );
}
