import React from "react";

//UI Material
import { Stack } from "@mui/material";

//Helpers
import { typographyForText } from "../../Helpers/typography";

export default function StackWithIcon({ icon, title, text, text2 }) {
  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      {icon}
      <Stack>
      {typographyForText(title, "bold")}
      {typographyForText(text)}
      {typographyForText(text2, "bold")}
      </Stack>
    </Stack>
  );
}
