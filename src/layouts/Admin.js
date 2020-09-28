import React from "react";
// creates a beautiful scrollbar
// import PerfectScrollbar from "perfect-scrollbar";
// import "perfect-scrollbar/css/perfect-scrollbar.css";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Navbar from "components/Navbars/Navbar.js";
import Footer from "components/Footer/Footer.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import routes from "routes.js";
import loginUserAPI from "API/Login";
// import {getToken, getUser} from '../API/helpers';
import styles from "assets/jss/material-dashboard-react/layouts/adminStyle.js";
import bgImage from "assets/img/sidebar-5.jpg";
import logo from "assets/img/candelarialogo.png";
//FUNCTIONS LAYOUT
import {switchRoutes} from './functionAdmin';
const useStyles = makeStyles(styles);

// let ps;
export default function Admin({ ...rest }) {
  // styles
  const classes = useStyles();
  // ref to help us initialize PerfectScrollbar on windows devices
  const mainPanel = React.createRef();
  // states 
  const [image] = React.useState(bgImage);
  const [color] = React.useState("blue");
  const [mobileOpen, setMobileOpen] = React.useState(false);
  
  switchRoutes( routes, loginUserAPI );
  const handleDrawerToggle = () => { setMobileOpen(!mobileOpen); };
  // const resizeFunction = () => {
  //   if (window.innerWidth >= 960) {
  //     setMobileOpen(false);
  //   }
  // };
  // initialize and destroy the PerfectScrollbar plugin
  // React.useEffect(() => {
  //   if (navigator.platform.indexOf("Win") > -1) {
  //     ps = new PerfectScrollbar(mainPanel.current, {
  //       suppressScrollX: true,
  //       suppressScrollY: false
  //     });
  //     document.body.style.overflow = "hidden";
  //   }
  //   window.addEventListener("resize", resizeFunction);
  //   // Specify how to clean up after this effect:
  //   return function cleanup() {
  //     if (navigator.platform.indexOf("Win") > -1) {
  //       ps.destroy();
  //     }
  //     window.removeEventListener("resize", resizeFunction);
  //   };
  // }, [mainPanel]);
  
  return (
    <div className={classes.wrapper}>
      <Sidebar
        routes={routes}
        logoText={""}
        logo={logo}
        image={image}
        handleDrawerToggle={handleDrawerToggle}
        open={mobileOpen}
        color={color}
        {...rest}
        />
      <div className={classes.mainPanel} ref={mainPanel}>
        <Navbar
          routes={routes}
          handleDrawerToggle={handleDrawerToggle}
          {...rest}
          />
        <div className={classes.content}>
          <div className={classes.container}>{switchRoutes( routes, loginUserAPI )}</div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
