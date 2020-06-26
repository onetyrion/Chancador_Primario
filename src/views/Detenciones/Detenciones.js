import React from "react";
// react plugin for creating charts
// import ChartistGraph from "react-chartist";
// @material-ui/core
// import { makeStyles } from "@material-ui/core/styles";
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

// import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
// import {  Box, Typography } from "@material-ui/core";
import DetencionesMantenciones from "views/Detenciones/Detenciones_mantenciones.js"
// const useStyles = makeStyles(styles);

// function TabPanel(props) {
//   const { children, value, index, ...other } = props;
//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`wrapped-tabpanel-${index}`}
//       aria-labelledby={`wrapped-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box p={3}>
//           <Typography component={'span'}>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }
// function a11yProps(index) {
//   return {
//     id: `wrapped-tab-${index}`,
//     'aria-controls': `wrapped-tabpanel-${index}`,
//   };
// }

export default function Dashboard() {
  // const [ setValue,] = React.useState('one');
  // const classes = useStyles();
  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };

  return (
    <div>
      <DetencionesMantenciones/>
      {/* <Paper square >
        <Tabs className={classes.Tabs}
          value={value} 
          onChange={handleChange} 
          //indicatorColor="info"
         // textColor="primary"
          aria-label="Dashboard-historico-actual"
          variant="fullWidth"
          centered>
          <Tab value="one" label="Mantenciones" {...a11yProps('one')} />
          <Tab value="two" label="Averías" {...a11yProps('two')} />
        </Tabs>
      </Paper>

      <TabPanel value={value} index="one">
        <DetencionesMantenciones/>
      </TabPanel>
      <TabPanel value={value} index="two">
        <h1>Averías</h1>
      </TabPanel> */}
    </div>
  );
}
