import React from "react";
import cx from "classnames";
import { Switch, Route, Redirect } from "react-router-dom";
// creates a beautiful scrollbar
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Footer from "components/Footer/Footer.js";
import Sidebar from "components/Sidebar/Sidebar1.js";

import routes from "routes.js";

import styles from "assets/jss/material-dashboard-react/layouts/adminStyle.js";
import { validLogin } from "API/Auth";
import { Modal } from "@material-ui/core";

var ps;

const useStyles = makeStyles(styles);

export default function Dashboard(props) {
  const { ...rest } = props;
  // states and functions
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [miniActive, setMiniActive] = React.useState(false);
  const [loading,setloading] = React.useState(true);
  // styles
  const classes = useStyles();
  const mainPanelClasses = classes.mainPanel + " " +
    cx({
      [classes.mainPanelSidebarMini]: miniActive,
      [classes.mainPanelWithPerfectScrollbar]:
        navigator.platform.indexOf("Win") > -1
    });
  
    // ref for main panel div
  const mainPanel = React.createRef();
  
  // effect instead of componentDidMount, componentDidUpdate and componentWillUnmount
  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(mainPanel.current, {
        suppressScrollX: true,
        suppressScrollY: false
      });
      document.body.style.overflow = "hidden";
    }
    window.addEventListener("resize", resizeFunction);
    redirectLogin()
    // Specify how to clean up after this effect:
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
      }
      window.removeEventListener("resize", resizeFunction);
    };
  });
  
  // functions for changeing the states from components
  const redirectLogin = async()=>{
    if (!await validLogin() ) {
      window.location.href="/login";
    }else{
      setloading(false);
    }
  }

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const getActiveRoute = routes => {
    let activeRoute = "Default Brand Text";
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].collapse) {
        let collapseActiveRoute = getActiveRoute(routes[i].views);
        if (collapseActiveRoute !== activeRoute) {
          return collapseActiveRoute;
        }
      } else {
        if (
          window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1
        ) {
          return routes[i].name;
        }
      }
    }
    return activeRoute;
  };
  const getRoutes = routes => {
    return routes.map((prop, key) => {
      if (prop.collapse) {
        return getRoutes(prop.views);
      }
      if (prop.layout === "/") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };
  const sidebarMinimize = () => {
    setMiniActive(!miniActive);
  };
  const resizeFunction = () => {
    if (window.innerWidth >= 960) {
      setMobileOpen(false);
    }
  };

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
        backgroundImage: "url(" + require("assets/img/bgCandelaria.jpg") + ")",
        backgroundColor: "#fff",
      }}
      open={loading}>
      <p style={{color:"#fff"}}>Cargando</p>
    </Modal>
      <Sidebar
        routes={routes}
        logo={require("assets/img/candelariaMINI.png")}
        logoText={require("assets/img/candelarialogo-1.png")}
        image={require("assets/img/sidebar-5.jpg")}
        handleDrawerToggle={handleDrawerToggle}
        open={mobileOpen}
        color={"blue"}
        bgColor={"black"}
        miniActive={miniActive}
        {...rest}
      />
      <div className={mainPanelClasses} ref={mainPanel}>
        <AdminNavbar
          sidebarMinimize={sidebarMinimize.bind(this)}
          miniActive={miniActive}
          brandText={getActiveRoute(routes)}
          handleDrawerToggle={handleDrawerToggle}
          {...rest}
        />
        {/* On the /maps/full-screen-maps route we want the map to be on full screen - this is not possible if the content and conatiner classes are present because they have some paddings which would make the map smaller */}
        <div className={classes.content}>
            <div className={classes.container}>
              <Switch>
                {getRoutes(routes)}
                <Redirect from="/" to="/user" />
              </Switch>
            </div>
          </div>
        <Footer fluid />
      </div>
    </div>
  );
}
