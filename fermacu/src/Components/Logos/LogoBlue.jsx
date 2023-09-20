import React from "react";

//UI Material
import { Box } from "@mui/material";

//Assets
import fermacuwhite from "../../Assets/fermaculogo.png";

export default function LogoBlue({ height = "50px" }) {
  return (
    <Box >
        <img height={height} src={fermacuwhite} alt="logo-frmcu" />
    </Box>
  );
}
