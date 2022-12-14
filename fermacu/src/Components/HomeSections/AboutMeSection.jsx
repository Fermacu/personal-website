import React, { useState } from "react";

//UI Material
import { Box, Button, Grid, Stack, Tab, Tabs } from "@mui/material";

//Helpers
import {
  typographyForMainTitles,
  typographyForText,
} from "../../Helpers/typography";

//Components
import EducationSection from "./EducationSection";
import ExperienceSection from "./ExperienceSection";
import { ArrowForwardIos, CoPresent, Place } from "@mui/icons-material";
import StackWithIcon from "../Basics/StackWithIcon";

export default function AboutMeCard() {
  // ==========> Component States <==========
  const [tabValue, setTabValue] = useState(0);

  // ==========> Component Functions <==========
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
          <Grid item xs={12}>
            <StackWithIcon
              icon={typographyForMainTitles("2+", "secondary")}
              title="Years"
              text="Experience"
            />
          </Grid>
          <Grid item xs={12}>
            <StackWithIcon
              icon={typographyForMainTitles(<Place/>, "secondary")}
              title="San Jos??"
              text="Costa Rica"
            />
          </Grid>
          <Grid item xs={12} sx={{ marginBottom: "20px" }}>
            <Button
              size="small"
              variant="outlined"
              startIcon={<CoPresent color="secondary" />}
              endIcon={<ArrowForwardIos />}
            >
              MORE ABOUT ME
            </Button>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} md={6}>
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
                  label="Experience"
                  {...a11yProps(0)}
                />
                <Tab
                  sx={{ color: "white" }}
                  label="Education"
                  {...a11yProps(1)}
                />
              </Tabs>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <TabPanel value={tabValue} index={0}>
              <ExperienceSection />
            </TabPanel>
            <TabPanel value={tabValue} index={1}>
              <EducationSection />
            </TabPanel>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
