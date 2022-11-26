import React from "react";

//UI Material
import { Button, Grid, Stack } from "@mui/material";

//Helpers
import LogoWhite from "./Logos/LogoWhite";
<<<<<<< Updated upstream
import Home from "../Pages/Home";

export default function Appviewport() {
=======
import {
  ArrowForwardIosOutlined,
  GitHub,
  Instagram,
  LinkedIn,
  RocketLaunch,
} from "@mui/icons-material";

export default function Appviewport({ page }) {
>>>>>>> Stashed changes
  return (
    <Grid container sx={{ padding: "15px", backgroundColor: "#000" }}>
      <Grid item xs={12} align="center">
        <LogoWhite />
      </Grid>
<<<<<<< Updated upstream
      <Grid
        item
        xs={12}
      >
        <Home />
=======
      <Grid item xs={12} sx={{marginBottom:"20px"}}>
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
      <Grid item xs={12}>
        {page}
>>>>>>> Stashed changes
      </Grid>
    </Grid>
  );
}
