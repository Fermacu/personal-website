import React from "react";

//UI Material
import { Button, Card, Grid } from "@mui/material";

//Components
import StackWithIcon from "../../Basics/StackWithIcon";
import { ArrowForwardIosRounded, Bookmark, Folder } from "@mui/icons-material";

export default function PresentationCard() {
  return (
    <Card
      raised
      sx={{ padding: "20px", backgroundColor: "#161B22", color: "white" }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <StackWithIcon
            icon={<Bookmark color="secondary" />}
            title="Quidditch"
            text="INF-05 Programming Principles Final Project"
            text2="Cenfotec University"
          />
        </Grid>
        <Grid item xs={12} align="center">
            <Button onClick={()=>{window.location.href = "/quidditch"}} size="small" variant="outlined" startIcon={<Folder/>} endIcon={<ArrowForwardIosRounded/>}>
                VIEW PROJECT
            </Button>
        </Grid>
      </Grid>
    </Card>
  );
}
