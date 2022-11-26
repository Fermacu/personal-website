import React from "react";

//UI Material
import { Button, Grid } from "@mui/material";
import {
  ArrowForwardIosRounded,
  Bookmark,
  Person,
  Phonelink,
  Web,
} from "@mui/icons-material";

//Helpers
import {
  typographyForMainTitles,
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
          icon={typographyForMainTitles("2+", "secondary")}
          title="Years"
          text="Experience"
        />
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
      <Grid item xs={12} align="center">
        <Button
          size="small"
          variant="outlined"
          startIcon={<Person />}
          endIcon={<ArrowForwardIosRounded />}
          onClick={()=>{window.location.href="/about"}}
        >
          View profile
        </Button>
      </Grid>
    </Grid>
  );
}
