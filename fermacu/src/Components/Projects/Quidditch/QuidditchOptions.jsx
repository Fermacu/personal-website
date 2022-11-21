import React from "react";

//UI Material
import { Button, Grid } from "@mui/material";
import { Add, Leaderboard } from "@mui/icons-material";

export default function QuidditchOptions() {
  return (
    <Grid container spacing={1}>
      <Grid item>
        <Button
          size="small"
          variant="contained"
          color="secondary"
          endIcon={<Add />}
        >
          ADD TEAM
        </Button>
      </Grid><Grid item>
        <Button
          size="small"
          variant="contained"
          color="secondary"
          endIcon={<Leaderboard />}
        >
          RESULTS REPORT
        </Button>
      </Grid>
    </Grid>
  );
}
