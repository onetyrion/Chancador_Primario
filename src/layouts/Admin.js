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
// import {getToken, getUser} from '../API/helpers';
import styles from "assets/jss/material-dashboard-react/layouts/adminStyle.js";
import bgImage from "assets/img/sidebar-5.jpg";
import bgImage1 from "assets/img/bgCandelaria.jpg";
import logo from "assets/img/candelarialogo.png";
//FUNCTIONS LAYOUT
import {switchRoutes} from './functionAdmin';
import { validLogin } from "API/Auth";
import { Modal } from "@material-ui/core";
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
  const [loading,setloading] = React.useState(true);
  
  React.useEffect(()=>{
  redirectLogin();
  // eslint-disable-next-line react-hooks/exhaustive-deps
},[])

// switchRoutes( routes );
  const handleDrawerToggle = () => { setMobileOpen(!mobileOpen); };

  const redirectLogin = async()=>{
    if (!await validLogin() ) {
      window.location.href="/login";
    }else{
      setloading(false);
    }
  }
  
  return (
    <div className={classes.wrapper}>
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
        <div className={classes.container}>
          {switchRoutes( routes )}
        </div>
      </div>
      <Footer />
    </div>
  </div>
    
  );
}
