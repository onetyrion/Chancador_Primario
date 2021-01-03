import React from "react";
// import Iframe from "react-iframe";

export default function DashboardReports(props) {
  return (
    <div style={{ backgroundColor: "#fff", paddingTop: "7px" }}>
      <embed
        width="100%"
        height="600px"
        src="http://localhost/reportserver?%2fReportesCh%2fReport_Primarios&rs:embed=true"
      ></embed>
    </div>
  );
}
