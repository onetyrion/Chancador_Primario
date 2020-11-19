// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import BuildIcon from '@material-ui/icons/Build';
import TocIcon from '@material-ui/icons/Toc';

//VIEWS COMPONENTS
import DashboardPage from "views/Dashboard/Dashboard.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import Detenciones from "views/Detenciones/Detenciones.js"
import ConfigAverias from "views/Config/Config_Averias";
import ConfigMaquinarias from "views/Config/Config_Maquinarias";
import ConfigMetas from "views/Config/Config_Metas";

let route_layout = "/"
const dashboardRoutes = [
  {
    collapse: true,
    name: "Dashboards",
    icon: Dashboard,
    state: "pageCollapse",
    views: [  
    {
      path: "primary",
      name: "Primarios",
      mini: "PR",
      component: DashboardPage,
      layout: route_layout
    },
    {
      path: "second",
      name: "Secundarios",
      mini: "SC",
      component: DashboardPage,
      layout: route_layout
    },
    {
      path: "reports",
      name: "Reportes",
      mini: "RP",
      component: DashboardPage,
      layout: route_layout
    },
    {
      path: "pivot",
      name: "Pivot",
      mini: "PV",
      component: DashboardPage,
      layout: route_layout
    },
    ]
  },
  {
    path: "detenciones",
    name: "Detenciones Chancador",
    icon: TocIcon,
    component: Detenciones,
    layout: route_layout
  },
  {
    path: "user",
    name: "Perfil",
    icon: Person,
    component: UserProfile,
    layout: route_layout
  },  
  {
    collapse: true,
    name: "Elementos Bases",
    icon: BuildIcon,
    state: "pageCollapse1",
    views: [ 
      {
        path: "maquinarias",
        name: "Maquinarias",
        mini: "MQ",
        component: ConfigMaquinarias,
        layout: route_layout
      },
      {
        path: "fallas",
        name: "Fallas",
        mini: "FL",
        component: ConfigAverias,
        layout: route_layout
      },
      {
        path: "metas",
        name: "Metas",
        mini: "MT",
        component: ConfigMetas,
        layout: route_layout
      }
    ]

  },  
];

export default dashboardRoutes;
