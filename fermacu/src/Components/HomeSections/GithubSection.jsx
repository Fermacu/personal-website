import React from "react";

//UI Material
import { Grid, Stack } from "@mui/material";

//Github Calendar
import GitHubCalendar from "react-github-calendar";

//Helpers
import { typographyForText } from "../../Helpers/typography";

export default function GithubSection() {
  return (
    <Grid
      container
      spacing={2}
      sx={{ color: "white", marginTop: "10px" }}
    >
      <Grid item xs={12} align="center"> 
        
          <Stack justifyContent="flex-start">
            {typographyForText("Fernando Matamoros", "bold")}
            {typographyForText("Fermacu")}
          </Stack>

      </Grid>
      <Grid item xs={12} align="center">
        <GitHubCalendar
          blockSize={15}
          blockRadius="20px"
          hideColorLegend
          fontSize={12}
          username="fermacu"
          color="#FD4600"
        />
      </Grid>
    </Grid>
  );
}
