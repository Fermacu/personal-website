import React from "react";

//UI Material
import { Button, Grid, Stack } from "@mui/material";
import {
  ArrowForwardIosRounded,
  Business,
  Phonelink,
  School,
} from "@mui/icons-material";
import { typographyForText } from "../Helpers/typography";

export default function EducationSection() {
  return (
    <Grid container spacing={2} sx={{ color: "white", marginTop: "10px" }}>
      <Grid item xs={12}>
        <Stack direction="row" alignItems="center" spacing={2}>
          <Business color="secondary"/>
          <Stack>
            {typographyForText("Universidad de Costa Rica")}
            {typographyForText(
              "Superior Technician in Business Administration",
              "bold"
            )}
            {typographyForText("2021-2022", "bold")}
          </Stack>
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <Stack direction="row" alignItems="center" spacing={2}>
          <Phonelink color="secondary"/>
          <Stack>
            {typographyForText("Universidad Cenfotec")}
            {typographyForText("Technician in Software Development", "bold")}
            {typographyForText("2022-2023", "bold")}
          </Stack>
        </Stack>
      </Grid>
      <Grid item xs={12} align="center">
        <Button
          size="small"
          variant="outlined"
          startIcon={<School />}
          onClick={() => {
            window.location.href = "https://github.com/Fermacu";
          }}
          endIcon={<ArrowForwardIosRounded />}
        >
          View more
        </Button>
      </Grid>
    </Grid>
  );
}
