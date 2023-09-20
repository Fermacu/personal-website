import React from "react";

//UI Material
import { Grid } from "@mui/material";

//Material Icons
import { Place } from "@mui/icons-material";

//Helpers
import { typographyForText } from "../../Helpers/typography";
import StackWithIcon from "../Basics/StackWithIcon";

export default function ExperienceSection() {
  return (
    <Grid container spacing={2} sx={{ color: "white", marginTop: "10px" }}>
      <Grid item xs={12}>
        {typographyForText("> Personal Info", "bold")}
      </Grid>
      <Grid item xs={12}>
      <StackWithIcon
              icon={<Place color="secondary"/>}
              title="San José"
              text="Costa Rica"
            />
      </Grid>
    </Grid>
  );
}
