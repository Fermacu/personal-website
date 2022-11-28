import React from "react";

//UI Material
import { Grid } from "@mui/material";
import {
  Bookmark,
  Phonelink,
  Web,
} from "@mui/icons-material";

//Helpers
import {
  typographyForText,
} from "../../Helpers/typography";
import StackWithIcon from "../Basics/StackWithIcon";

export default function ExperienceSection() {
  return (
    <Grid container spacing={2} sx={{ color: "white", marginTop: "10px" }}>
      <Grid item xs={12}>
        {typographyForText("> Experience", "bold")}
      </Grid>
      <Grid item xs={12}>
        <StackWithIcon
          icon={<Phonelink color="secondary" />}
          title="Front End Developer with React JS"
          text="I design & build user interfaces"
        />
      </Grid>
      <Grid item xs={12}>
        <StackWithIcon
          icon={<Web color="secondary" />}
          title="Web Development"
          text="I've been developing websites since 2020"
        />
      </Grid>
      <Grid item xs={12}>
        {typographyForText("> History", "bold")}
      </Grid>
      <Grid item xs={12}>
        <StackWithIcon
          icon={<Bookmark color="secondary" />}
          title="Front End Developer"
          text="Energías Limpias de Costa Rica, ELCO"
          text2="2021 - Present"
        />
      </Grid>
    </Grid>
  );
}
