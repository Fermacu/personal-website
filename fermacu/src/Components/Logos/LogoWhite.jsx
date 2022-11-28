import React from "react";

//UI Material
import { Grid } from "@mui/material";

//Assets
import fermacuwhite from "../../Assets/fermacu.png";

//Helpers
import { typographyForText } from "../../Helpers/typography";

export default function LogoWhite({ height = "50px" }) {
  return (
    <Grid container sx={{ marginTop: "20px", marginBottom: "20px" }}>
      <Grid item xs={12}>
        <img height={height} src={fermacuwhite} alt="logo-frmcu" />
      </Grid>
      <Grid item xs={12} align="center">
        {typographyForText(
          "Where coffee becomes code",
          "bold",
          "white"
        )}
      </Grid>
    </Grid>
  );
}
