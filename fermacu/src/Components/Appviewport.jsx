import React from "react";

//UI Material
import { Button, Grid, Stack } from "@mui/material";

//Material Icons
import { ArrowForwardIosOutlined, GitHub, Instagram, LinkedIn, RocketLaunch } from "@mui/icons-material";

//Helpers
import LogoBlue from "./Logos/LogoBlue";


export default function Appviewport({page}) {
  return (
    <Grid container>
      <Grid item xs={12} align="center" sx={{marginTop: "20px"}}>
        <LogoBlue />
      </Grid>
      <Grid item xs={12} sx={{marginTop:"10px"}}>
        <Stack direction="row" spacing={1} justifyContent="center">
          <Button
            size="small"
            startIcon={<RocketLaunch color="secondary" />}
            endIcon={<ArrowForwardIosOutlined />}
            variant="outlined"
          >
            EXPLORE
          </Button>
          <Button size="small" variant="outlined">
            <Instagram color="secondary" />
          </Button>
          <Button size="small" variant="outlined">
            <LinkedIn color="secondary" />
          </Button>
          <Button size="small" variant="outlined">
            <GitHub color="secondary" />
          </Button>
        </Stack>
      </Grid>
      <Grid item xs={12} sx={{marginTop:"20px"}}>
        {page}
      </Grid>
    </Grid>
  );
}
