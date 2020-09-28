import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

const useStyles = makeStyles(styles);

export default function TableList() {
  const classes = useStyles();
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card >
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Reporte diario</h4>
            <p className={classes.cardCategoryWhite}>
              Listado por día e indicadores
            </p>
          </CardHeader>
          <CardBody>
            <Table 
              tableHeaderColor="primary"
              tableHead={["KPI","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","29","20","21","22","23","24","25","26","27","28","29","30","31","Total"]}
              tableData={[
                ["Disp","100","100","75.9","87.3","100","98.3","56.7","96.7","100","100","100","100","100","100","27","0","78.6","100","100","100","100","100","100","100","100","100","100","100","100","100","100","90.98"],
                ["MTTR","0.0","0.0","0.0","0.0","0.0","4.6","4.6","3.4","3.4","3.4","3.4","3.4","3.4","3.4","3.4","3.4","3.4","3.4","3.4","3.4","3.4","3.4","2.7","2.7","2.7","2.7","2.7","2.7","2.7","2.7","2.7","2.67"],
                ["MTBF","1004.6","1004.6","1004.6","1004.6","1004.6","67.4","74.2","57.2","65.2","65.2","65.2","89.2","105.2","105.2","105.2","105.2","105.2","105.2","105.2","105.2","105.2","105.2","121.2","127.2","133.2","139.2","145.2","151.2","157.2","163.2","169.2","169.23"],
              ]}
              
              // ]}
            />
          </CardBody>
        </Card>
      </GridItem>
      
      {/* <GridItem xs={12} sm={12} md={6}>
        <Card >
          <CardHeader color="warning">
            <h4 className={classes.cardTitleWhite}>Reporte Anual</h4>
            <p className={classes.cardCategoryWhite}>
              Listado por mes e indicadores
            </p>
          </CardHeader>
          <CardBody>
            <Table 
              tableHeaderColor="warning"
              tableHead={["Día", "Disponibilidad", "MTTR", "MTBF"]}
              tableData={[
                ["Enero", "95.27", "0", "1004.6"],
                ["Febrero", "98.16", "0", "1004.6"],
                ["Marzo", "98.72", "0", "1004.6"],
                ["Abril", "94.66", "0", "1004.6"],
                ["Mayo", "82.25", "0", "1004.6"],
                ["Junio", "98.67", "4.6", "67.4"],
                ["Julio", "88.39", "4.6", "74.2"],
                ["Agosto", "98.27", "3.4", "57.2"],
                ["Septiembre", "86.84", "3.4", "65.2"],
                ["Octubre", "99.86", "3.4", "65.2"],
                ["Noviembre", "96.15", "3.4", "65.2"],
                ["Diciembre", "98.67", "3.4", "89.2"],
                ["Total Año 2019", "94.43", "169.2", "105"]
              ]}
            />
          </CardBody>
        </Card>
      </GridItem> */}
      
      <GridItem xs={12} sm={12} md={12}>
        <Card >
          <CardHeader color="warning">
            <h4 className={classes.cardTitleWhite}>Reporte Anual 20XX</h4>
            <p className={classes.cardCategoryWhite}>
              Disponibilidad: 94.43% | MTTR : 169.2  | MTBF: 105
            </p>
          </CardHeader>
          <CardBody>
            <Table 
              tableHeaderColor="warning"
              tableHead={["KPI", "Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]}
              tableData={[
                ["Disp.", "95.27", "98.16", "98.72","94.66", "82.25", "98.67", "88.39", "98.27", "86.84", "99.86", "96.15", "98.67"],
                ["MTTR", "0","0","0","0","0","4.6","4.6","3.4","3.4","3.4","3.4","4.3"],
                ["MTBF", "104.6","104.6","104.6","104.6","104.6","67.4","74.2","57.2","65.2","65.2","65.2","89.2"],
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
   
   </GridContainer>
  );
}
