import React from "react";

//UI Material
import { Grid } from "@mui/material";

//Helpers
import { typographyForText } from "../Helpers/typography";

export default function Home() {
  // ==========> Component <==========
  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} sx={{ backgroundColor: "blue", padding: "15px" }}>
        {typographyForText(
          "Este espacio es para un banner con ideas/propuestas/diferenciadores que hablen de la marca",
          null,
          "white"
        )}
      </Grid>
      <Grid item xs={12} sx={{ backgroundColor: "yellow", padding: "15px" }}>
        {typographyForText(
          "Este espacio tendrá la propuesta de desarrollo. Ideas interesantes para desarrollar cualquier proyecto de forma innovadora."
        )}
      </Grid>
      <Grid item xs={12} sx={{ backgroundColor: "red", padding: "15px" }}>
        {typographyForText(
          "Aquí estará un listado de mis proyectos realizados. Cada uno será capaz de desplegar información relevante sobre el proyecto.",
          null,
          "white"
        )}
      </Grid>
      <Grid item xs={12} sx={{ backgroundColor: "green", padding: "15px" }}>
        {typographyForText(
          "Por último, habrá un espacio para que las personas puedan contactar a la marca, que puedan cotizar sus proyectos y convertir sus ideas en realidad.",
          null,
          "white"
        )}
      </Grid>
    </Grid>
  );
}
