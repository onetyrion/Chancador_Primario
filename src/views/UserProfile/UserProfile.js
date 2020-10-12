import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import ProfileDetails from './Tab_Panel/Profile_details.js';
import ProfileSecurity from './Tab_Panel/Profile_security.js';
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import ProfileAccounts from './Tab_Panel/Profile_accounts.js';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={1}>
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
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    //height: 224,
    //width: "1000px",
    color:"black"
  },
  tabs: {
    borderRight: `3px solid ${theme.palette.divider}`,
  },
  //widthdiv:{width:"700px"}
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Tabs
            orientation="horizontal"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical-tabs"
            className={classes.tabs}
          >
            <Tab label="Detalles" {...a11yProps(0)} />
            <Tab label="Seguridad" {...a11yProps(1)} />
            <Tab label="Usuarios" {...a11yProps(2)} />
          </Tabs>
        </GridItem>

        <GridItem xs={12} sm={12} md={12}>
          <TabPanel value={value} index={0}>
            <ProfileDetails/>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <ProfileSecurity/>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <ProfileAccounts/>
          </TabPanel>
        </GridItem>
      </GridContainer>
    </div>
  );
}
