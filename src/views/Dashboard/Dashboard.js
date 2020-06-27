import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import DashboardDiario from "views/Dashboard/Dashboard_diario.js";
import DashboardHistorico from 'views/Dashboard/Dashboard_historico.js';


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

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `wrapped-tab-${index}`,
    'aria-controls': `wrapped-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(styles);

export default function Dashboard() {
  let tabTiempo = "two"; // definicion de tab tiempo actual "one" | historico "two" 
  let tabTipo = 0; // definicion de tab tipo reporte 0 | dashboard 1
  
  if (window.location.pathname === "/Chancador_Primario/dashboard/historico") {
    tabTiempo = "two";
  }
  const classes = useStyles();
  const [value, setValue,] = React.useState(tabTiempo); //Actual Historico
  const [subvalue, setsubValue] = React.useState(tabTipo); //Dashboard Reportes


  const handleChange = (event, newValue) => {
    setValue(newValue);
    setsubValue(0);
  };
  

  const handleChangee = (event, newValue) => {
    setsubValue(newValue);
  };
  return (
    <div className={classes.root}>
      <Paper square>
        <Tabs className={classes.Tabs}
          value={value} 
          onChange={handleChange} 
          aria-label="dashboard-historico-actual"
          centered={true}
          variant="fullWidth"
          >
          <Tab value="one" label="Diario" {...a11yProps('one')} />
          <Tab value="two" label="Historico" {...a11yProps('two')} />
        </Tabs>
      </Paper>
      
      {/* /////////////DIARIO */}
      <TabPanel value={value} className={classes.root} index="one">
        <DashboardDiario droppanel={subvalue}/>
        <Paper square className={classes.TabsWidth} >
          <Tabs className={classes.Tabs}
            value={subvalue}
            onChange={handleChangee}
            aria-label="dashboard-reportes"
            centered={true}
            variant="fullWidth"
          >
            <Tab label="Dashboard"href="#" aria-label="dashboard" />
            <Tab label="Reportes" href="#" aria-label="reportes" />
          </Tabs>
        </Paper>
      </TabPanel>
      
      {/* /////////////HISTORICO */}
      <TabPanel value={value} index="two">
        <DashboardHistorico droppanel2={subvalue} />
        <Paper square className={classes.TabsWidth}>
          <Tabs className={classes.Tabs}
            value={subvalue}
            onChange={handleChangee}
            aria-label="dashboard-reportes"
            variant="fullWidth"
            indicatorColor="primary"
          >
            <Tab label="Dashboard" href="#" aria-label="Dashboard" />
            <Tab label="Reportes"  href="#" aria-label="Reportes" />
          </Tabs>
        </Paper>
      </TabPanel>
    </div>
  );
}