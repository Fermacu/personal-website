import { Box } from '@mui/material'
import React from 'react'


import fermacuwhite from "../../Assets/fermacu.png" 

export default function LogoWhite({height="50px"}) {
  return (
    <Box sx={{marginTop: "20px", marginBottom: "20px"}}>
        <img height={height} src={fermacuwhite} alt='logo-frmcu'/>
    </Box>
  )
}
