// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import BuildIcon from '@material-ui/icons/Build';
import TocIcon from '@material-ui/icons/Toc';

//VIEWS COMPONENTS
import DashboardPage from "views/Dashboard/Dashboard.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import ConfigPage from "views/Config/Config.js";
import Detenciones from "views/Detenciones/Detenciones.js"
// import Login from "views/Login/Login.js";
// Configuración de dirección www.WEB.com/ES/xxxxx
// index.js : 34 : 37
// Admin.js : 26 : 37
let route_layout = "/"
const dashboardRoutes = [
  // {
  //   path: "logins",
  //   name: "Login",
  //   icon: Dashboard,
  //   component: Login,
  //   layout: route_layout,
  //   sidebarbutton: false //true se muestra en sidebar // false no se muestra en sidebar
  // },
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
    sidebarbutton: true
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
  }
];

export default dashboardRoutes;
