import React from "react";

//UI Material
import {
  ArrowForwardIos,
  AutoFixHigh,
  Email,
  MiscellaneousServices,
  RocketLaunch,
  Web,
} from "@mui/icons-material";
import { Button, Card, Grid } from "@mui/material";

//Helpers
import { typographyForMainTitles } from "../../Helpers/typography";

//Components
import StackWithIcon from "../Basics/StackWithIcon";

export default function Services() {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        {typographyForMainTitles(
          "Creativity is intelligence having fun.",
          "white"
        )}
      </Grid>
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
          <StackWithIcon
            title={"Custom Software"}
            icon={<MiscellaneousServices />}
          />
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
      <Grid item xs={12} sx={{ marginTop: "20px" }}>
        {typographyForMainTitles(
          "Think. Design. Develop. Let's build the future.",
          "white"
        )}
      </Grid>
      <Grid item xs={12} sx={{ marginBottom: "20px" }}>
        <Button
          size="small"
          variant="outlined"
          startIcon={<Email color="secondary" />}
          endIcon={<ArrowForwardIos />}
        >
          LET'S TALK
        </Button>
      </Grid>
    </Grid>
  );
}
