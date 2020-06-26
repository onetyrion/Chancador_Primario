import React from "react";
import PropTypes from 'prop-types';
// react plugin for creating charts
// import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
// import Icon from "@material-ui/core/Icon";
// @material-ui/icons
// import Store from "@material-ui/icons/Store";
// import Warning from "@material-ui/icons/Warning";
// import DateRange from "@material-ui/icons/DateRange";
// import LocalOffer from "@material-ui/icons/LocalOffer";
// import Update from "@material-ui/icons/Update";
// import ArrowUpward from "@material-ui/icons/ArrowUpward";
// import AccessTime from "@material-ui/icons/AccessTime";
// import Accessibility from "@material-ui/icons/Accessibility";
// import BugReport from "@material-ui/icons/BugReport";
// import Code from "@material-ui/icons/Code";
// import Cloud from "@material-ui/icons/Cloud";
// core components
// import GridItem from "components/Grid/GridItem.js";
// import GridContainer from "components/Grid/GridContainer.js";
// import Table from "components/Table/Table.js";
// import Tasks from "components/Tasks/Tasks.js";
// import CustomTabs from "components/CustomTabs/CustomTabs.js";
// import Danger from "components/Typography/Danger.js";
// import Card from "components/Card/Card.js";
// import CardHeader from "components/Card/CardHeader.js";
// import CardIcon from "components/Card/CardIcon.js";
// import CardBody from "components/Card/CardBody.js";
// import CardFooter from "components/Card/CardFooter.js";

// import { bugs, website, server } from "variables/general.js";

// import {
//   dailySalesChart,
//   emailsSubscriptionChart,
//   completedTasksChart
// } from "variables/charts.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import { Paper, Tabs, Tab, Box, Typography } from "@material-ui/core";

const useStyles = makeStyles(styles);
//DESPLIEGUE DE PANELES
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`wrapped-tabpanel-${index}`}
      aria-labelledby={`wrapped-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography component={'span'}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propType = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

//SET DE VALORES INDEX DE TABS
function a11yProps(index) {
  return {
    id: `wrapped-tab-${index}`,
    'aria-controls': `wrapped-tabpanel-${index}`,
  };
}
export default function Config() {
  const classes = useStyles();
  const [value, setValue,] = React.useState("one"); //Actual Historico

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      {/* BARRA TABS ELEMENTOS BASES */}
      <Paper square>
        <Tabs className={classes.Tabs}
          value={value} 
          onChange={handleChange} 
          aria-label="dashboard-historico-actual"
          centered={true}
          variant="fullWidth"
          >
          <Tab value="one" label="Maquinarias" {...a11yProps('one')} />
          <Tab value="two" label="Averías" {...a11yProps('two')} />
          <Tab value="three" label="Metas" {...a11yProps('two')} />
        </Tabs>
      </Paper>

      {/* PANELES CON CONTENIDO 
      //////////////////*/}
      <TabPanel value={value} className={classes.root} index="one">
        <h3>Gestión de maquinarias</h3>
      </TabPanel>
      <TabPanel value={value} className={classes.root} index="two">
        <h3>Gestión de Averías</h3>
      </TabPanel>
      <TabPanel value={value} className={classes.root} index="three">
        <h3>Gestión de Metas</h3>
      </TabPanel>
  
    </div>
  );
}
