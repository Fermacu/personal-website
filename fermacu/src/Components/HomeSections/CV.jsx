import React, { useState } from "react";

//UI Material
import { Box, Grid, Stack, Tab, Tabs } from "@mui/material";

//Helpers
import {
  typographyForMainTitles,
  typographyForText,
} from "../../Helpers/typography";

//Components
import EducationSection from "./EducationSection";
import ExperienceSection from "./ExperienceSection";
import AboutMeSection from "./AboutMeSection";


//Function to generate tabs
function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`welcome-tabpanel-${index}`}
      aria-labelledby={`welcome-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{typographyForText(children)}</Box>}
    </div>
  );
}

export default function CV() {
  // ==========> Component States <==========
  const [tabValue, setTabValue] = useState(0);

  // ==========> Component Functions <==========
  
  //Function to set tab value
  const handleChange = (_event, newValue) => {
    setTabValue(newValue);
  };
  //Function for giving an index to each tab
  function a11yProps(index) {
    return {
      id: `welcome-tab-${index}`,
      "aria-controls": `welcome-tabpanel-${index}`,
    };
  }
  return (
    <Grid container spacing={2} justifyContent="flex-start">
      <Grid item xs={12} md={6}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Stack justifyContent="flex-start">
              {typographyForMainTitles("I am Fernando Matamoros", "white")}
              {typographyForText(
                "I'm Fernando, a professional web designer & front end developer focused on crafting clean & user friendly experiences.",
                null,
                "white"
              )}
            </Stack>
          </Grid>
 
        </Grid>
      </Grid>

      <Grid item xs={12} md={12}>
        <Grid
          container
          sx={{
            padding: "20px",
            backgroundColor: "#0D1117",
            borderRadius: "20px",
          }}
        >
          <Grid item xs={12}>
            <Box>
              <Tabs
                centered
                indicatorColor="secondary"
                value={tabValue}
                onChange={handleChange}
                aria-label="actions"
                textColor="secondary"
              >
                <Tab
                  sx={{ color: "white" }}
                  label="About Me"
                  {...a11yProps(0)}
                />
                <Tab
                  sx={{ color: "white" }}
                  label="Experience"
                  {...a11yProps(1)}
                />
                <Tab
                  sx={{ color: "white" }}
                  label="Education"
                  {...a11yProps(2)}
                />
              </Tabs>
            </Box>
          </Grid>
          <Grid item xs={12}>
          <TabPanel value={tabValue} index={0}>
              <AboutMeSection />
            </TabPanel>
            <TabPanel value={tabValue} index={1}>
              <ExperienceSection />
            </TabPanel>
            <TabPanel value={tabValue} index={2}>
              <EducationSection />
            </TabPanel>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
