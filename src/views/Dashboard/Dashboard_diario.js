import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";


import {
  dailySalesChart,
  emailsSubscriptionChart,
  mttrdiarioChart,
  mtbfdiarioChart,
  hrsmantencionChart
} from "variables/charts.js";
//import Dashboard_diario from "views/Dashboard/Dashboard_diario.js";
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import TableList from "views/TableList/TableList";

const useStyles2 = makeStyles(styles);

export default function DashboardDiario(props) {
  
  const classes = useStyles2();
  //console.log(super(props))
  if (!props.droppanel) {
    return (
      <div>
        <GridContainer >
          {/* Disponibilidad diaria vs pom CHART1 */}
          <GridItem xs={12} sm={12} md={6}>
            <Card chart>
              <CardHeader color="info">
                <ChartistGraph
                  className="ct-chart"
                  data={dailySalesChart.data}
                  type="Line"
                  options={dailySalesChart.options}
                  listener={dailySalesChart.animation}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Disponibilidad Diaria</h4>
                <p className={classes.cardCategory}>
                  <span className={classes.successText}>
                    <ArrowUpward className={classes.upArrowCardCategory} /> 95%
                  </span>{" "}
                  Disponibilidad Real Total Mensual.
                </p>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  <AccessTime /> Actualizado hace 4 minutos
                </div>
              </CardFooter>
            </Card>
          </GridItem>
  
          {/* Cantidad de averias y horas de mantencion CHART2 */}
          <GridItem xs={12} sm={12} md={6}>
            <Card chart>
              <CardHeader color="warning">
                <ChartistGraph
                  className="ct-chart"
                  data={emailsSubscriptionChart.data}
                  type="Bar"
                  options={{
                    seriesBarDistance: 50,
                    reverseData: true,
                    horizontalBars: true,
                    axisY: {
                      offset: 70
                    }
                  }}
                  //responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                  //listener={emailsSubscriptionChart.animation}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Averías y horas de mantención</h4>
                <p className={classes.cardCategory}>
                <span className={classes.successText}>
                    <ArrowUpward className={classes.upArrowCardCategory} /> 10%
                </span>{" "}
                   más averías que el mes anterior.
                   </p>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  <AccessTime /> Actualizado hace 4 minutos
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          
          {/* MTTR diario CHART3 */}
          <GridItem xs={12} sm={12} md={6}>
            <Card chart>
              <CardHeader color="success">
                <ChartistGraph
                  className="ct-chart"
                  data={mttrdiarioChart.data}
                  type="Line"
                  options={mttrdiarioChart.options}
                  listener={mttrdiarioChart.animation}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>MTTR Diario</h4>
                <p className={classes.cardCategory}>
                  <span className={classes.successText}>
                    <ArrowUpward className={classes.upArrowCardCategory} /> 2.67
                  </span>{" "}
                  En tiempos medios entre reparación.
                </p>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  <AccessTime /> Actualizado hace 4 minutos
                </div>
              </CardFooter>
            </Card>
          </GridItem>
  
          {/* MTBF CHART3 */}
          <GridItem xs={12} sm={12} md={6}>
            <Card chart>
              <CardHeader color="success">
                <ChartistGraph
                  className="ct-chart"
                  data={mtbfdiarioChart.data}
                  type="Line"
                  options={mtbfdiarioChart.options}
                  listener={mtbfdiarioChart.animation}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>MTBF Diario</h4>
                <p className={classes.cardCategory}>
                  <span className={classes.successText}>
                    <ArrowUpward className={classes.upArrowCardCategory} /> 169.23
                  </span>{" "}
                  En tiempos medio entre fallas.
                </p>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  <AccessTime /> Actualizado hace 4 minutos
                </div>
              </CardFooter>
            </Card>
          </GridItem>
  
          {/* Cantidad de averias y horas de mantencion CHART2 */}
          <GridItem xs={12} sm={12} md={6}>
            <Card chart>
              <CardHeader color="danger">
                <ChartistGraph
                  className="ct-series-a ct-bar"
                  data={hrsmantencionChart.data}
                  type="Bar"
                  options={hrsmantencionChart.options}
                  color="white"
                  //responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                  //listener={emailsSubscriptionChart.animation}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Horas totales de mantención</h4>
                <p className={classes.cardCategory}>
                <span>458,19 hrs</span>{" "}
                   en total del mes.
                   </p>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  <AccessTime /> Actualizado hace 4 minutos
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          
        </GridContainer>
      </div>
    )
  }
  else{
    return(
    <TableList/>
    )
  }
}
