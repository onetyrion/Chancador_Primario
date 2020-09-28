import React from "react";
// @material-ui/core components
import { makeStyles  } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
// import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

//DROPDOWN
import Button from "components/CustomButtons/Button.js";
import CardFooter from "components/Card/CardFooter";
import { Divider } from "@material-ui/core";
import MaterialTable from "material-table";
import { localization } from "variables/language";


const ColumnName = [
  "KPI",
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
  "Diciembre",
  "2020"
]
const DataRows = [
  ["Disp.","93.4","96.4","92.2","94.4","96.5","87.4","81.1","84.4","92","93","96","92.5","93"],
  ["MTTR", "0","0","0","0","0","4.6","4.6","3.4","3.4","3.4","3.4","4.3","5.6"],
  ["MTBF", "104.6","104.6","104.6","104.6","104.6","67.4","74.2","57.2","65.2","65.2","65.2","89.2","72.5"],
];
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

export default function ConfigMetas() {
  const classes = useStyles();
  const [
    columns,
    setColumns 
    // eslint-disable-next-line
  ] = React.useState(
    ColumnName.map((value,index)=>
    ({title:value,field:(value.toLowerCase()),type:(index===0)? 'string':'numeric',editable:(index===0? "onAdd":"always")})
    )
  );
  
  const [data, setData] = React.useState(              
    DataRows.map((values)=>({
    kpi:values[0].toString(),
    enero:values[1].toString(),
    febrero:values[2].toString(),
    marzo:values[3].toString(),
    abril:values[4].toString(),
    mayo:values[5].toString(),
    junio:values[6].toString(),
    julio:values[7].toString(),
    agosto:values[8].toString(),
    septiembre:values[9].toString(),
    octubre:values[10].toString(),
    noviembre:values[11].toString(),
    diciembre:values[12].toString(),
    2020:values[13].toString()
  })));
  return (
    <GridContainer>
      
      <GridItem xs={12} sm={12} md={12}>
        <Card >
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Gestión de Metas</h4>
            <p className={classes.cardCategoryWhite}>
              
            </p>
          </CardHeader>
          <CardBody>
            <MaterialTable 
            title=""
            columns={columns}
            data={data}
            options={{
              headerStyle:{
                color:"#8e24aa"
              },
              cellStyle:{
                paddingRight:20,
              },
            }}
            editable={{
          isEditable: rowData => rowData.kpi !== "Disp.",
              onRowAdd: newData =>
            new Promise((resolve, reject) => {
            setTimeout(() => {
              setData([...data, newData]);
              
              resolve();
            }, 1000)
          }),
          onRowUpdate: (newData, oldData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              const dataUpdate = [...data];
              const index = oldData.tableData.id;
              dataUpdate[index] = newData;
              setData([...dataUpdate]);

              resolve();
            }, 1000)
          }),
          onRowDelete: oldData =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              const dataDelete = [...data];
              const index = oldData.tableData.id;
              dataDelete.splice(index, 1);
              setData([...dataDelete]);
              
              resolve()
            }, 1000)
          }),
            }}
            localization={localization}
            />
            {/* <Table 
              tableHeaderColor="primary"
              tableHead={["KPI","Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre","2020"]}
              tableData={[
                ["Disponibilidad","93.4","96.4","92.2","94.4","96.5","87.4","81.1","84.4","92","93","96","92.5","93"],
                ["MTTR", "0","0","0","0","0","4.6","4.6","3.4","3.4","3.4","3.4","4.3","5.6"],
                ["MTBF", "104.6","104.6","104.6","104.6","104.6","67.4","74.2","57.2","65.2","65.2","65.2","89.2","72.5"],
              ]}
            /> */}
            <p className={classes.TextGray}>*Las metas mensuales de la disponibilidad corresponde a el promedio de la disponibiliad de los últimos 91 días,por ende, no se puede editar*</p>
          </CardBody>
          <CardFooter className={classes.CardFooterBox}>
            <Divider light/>
            <Button color="primary">Añadir Meta</Button>
          </CardFooter>
        </Card>
      </GridItem>    
   </GridContainer>
  );
}
