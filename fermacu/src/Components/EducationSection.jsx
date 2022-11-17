import React from "react";

//UI Material
import { Button, Grid, Stack } from "@mui/material";
import {
  AppShortcut,
  ArrowForwardIosRounded,
  Business,
  Code,
  Phonelink,
  School,
} from "@mui/icons-material";
import { typographyForText } from "../Helpers/typography";

export default function EducationSection() {
  return (
    <Grid container spacing={2} sx={{ color: "white", marginTop: "10px" }}>
      <Grid item xs={12}>
        {typographyForText("> College", "bold")}
      </Grid>
      <Grid item xs={12}>
        <Stack direction="row" alignItems="center" spacing={2}>
          <Business color="secondary" />
          <Stack>
            {typographyForText(
              "Superior Technician in Business Administration",
              "bold"
            )}
            {typographyForText("Universidad de Costa Rica")}
            {typographyForText("2021-2022", "bold")}
          </Stack>
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <Stack direction="row" alignItems="center" spacing={2}>
          <Phonelink color="secondary" />
          <Stack>
            {typographyForText("Technician in Software Development", "bold")}{" "}
            {typographyForText("Universidad Cenfotec")}
            {typographyForText("2022-2023", "bold")}
          </Stack>
        </Stack>
      </Grid>
      <Grid item xs={12}>
        {typographyForText("> Courses", "bold")}
      </Grid>
      <Grid item xs={12}>
        <Stack direction="row" alignItems="center" spacing={2}>
          <AppShortcut color="secondary" />
          <Stack>
            {typographyForText("React Native: Apps for iOS & Android", "bold")}{" "}
            {typographyForText("Udemy")}
          </Stack>
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <Stack direction="row" alignItems="center" spacing={2}>
          <Code color="secondary" />
          <Stack>
            {typographyForText("JavaScript Essentials", "bold")}{" "}
            {typographyForText("Udemy")}
          </Stack>
        </Stack>
      </Grid>
      <Grid item xs={12} align="center">
        <Button
          size="small"
          variant="outlined"
          startIcon={<School />}
          endIcon={<ArrowForwardIosRounded />}
        >
          View more
        </Button>
      </Grid>
    </Grid>
  );
}
