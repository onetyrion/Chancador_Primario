/*!

=========================================================
* Material Dashboard React - v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import BuildIcon from '@material-ui/icons/Build';
import TocIcon from '@material-ui/icons/Toc';
// import LibraryBooks from "@material-ui/icons/LibraryBooks";
// import BubbleChart from "@material-ui/icons/BubbleChart";
// import LocationOn from "@material-ui/icons/LocationOn";
// import Notifications from "@material-ui/icons/Notifications";
// import Unarchive from "@material-ui/icons/Unarchive";
// import Language from "@material-ui/icons/Language";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import ConfigPage from "views/Config/Config.js";
import Detenciones from "views/Detenciones/Detenciones.js"
// import TableList from "views/TableList/TableList.js";
// import Typography from "views/Typography/Typography.js";
// import Icons from "views/Icons/Icons.js";
// import Maps from "views/Maps/Maps.js";
// import NotificationsPage from "views/Notifications/Notifications.js";
// import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.js";
// core components/views for RTL layout
// import RTLPage from "views/RTLPage/RTLPage.js";
// Configuración de dirección www.WEB.com/ES/xxxxx
// index.js : 34 : 37
// Admin.js : 26 : 37
let route_layout = "/"
const dashboardRoutes = [
  {
    path: "dashboard/actual",
    name: "Dashboard",
    icon: Dashboard,
    component: DashboardPage,
    layout: route_layout
  },
  {
    path: "dashboard/historico",
    name: "Dashboard",
    icon: Person,
    component: DashboardPage,
    layout: route_layout,
    pathactive:"dashboard/actual",
    sidebarbutton: true //true se muestra en sidebar // false no se muestra en sidebar
  },
  {
    path: "user",
    name: "Perfil",
    icon: Person,
    component: UserProfile,
    layout: route_layout
  },  
  {
    path: "config",
    name: "Elementos Bases",
    icon: BuildIcon,
    component: ConfigPage,
    layout: route_layout
  },  
  {
    path: "detenciones",
    name: "Detenciones Chancador",
    icon: TocIcon,
    component: Detenciones,
    layout: route_layout
  },
];

export default dashboardRoutes;
