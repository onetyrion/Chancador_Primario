import React from "react";
import Iframe from 'react-iframe'

export default function DashboardReports(props) {
    const  file_get_contents = (filename) =>{
        fetch(filename).then((resp) => resp.text()).then(function(data) {
            return data;
        });
    }
  return(
<div>
{/* <a href="http://onetyrion-pc/ReportServer/Pages/ReportViewer.aspx?%2fReporte_DashboardEv3%2fReportDashboard&rs:Command=Render" target="_main" > Click here for the Territory Sales Drilldown sample report </a> */}

<embed width="100%" height="600px" src="http://onetyrion-pc/ReportServer/Pages/ReportViewer.aspx?%2fReporte_DashboardEv3%2fReportDashboard&rs:embed=true"></embed>

</div> 
  )
}
