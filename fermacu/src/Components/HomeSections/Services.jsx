import { AutoFixHigh, MiscellaneousServices, RocketLaunch, Web } from "@mui/icons-material";
import { Card, Grid } from "@mui/material";
import React from "react";

//Components
import StackWithIcon from "../Basics/StackWithIcon";

export default function Services() {
  return (
    <Grid container spacing={1}>
      <Grid item md={3} xs={6}>
        <Card
          raised
          sx={{
            padding: "20px",
            backgroundColor: "#F28700",
            borderRadius: "20px",
            color: "white",
          }}
        >
          <StackWithIcon title={"Custom Software"} icon={<MiscellaneousServices />} />
        </Card>
      </Grid>
      <Grid item md={3} xs={6}>
        <Card
          raised
          sx={{
            padding: "20px",
            backgroundColor: "#F07102",
            borderRadius: "20px",
            color: "white",
          }}
        >
          <StackWithIcon title={"Web development"} icon={<Web />} />
        </Card>
      </Grid>
      <Grid item md={3} xs={6}>
        <Card
          raised
          sx={{
            padding: "20px",
            backgroundColor: "#F24C03",
            borderRadius: "20px",
            color: "white",
          }}
        >
          <StackWithIcon title={"Unique Design"} icon={<AutoFixHigh />} />
        </Card>
      </Grid>
      <Grid item md={3} xs={6}>
        <Card
          raised
          sx={{
            padding: "20px",
            backgroundColor: "#CA4700",
            borderRadius: "20px",
            color: "white",
          }}
        >
          <StackWithIcon title={"Service Innovation"} icon={<RocketLaunch />} />
        </Card>
      </Grid>
    </Grid>
  );
}
