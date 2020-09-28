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
// @material-ui/icons
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";
import { FormControl, InputLabel, Select, MenuItem, Radio, FormLabel, FormControlLabel } from "@material-ui/core";

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
import stylesRadio from "assets/jss/material-dashboard-react/checkboxAdnRadioStyle.js";

import { Bar, Pie, Line } from 'react-chartjs-2';
import { tiposMantencion, tiposComponentes,eventosMantenciones,disponibilidadanual,mttranual,mtbfanual,mtbmeanual } from "API/DM";

const useStyles = makeStyles(styles);
const useStylesRadio = makeStyles(stylesRadio);

export default function DashboardHistorico(props) {

  const classes = useStyles();
  const classesRadio = useStylesRadio();
  const [month, setMonth] = React.useState('1');
  const [year, setYear] = React.useState('2019');
  const [RadioValueFilter, setRadioValueFilter] = React.useState("b");

  const [DataTipo, setDataTipo] = React.useState(0,0,0);
  const [DataEvento, setDataEvento] = React.useState(0,0,0);
  const [DataDisponibilidad, setDataDisponibilidad] = React.useState([]);
  const [DataDisponibilidadAnual, setDataDisponibilidadAnual] = React.useState(0);
  const [DataMTTR, setDataMTTR] = React.useState([]);
  const [DataMTBF, setDataMTBF] = React.useState([]);
  const [DataMTBME, setDataMTBME] = React.useState([]);
  const [DataComponente, setDataComponente] = React.useState(
    {
      Programadas:[0,0,0,0],
      NoProgramadas:[0,0,0,0]
    }
  );

  React.useEffect(()=>{
    setDatos()
  }
  ,[]); 
  const setDatos = async ()=>{

    //DATOS Tipos de mantencion HRS
    var datosTipos = await tiposMantencion(RadioValueFilter === "a" ? month : year)
    .then((res)=>{
        setDataTipo([Math.round(res.Total),Math.round(res.Mecanica),Math.round(res.Electrica)]);
        //console.log(res.Mecanica)
      return res;
    }).catch((error) => console.log(error));

    //DATOS componentes de mantencion HRS 
    var datosComponentes = await tiposComponentes(RadioValueFilter === "a" ? month : year)
    .then((res)=>{
        var values= {Programadas:[res.Comp1[1],res.Comp2[1],res.Comp3[1],res.Comp4[1]],
          NoProgramadas: [res.Comp1[2],res.Comp2[2],res.Comp3[2],res.Comp4[2]]
        };
        // console.log(values)
        setDataComponente(values);
      return res;
    }).catch((error) => console.log(error));

    //DATOS eventos de mantencion HRS 
    var datosEventos = await eventosMantenciones(RadioValueFilter === "a" ? month : year)
    .then((res)=>{
        var values= res;
        //console.log(values);
        setDataEvento([values.Totales,values.Programadas,values.NoProgramadas]);
      return res;
    }).catch((error) => console.log(error));
    
    //DATOS Disponibilidad
    var datosDisponibilidad = await disponibilidadanual(year)
    .then((res)=>{
        var values= res;
        //console.log(values);
        setDataDisponibilidad(values);
      return res;
    }).catch((error) => console.log(error));
  
    //DATOS MTTR
    var datosMTTR = await mttranual(year)
    .then((res)=>{
        var values= res;
        //console.log(values);
        setDataMTTR(values);
      return res;
    }).catch((error) => console.log(error));

    //DATOS MTBF
    var datosMTBF = await mtbfanual(year)
    .then((res)=>{
        var values= res;
        //console.log(values);
        setDataMTBF(values);
        setDataDisponibilidadAnual(getDisponibilidadAnual());
      return res;
    }).catch((error) => console.log(error));

    //DATOS MTBME
    var datosMTBME = await mtbmeanual(year)
    .then((res)=>{
        var values= res;
        //console.log(values);
        setDataMTBME(values);
        //setDataDisponibilidadAnual(getDisponibilidadAnual());
      return res;
    }).catch((error) => console.log(error));

  }

  const handleChange = (event,type) => { 
    event.target.value<1990 ?
    setMonth(event.target.value)
    :
    setYear(event.target.value);
  };
  const getDisponibilidadAnual = () => {
    let count = DataDisponibilidad.length;
    let values = DataDisponibilidad.reduce((previous, current) => current += previous);
    //console.log(values);
    values /= count;
    return (values)
  }
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
              <FormControlLabel
                value="Seleccionar Mes"
                control={
                  <Radio
                    checked={RadioValueFilter === "a"}
                    onChange={() => setRadioValueFilter("a")}
                    value="a" 
                    name="radio button Month"
                    aria-label="A"
                    icon={<FiberManualRecord className={classesRadio.radioUnchecked} />}
                    checkedIcon={<FiberManualRecord className={classesRadio.radioChecked} />}
                    classes={{
                      checked: classesRadio.radio
                    }}
                  />
              }
                label="Seleccionar Mes"
                labelPlacement="end"
              />
              <FormControlLabel
                value="Seleccionar Año"
                control={
                  <Radio
                    checked={RadioValueFilter === "b"}
                    onChange={() => setRadioValueFilter("b")}
                    value="b"
                    name="radio button Year"
                    aria-label="B"
                    icon={<FiberManualRecord className={classesRadio.radioUnchecked} />}
                    checkedIcon={<FiberManualRecord className={classesRadio.radioChecked} />}
                    classes={{
                      checked: classesRadio.radio
                    }}
                  />
                }
                label="Seleccionar Año"
                labelPlacement="end"
              />
              </FormControl>   
              {(RadioValueFilter=="a") ?
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
                :
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
              }
              <Button type="button" color="primary" className={classes.BtnFiltroWidth} onClick={()=>{setDatos()}}>Buscar</Button>
            </CardBody>
          </Card>
       </GridItem>

        {/* ////////////DISPONIBILIDAD CHART1 */}
        <GridItem xs={12} sm={12} md={6}>
          <Card chart>
            <CardHeader >
              {/* <ChartistGraph
                className="ct-chart"
                data={disp_histChart(DataDisponibilidad).data}
                type="Line"
                options={disp_histChart.options}
                listener={disp_histChart.animation}
              /> */}
              <Line data={disp_histChart({DataDisponibilidad,RadioValueFilter})} options={disp_histChart.options}/>
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Disponibilidad Historica</h4>
              <p className={classes.cardCategory}>
                <span className={classes.successText}>
                <ArrowUpward className={classes.upArrowCardCategory} /> 
                {Math.round(DataDisponibilidadAnual)}%
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
            <CardHeader>
              {/* <ChartistGraph
                className="ct-chart"
                data={mttr_histChart.data}
                type="Bar"
                options={mttr_histChart.options}
                responsiveOptions={mttr_histChart.responsiveOptions}
                listener={mttr_histChart.animation}
              /> */}
            <Bar data={mttr_histChart(DataMTTR)}/>
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>MTTR Anual</h4>
              <p className={classes.cardCategory}>Tiempo medio entre reparaciones mensuales de {year}</p>
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
            <CardHeader >
              {/* <ChartistGraph
                className="ct-chart"
                data={mtbf_histChart.data}
                type="Bar"
                options={mtbf_histChart.options}
                responsiveOptions={mtbf_histChart.responsiveOptions}
                listener={mtbf_histChart.animation}
              /> */}
            <Bar data={mtbf_histChart(DataMTBF)}/>
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>MTBF Anual</h4>
              <p className={classes.cardCategory}>Tiempo medio entre fallas mensuales de {year}</p>
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
            <CardHeader>
              {/* <ChartistGraph
                className="ct-chart"
                data={mtbfme_histChart.data}
                type="Bar"
                options={mtbme_histChart.options}
                responsiveOptions={mtbme_histChart.responsiveOptions}
                listener={mtbme_histChart.animation}
              /> */}
            <Bar data={mtbme_histChart(DataMTBME)}/>
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>MTBME Anual</h4>
              <p className={classes.cardCategory}>Tiempo medio entre detenciones mensuales del {year}</p>
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
                <Bar data={averiasChart(DataTipo)} options={{legend: { display: true}}}/>
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
                <Bar data={componentesChart(DataComponente)} options={componentesChart.options}/>
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
              <Pie data={eventMantChart(DataEvento)} options={{legend: { display: false},}} />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Eventos de mantención con más horas</h4>
                <p className={classes.cardCategory}>
                  <span className={classes.successText}>
                    {Math.round(DataEvento[0])} hrs
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
