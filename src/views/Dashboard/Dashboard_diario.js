import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
// @material-ui/icons
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import { Doughnut} from 'react-chartjs-2';


import {
  dailySalesChart,
  emailsSubscriptionChart,
  mttrdiarioChart,
  mtbfdiarioChart,
  hrsmantencionChart,
  dispDiaria_metas,
  mttrDiaria_metas,
  mtbfDiaria_metas
} from "variables/charts.js";
//import Dashboard_diario from "views/Dashboard/Dashboard_diario.js";
import TableList from "views/TableList/TableList";

const useStyles2 = makeStyles(styles);

export default function DashboardDiario(props) {
  
  const classes = useStyles2();
  //console.log(super(props))
  if (!props.droppanel) {
    return (
      <div className={(window.screen.width<500) ? classes.DivWidth : null}>
        <GridContainer className={(window.screen.width<500) ? classes.Conteiner: null} >

          {/* Disponibilidad diaria vs pom CHART1 */}
          <GridItem xs={12} sm={12} md={12}>
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

          <GridItem xs={12} sm={12} md={4}>
            <Card chart>
              <CardHeader>
              <Doughnut data={dispDiaria_metas} options={{circumference: (1.0 * Math.PI), rotation:(1 * Math.PI),legend: { display: false},}} />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Disponibilidad Diaria</h4>
                <p className={classes.cardCategory}>
                  <span className={classes.successText}>
                    <ArrowUpward className={classes.upArrowCardCategory} /> 6%
                  </span>{" "}
                  Delta | 94% POM | 100% Actual
                </p>
              </CardBody>
            </Card>
          </GridItem>          
          <GridItem xs={12} sm={12} md={4}>
            <Card chart>
              <CardHeader>
              <Doughnut data={dispDiaria_metas} options={{circumference: (1.0 * Math.PI), rotation:(1 * Math.PI),legend: { display: false},}} />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Disponibilidad Mensual</h4>
                <p className={classes.cardCategory}>
                  <span className={classes.successText}>
                    <ArrowUpward className={classes.upArrowCardCategory} /> 6%
                  </span>{" "}
                  Delta | 94% Forecast | 100% Actual
                </p>
              </CardBody>
            </Card>
          </GridItem>          
          <GridItem xs={12} sm={12} md={4}>
            <Card chart>
              <CardHeader>
              <Doughnut data={dispDiaria_metas} options={{circumference: (1.0 * Math.PI), rotation:(1 * Math.PI),legend: { display: false},}} />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Disponibilidad Anual</h4>
                <p className={classes.cardCategory}>
                  <span className={classes.successText}>
                    <ArrowUpward className={classes.upArrowCardCategory} /> 6%
                  </span>{" "}
                  Delta | 94% Budget | 100% Actual
                </p>
              </CardBody>
            </Card>
          </GridItem>          
  
          {/* MTTR diario CHART3 */}
          <GridItem xs={12} sm={12} md={12}>
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

          <GridItem xs={12} sm={12} md={6}>
            <Card chart>
              <CardHeader>
              <Doughnut data={mttrDiaria_metas} options={{circumference: (1.0 * Math.PI), rotation:(1 * Math.PI),legend: { display: false} }} />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>MTTR Mensual</h4>
                <p className={classes.cardCategory}>
                  <span className={classes.dangerText}>
                    <ArrowDownwardIcon className={classes.upArrowCardCategory} /> -1.5
                  </span>{" "}
                  Delta | 1.2 Budget | 2.7 Actual
                </p>
              </CardBody>
            </Card>
          </GridItem>          
          <GridItem xs={12} sm={12} md={6}>
            <Card chart>
              <CardHeader>
              <Doughnut data={mttrDiaria_metas} options={{circumference: (1.0 * Math.PI), rotation:(1 * Math.PI),legend: { display: false},}} />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>MTTR Anual</h4>
                <p className={classes.cardCategory}>
                  <span className={classes.dangerText}>
                    <ArrowDownwardIcon className={classes.upArrowCardCategory} /> -1.5
                  </span>{" "}
                  Delta | 1.2 Budget | 2.7 Actual
                </p>
              </CardBody>
            </Card>
          </GridItem>          
             
    
          {/* MTBF CHART3 */}
          <GridItem xs={12} sm={12} md={12}>
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

          <GridItem xs={12} sm={12} md={6}>
            <Card chart>
              <CardHeader>
              <Doughnut data={mtbfDiaria_metas} options={{circumference: (1.0 * Math.PI), rotation:(1 * Math.PI),legend: { display: false} }} />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>MTBF Mensual</h4>
                <p className={classes.cardCategory}>
                  <span className={classes.successText}>
                    <ArrowUpward className={classes.upArrowCardCategory} /> 59
                  </span>{" "}
                  Delta | 110 Budget | 169 Actual
                </p>
              </CardBody>
            </Card>
          </GridItem>          
          <GridItem xs={12} sm={12} md={6}>
            <Card chart>
              <CardHeader>
              <Doughnut data={mtbfDiaria_metas} options={{circumference: (1.0 * Math.PI), rotation:(1 * Math.PI),legend: { display: false},}} />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>MTBF Anual</h4>
                <p className={classes.cardCategory}>
                  <span className={classes.successText}>
                    <ArrowUpward className={classes.upArrowCardCategory} /> 59
                  </span>{" "}
                  Delta | 110 Budget | 169 Actual
                </p>
              </CardBody>
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
