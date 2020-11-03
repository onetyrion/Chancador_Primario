import React from "react";
import PropTypes from 'prop-types';
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import { Paper, Tabs, Tab, Box, Typography, Modal } from "@material-ui/core";
//Import Tabs
import ConfigMetas from "views/Config/Config_Metas.js";
import ConfigAverias from "views/Config/Config_Averias.js"
import ConfigMaquinarias from "views/Config/Config_Maquinarias.js"
import bgImage1 from "assets/img/bgCandelaria.jpg";

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
export default function Config(props) {
  const classes = useStyles();
  const [value, setValue,] = React.useState("one"); //Actual Historico
  const [loading,setloading] = React.useState(true);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <Modal
        style={{
        position: "fixed",
        height: "100%",
        width: "100%",
        display: "block",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundImage: "url(" + bgImage1 + ")",
        backgroundColor: "#fff",
        }}
        open={loading}>
        <p style={{color:"#fff"}}>Cargando</p>
      </Modal>
      {/* BARRA TABS ELEMENTOS BASES */}
      <Paper square>
        <Tabs className={classes.Tabs}
          value={value} 
          onChange={handleChange} 
          aria-label="dashboard-historico-actual"
          centered={true}
          variant="fullWidth"
          >
          <Tab value="one" label="Maquinarias & Componentes" 
          {...a11yProps('one')} 
          />
          <Tab value="two" label="Fallas" {...a11yProps('two')} />
          <Tab value="three" label="Metas" {...a11yProps('two')} />
        </Tabs>
      </Paper>

      {/* PANELES CON CONTENIDO  //////////////////*/}
      <TabPanel value={value} className={classes.root} index="one">
        <ConfigMaquinarias setloading={setloading} loading={loading}/>
      </TabPanel>
      <TabPanel value={value} className={classes.root} index="two">
          {/* <Redirect from="/config" to="/config/maquinarias"/> */}
        <ConfigAverias setloading={setloading} loading={loading}/>
      </TabPanel>
      <TabPanel value={value} className={classes.root} index="three">
        <ConfigMetas setloading={setloading} loading={loading}/>
      </TabPanel>
  
    </div>
  );
}
