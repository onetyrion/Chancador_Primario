import React from "react";
// @material-ui/core components
import { makeStyles  } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import { FormControl, InputLabel, Select, ListItemText, Checkbox, Input } from "@material-ui/core";

//DROPDOWN
import MenuItem from "@material-ui/core/MenuItem";
import Button from "components/CustomButtons/Button.js";
import CardFooter from "components/Card/CardFooter";
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
  },  
  formControl: {
    margin: 10,
    minWidth: 200,
    maxWidth: 300,
  },
  filtrosbox:{
    width: "70%",
    margin: "auto",
    display: "inline"
  },
};

const useStyles = makeStyles(styles);

const namesColumn = [
  "Fecha",
  "Tipo",
  "Evento",
  "Componente",
  "Duración",
  "Eventos Especiales",
  "Descripción",
  "Hrs Programadas",
  "Hrs No Programadas",
  "Eventos Programados",
  "Eventos No Programados",
  "OT",
  "RFCA",
  "Área",
];

const meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Dicembre"
]
export default function DetencionesMantenciones() {
  const classes = useStyles();

  const [ColumnName, setColumnName] = React.useState(["Fecha"]);
  const [Mes, setMes] = React.useState(meses[new Date().getMonth()]);
  const handleChangeColumn = (event) => {
    setColumnName(event.target.value);
  };
  const handleChangeMes = (event) => {
    setMes(event.target.value);
  };
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card >
          <CardBody className={classes.filtrosbox}>
            <FormControl className={classes.formControl}>
              <InputLabel id="Chk-Column-label">Selección de Columnas</InputLabel>
              <Select
                labelId="Chk-Column-label"
                id="Chk-Column"
                multiple
                value={ColumnName}
                onChange={handleChangeColumn}
                input={<Input />}
                renderValue={(selected) => ColumnName.length+" Columnas"}
              >
                {namesColumn.map((Column) => (
                  <MenuItem key={Column} value={Column}>
                    <Checkbox checked={ColumnName.indexOf(Column) > -1} />
                    <ListItemText primary={Column} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>    
            <FormControl className={classes.formControl}>
              <InputLabel id="Select-Month-label">Mes a buscar</InputLabel>
              <Select
                labelId="Select-Month-label"
                id="Select-Month"
                //multiple
                value={Mes}
                onChange={handleChangeMes}
                input={<Input />}
                renderValue={(selected) => Mes}
              >
                {meses.map((Mes) => (
                  <MenuItem key={Mes} value={Mes}>
                    <ListItemText primary={Mes} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>                       
            <FormControl className={classes.formControl}>
            <Button  type="button" color="primary"> Buscar</Button>  
            </FormControl> 
          </CardBody>
        </Card>
      </GridItem>
      
      <GridItem xs={12} sm={12} md={12}>
        <Card >
          <CardHeader color="warning">
            <h4 className={classes.cardTitleWhite}>Detenciones del Chancador Priamario</h4>
            <p className={classes.cardCategoryWhite}>
              
            </p>
          </CardHeader>
          <CardBody>
            <Table 
              tableHeaderColor="warning"
              tableHead={["Fecha","Pieza","Ev. SP","Avería","Tipo","Hrs Progr","Hrs No Prog", "Event Prog", "Event No Prog", "RFCA"]}
              tableData={[
                ["12-01-20","32CV02","1","Reparación","Eléctrica","0","1.77","0","1","0"],
                ["12-01-20","32CV02","1","Mant. Prog","Mecánica","8.25","0","1","0","0"],
                ["12-01-20","32CV02","1","Reparación","Eléctrica","0","1.77","0","1","0"],
                ["12-01-20","32CV02","1","Reparación","Mecánica","0","1.77","0","1","0"],
                ["12-01-20","32CV02","1","Reparación","Eléctrica","0","1.77","0","1","0"],
              ]}
            />
          </CardBody>
          <CardFooter>
            <Button color="warning">Añadir Mantención</Button>
          </CardFooter>
        </Card>
      </GridItem>
      
   </GridContainer>
  );
}
