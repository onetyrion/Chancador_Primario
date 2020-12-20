import Cookies from 'universal-cookie';
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import BuildIcon from '@material-ui/icons/Build';
import TocIcon from '@material-ui/icons/Toc';
import Home from '@material-ui/icons/Home';

//VIEWS COMPONENTS
import UserProfile from "views/UserProfile/UserProfile.js";
import Detenciones from "views/Detenciones/Detenciones.js"
import ConfigAverias from "views/Config/Config_Averias";
import ConfigMaquinarias from "views/Config/Config_Maquinarias";
import ConfigMetas from "views/Config/Config_Metas";
import ConfigETL from "views/Config/Config_ETL";
import DashboardReports from "views/Dashboard/Reports/Dashboard_Reports";
import pivotDetenciones from "views/Dashboard/Detenciones_pivotTable";
import pivotDisponibilidad from "views/Dashboard/Disponibilidad_pivotTable";
import reportDisponibilidad from "views/Dashboard/Reports/reportDisponibilidad";
import reportDetenciones from "views/Dashboard/Reports/reportDetenciones";
import HomeDashboard from "views/Dashboard/Dashboard_historico";

let route_layout = "/",dashboardRoutes=[];
const cookies = new Cookies();

const getPrivilegesRol = ()=>{
  // cookies.remove("rol",{path: "/"})
  const usuarioInfo = cookies.get("rol",{path: "/"});
  // console.log(parseInt(usuarioInfo));
  if (!parseInt(usuarioInfo) && cookies.get("user",{path: "/"})) {
    console.log(cookies.get("rol",{path: "/"}),cookies.get("user",{path: "/"}));
  }
    return parseInt(usuarioInfo);
}

const AdminRoutes = [
  {
    path: "home",
    name: "Home",
    mini: "HM",
    icon: Home,
    component: HomeDashboard,
    layout: route_layout
  },
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
      component: reportDisponibilidad,
      layout: route_layout
    },
    {
      path: "second",
      name: "Secundarios",
      mini: "SC",
      component: reportDetenciones,
      layout: route_layout
    },
    {
      path: "reports",
      name: "Reportes",
      mini: "RP",
      component: DashboardReports,
      layout: route_layout
    },
    {
      path: "pivotDtns",
      name: "Pivot Detenciones",
      mini: "PV",
      component: pivotDetenciones,
      layout: route_layout
    },
    {
      path: "pivotDisp",
      name: "Pivot Disponibilidad",
      mini: "PV",
      component: pivotDisponibilidad,
      layout: route_layout
    }
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
      },
      {
        path: "etl",
        name: "Programación ETL",
        mini: "ETL",
        component: ConfigETL,
        layout: route_layout
      }
    ]

  },  
];

const PlanificadorRoutes = [
  {
    path: "home",
    name: "Home",
    mini: "HM",
    icon: Home,
    component: HomeDashboard,
    layout: route_layout
  },
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
      component: reportDisponibilidad,
      layout: route_layout
    },
    {
      path: "second",
      name: "Secundarios",
      mini: "SC",
      component: reportDetenciones,
      layout: route_layout
    },
    {
      path: "reports",
      name: "Reportes",
      mini: "RP",
      component: DashboardReports,
      layout: route_layout
    },
    {
      path: "pivotDtns",
      name: "Pivot Detenciones",
      mini: "PV",
      component: pivotDetenciones,
      layout: route_layout
    },
    {
      path: "pivotDisp",
      name: "Pivot Disponibilidad",
      mini: "PV",
      component: pivotDisponibilidad,
      layout: route_layout
    }
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
  } 
];

const LectoresRoutes = [
  {
    path: "home",
    name: "Home",
    mini: "HM",
    icon: Home,
    component: HomeDashboard,
    layout: route_layout
  },
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
      component: reportDisponibilidad,
      layout: route_layout
    },
    {
      path: "second",
      name: "Secundarios",
      mini: "SC",
      component: reportDetenciones,
      layout: route_layout
    },
    {
      path: "reports",
      name: "Reportes",
      mini: "RP",
      component: DashboardReports,
      layout: route_layout
    },
    {
      path: "pivotDtns",
      name: "Pivot Detenciones",
      mini: "PV",
      component: pivotDetenciones,
      layout: route_layout
    },
    {
      path: "pivotDisp",
      name: "Pivot Disponibilidad",
      mini: "PV",
      component: pivotDisponibilidad,
      layout: route_layout
    }
    ]
  },
  {
    path: "user",
    name: "Perfil",
    icon: Person,
    component: UserProfile,
    layout: route_layout
  } 
];
// console.log(cookies.get("user",{path: "/"}).length);
switch (getPrivilegesRol()) {
  case 1:
    dashboardRoutes = AdminRoutes;
    // console.log("Administrador")
    break;
  case 2:
    dashboardRoutes = PlanificadorRoutes;
    // console.log("Planificador")
    break;
  default:
    dashboardRoutes = LectoresRoutes;
    // console.log("Lector")
    break;
}

export default dashboardRoutes;
