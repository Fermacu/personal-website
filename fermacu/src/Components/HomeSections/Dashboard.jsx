import React, { useState } from "react";

//UI Material
import { Box, Card, Grid, Tab, Tabs } from "@mui/material";

//Helpers
import { typographyForMainTitles, typographyForText } from "../../Helpers/typography";

//Components
import GithubSection from "./GithubSection";
import StackWithIcon from "../Basics/StackWithIcon";
import { Phonelink, Web } from "@mui/icons-material";

export default function Dashboard() {
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
      <Grid item xs={12}>
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
                <Tab sx={{ color: "white" }} label="Github" {...a11yProps(1)} />
              </Tabs>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <TabPanel value={tabValue} index={0}>
              <Grid
                container
                spacing={2}
                sx={{ color: "white", marginTop: "10px" }}
                justifyContent="center"
                alignItems="stretch"
              >
                <Grid item xs={12} md={2}>
                  <Card
                    raised
                    sx={{
                      padding: "20px",
                      backgroundColor: "#161B22",
                      color: "white",
                    }}
                  >
                    <StackWithIcon
                      icon={typographyForMainTitles("2+", "secondary")}
                      title="Years"
                      text="Experience"
                    />
                  </Card>
                </Grid>
                <Grid item xs={12} md={5}>
                  <Card
                    raised
                    sx={{
                      padding: "20px",
                      backgroundColor: "#161B22",
                      color: "white",
                    }}
                  >
                    <StackWithIcon
                      icon={<Phonelink color="secondary" />}
                      title="Front End Developer"
                      text="I design & build user interfaces"
                    />
                  </Card>
                </Grid>
                <Grid item xs={12} md={5}>
                  <Card
                    raised
                    sx={{
                      padding: "20px",
                      backgroundColor: "#161B22",
                      color: "white",
                    }}
                  >
                    <StackWithIcon
                      icon={<Web color="secondary" />}
                      title="Web Development"
                      text="I've been developing websites since 2020"
                    />
                  </Card>
                </Grid>
              </Grid>
            </TabPanel>
            <TabPanel value={tabValue} index={1}>
              <GithubSection />
            </TabPanel>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
