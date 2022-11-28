import React from "react";

//UI Material
import { Grid } from "@mui/material";
import {
  AppShortcut,
  Business,
  Code,
  Phonelink,
} from "@mui/icons-material";

//Helpers
import { typographyForText } from "../../Helpers/typography";

//Components
import StackWithIcon from "../Basics/StackWithIcon";

export default function EducationSection() {
  return (
    <Grid container spacing={2} sx={{ color: "white", marginTop: "10px" }}>
      <Grid item xs={12}>
        {typographyForText("> College", "bold")}
      </Grid>
      <Grid item xs={12}>
        <StackWithIcon
          icon={<Business color="secondary" />}
          title="Superior Technician in Business Administration"
          text="Universidad de Costa Rica"
          text2="2021 - 2022"
        />
      </Grid>
      <Grid item xs={12}>
        <StackWithIcon
          icon={<Phonelink color="secondary" />}
          title="Technician in Software Development"
          text="Universidad Cenfotec"
          text2="2022 - 2023"
        />
      </Grid>
      <Grid item xs={12}>
        {typographyForText("> Courses", "bold")}
      </Grid>
      <Grid item xs={12}>
        <StackWithIcon
          icon={<AppShortcut color="secondary" />}
          title="React Native: Apps for iOS & Android"
          text="Udemy"
        />
      </Grid>
      <Grid item xs={12}>
      <StackWithIcon
          icon={<Code color="secondary" />}
          title="JavaScript Essentials"
          text="Udemy"
        />
      </Grid>
    </Grid>
  );
}
