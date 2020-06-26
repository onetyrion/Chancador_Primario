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
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import CustomInput from "components/CustomInput/CustomInput";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

export default function TableList_dashHistoric() {
  const classes = useStyles();
  const [month, setMonth] = React.useState('1');
  const [year, setYear] = React.useState('2020');
  const handleChange = (event,type) => { 
    event.target.value<1990 ?
    setMonth(event.target.value)
    :
    setYear(event.target.value)
  };

  return (
    <GridContainer>
        {/* {///////////FILTROS} */}
        <GridItem xs={12} sm={12} md={12}>
          <Card>
          <CardHeader color="danger">
            <h4 className={classes.cardTitleWhite}>Filtros</h4>
              <p className={classes.cardCategoryWhite}>
                
              </p>
            </CardHeader>
            <CardBody className={classes.filtrosbox}>            
              <FormControl className={classes.formControl,classes.FiltrosWidth} >
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
              <FormControl className={classes.formControl,classes.FiltrosWidth}>
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
      
   </GridContainer>
  );
}
