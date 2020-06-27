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
import Button from "components/CustomButtons/Button.js";
import TableList1 from "views/TableList/TableList_dashHistoric.js";
import {
  disp_histChart,
  mttr_histChart,
  mtbf_histChart,
  mtbme_histChart,
  averiasChart,
  componentesChart,
  eventMantChart
} from "variables/charts.js";
//import Dashboard_diario from "views/Dashboard/Dashboard_diario.js";
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";

import { Bar, Pie } from 'react-chartjs-2';

const useStyles3 = makeStyles(styles);

export default function DashboardHistorico(props) {

  const classes = useStyles3();
  const [month, setMonth] = React.useState('1');
  const [year, setYear] = React.useState('2020');

  const handleChange = (event,type) => { 
    event.target.value<1990 ?
    setMonth(event.target.value)
    :
    setYear(event.target.value)
  };
  if (!props.droppanel2) {
  return (
    <div className={(window.screen.width<500) ? classes.DivWidth : null}>
      <GridContainer>
        {/* {///////////FILTROS} */}
        <GridItem xs={12} sm={12} md={12}>
          <Card>
          <CardHeader color="danger">
            <h4 className={classes.cardTitleWhite}>Filtros</h4>
              <p className={classes.cardCategoryWhite}>
                
              </p>
            </CardHeader>
            <CardBody className={(window.screen.width>1200) ? classes.filtrosbox : null}>            
              <FormControl className={classes.formControl} >
                <InputLabel id="select-month-historic">Mes</InputLabel>
                <Select
                  labelId="select-month-historic-label"
                  id="select-month-historic"
                  value={month}
                  onChange={handleChange}
                >
                  <MenuItem value={1}>Enero</MenuItem>
                  <MenuItem value={2}>Febrero</MenuItem>
                  <MenuItem value={3}>Marzo</MenuItem>
                  <MenuItem value={4}>Abril</MenuItem>
                  <MenuItem value={5}>Mayo</MenuItem>
                  <MenuItem value={6}>Junio</MenuItem>
                  <MenuItem value={7}>Julio</MenuItem>
                  <MenuItem value={8}>Agosto</MenuItem>
                  <MenuItem value={9}>Septiembre</MenuItem>
                  <MenuItem value={10}>Octubre</MenuItem>
                  <MenuItem value={11}>Noviembre</MenuItem>
                  <MenuItem value={12}>Diciembre</MenuItem>
                </Select>
              </FormControl>
              
              <FormControl className={classes.formControl} >
                <InputLabel id="select-year-historic">Año</InputLabel>
                <Select
                  labelId="select-year-historic"
                  id="select-year-historic"
                  value={year}
                  onChange={handleChange}
                >
                  <MenuItem value={2015}>2015</MenuItem>
                  <MenuItem value={2016}>2016</MenuItem>
                  <MenuItem value={2017}>2017</MenuItem>
                  <MenuItem value={2018}>2018</MenuItem>
                  <MenuItem value={2019}>2019</MenuItem>
                  <MenuItem value={2020}>2020</MenuItem>
                </Select>
              
              </FormControl>
              <Button type="button" color="primary" className={classes.BtnFiltroWidth}>Buscar</Button>
            </CardBody>
          </Card>
       </GridItem>

        {/* ////////////DISPONIBILIDAD CHART1 */}
        <GridItem xs={12} sm={12} md={6}>
          <Card chart>
            <CardHeader color="info">
              <ChartistGraph
                className="ct-chart"
                data={disp_histChart.data}
                type="Line"
                options={disp_histChart.options}
                listener={disp_histChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Disponibilidad Historica</h4>
              <p className={classes.cardCategory}>
                <span className={classes.successText}>
                  <ArrowUpward className={classes.upArrowCardCategory} /> 98%
                </span>{" "}
                Disponibilidad Anual Real.
              </p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> Actualizado hace 4 minutos
              </div>
            </CardFooter>
          </Card>

        </GridItem>
        
        {/* ////////////MTTR CHART2 */}
        <GridItem xs={12} sm={12} md={6}>
          <Card chart>
            <CardHeader color="warning">
              <ChartistGraph
                className="ct-chart"
                data={mttr_histChart.data}
                type="Bar"
                options={mttr_histChart.options}
                responsiveOptions={mttr_histChart.responsiveOptions}
                listener={mttr_histChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>MTTR Anual</h4>
              <p className={classes.cardCategory}>Tiempo medio entre reparaciones mensuales de 20xx</p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> Actualizado hace 4 minutos
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        
        {/* ////////////MTBF CHART3 */}
        <GridItem xs={12} sm={12} md={6}>
          <Card chart>
            <CardHeader color="danger">
              <ChartistGraph
                className="ct-chart"
                data={mtbf_histChart.data}
                type="Bar"
                options={mtbf_histChart.options}
                responsiveOptions={mtbf_histChart.responsiveOptions}
                listener={mtbf_histChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>MTBF Anual</h4>
              <p className={classes.cardCategory}>Tiempo medio entre fallas mensuales de 20xx</p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> Actualizado hace 4 minutos
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        
        {/* ////////////MTBME CHART4 */}
        <GridItem xs={12} sm={12} md={6}>
          <Card chart>
            <CardHeader color="primary">
              <ChartistGraph
                className="ct-chart"
                data={mtbf_histChart.data}
                type="Bar"
                options={mtbme_histChart.options}
                responsiveOptions={mtbme_histChart.responsiveOptions}
                listener={mtbme_histChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>MTME Anual</h4>
              <p className={classes.cardCategory}>Tiempo medio entre detenciones mensuales del 20xx</p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> Actualizado hace 4 minutos
              </div>
            </CardFooter>
          </Card>
        </GridItem>

        {/* Total horas de mantención */}
        <GridItem xs={12} sm={12} md={6}>
            <Card chart>
              <CardHeader>
                <Bar data={averiasChart} options={{legend: { display: false}}}/>
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Horas de Mantención por Tipo de Mantención</h4>
                <p className={classes.cardCategory}>
                  <span className={classes.successText}>
                    <ArrowUpward className={classes.upArrowCardCategory} /> 6%
                  </span>{" "}
                 Más que el periodo anterior
                </p>
              </CardBody>
            </Card>
          </GridItem>          

          {/* COMPONENTES AFECTADOS */}
          <GridItem xs={12} sm={12} md={6}>
            <Card chart>
              <CardHeader>
                <Bar data={componentesChart} options={componentesChart.options}/>
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Horas de Mantención por Componentes Afectados</h4>
                <p className={classes.cardCategory}>
                  <span className={classes.successText}>
                    <ArrowUpward className={classes.upArrowCardCategory} /> 6%
                  </span>{" "}
                 Más que el periodo anterior
                </p>
              </CardBody>
            </Card>
          </GridItem>   
          
          {/* EVENTOS */}
          <GridItem xs={12} sm={12} md={6}>
            <Card chart>
              <CardHeader>
              <Pie data={eventMantChart} options={{legend: { display: false},}} />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Eventos de mantención con más horas</h4>
                <p className={classes.cardCategory}>
                  <span className={classes.successText}>
                    458.19 hrs
                  </span>{" "}
                  en total
                </p>
              </CardBody>
            </Card>
          </GridItem> 
      </GridContainer>

    </div>
  )
  }else{
    return (
       <TableList1/> 
    )
  }
}
