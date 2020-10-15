import React from "react";
// @material-ui/core components
import { makeStyles  } from "@material-ui/core/styles";
import { Input } from "@material-ui/core";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
// import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter";

//TABLE
import MaterialTable from "material-table";
import { localization } from "variables/language";

//NOTIFICATION
import { notify } from 'react-notify-toast';

//API
import { PutComponentsAPI, CreateComponentsAPI, DeleteComponentsAPI } from 'API/Transc/componente';
import dataComponentsAPI from 'API/Transc/componente'; 
import dataMaquinariaAPI from "API/Transc/maquinaria";

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

var Data = [ {
  "ID": "",
  "Maquinaria": "",
  "Componente": "",
  "Estado": true,
}];
const customInput = (props)=>{
  return(
  <Input
    type="text"
    value={props.value ? props.value : ""}
    onChange={e => props.onChange(e.target.value)}
  />
)}
export default function ConfigMaquinarias() {
  const classes = useStyles();  
  const [dataComponents,SetdataComponents] = React.useState(Data);
  const [dataMaquinaria,SetdataMaquinaria] = React.useState(Data);
  const [columnsComponents,setColumnsComponents,] = React.useState([]);
  const [columnsMaquinas,setColumnsMaquinas,] = React.useState([]);
  const putComponents = PutComponentsAPI;
  const componentAPI = dataComponentsAPI;
  
  
  React.useEffect(()=>{
    setDatos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]); 
  
  const setDatos = async ()=>{
    var maquinasdata = await dataMaquinariaAPI(); 
    var datos = await componentAPI()
      .then((res)=>res)
      .catch((error) => console.log(error));
      setColumnsComponents([ 
        {"title":"ID","field":"Id_componente",editable: 'never',editComponent:customInput},
        {"title":"Componente","field":"Denominacion",editComponent:customInput},
        {"title":"Maquinaria","field":"Id_maquinaria",lookup: maquinasdata},
        {"title":"Estado","field":"Estado",
        lookup: { true: "Activa", false: 'Desactivada' }},
      ])
    SetdataComponents(datos);
  }

  const rowAdd = (newData)=>(
    new Promise((resolve, reject) => {
      setTimeout(() => {
        CreateComponentsAPI(newData)
        .then((value)=>{
          if (value.errores) {
            notify.show(`${value.errores}`,'error',5000);
          }else{
            // SetdataUsers([...dataUsers, newData]);
            setDatos()
            notify.show('Se ha Añadido con éxito!','success',5000);
          }
          console.log(value)
        })
        resolve();
      }, 0)
    })
  )

  const rowUpdate = (newData, oldData) =>(
    new Promise((resolve, reject) => {
      setTimeout(() => {
        const dataUpdate = [...dataComponents];
        const index = oldData.tableData.id;
        dataUpdate[index] = newData;
        //set on db
        const msg = putComponents(dataUpdate[index]);
        msg.then((value)=>{
          //alert("Cambiado con exito")                    
          //set on state
          // SetdataUsers([...dataUpdate]);
          if (value.errores) {
            notify.show(`Ha ocurrido un error, verifique los datos ingresados`,'error',5000);
          }else{
            // SetdataUsers([...dataUsers, newData]);
            setDatos()
            notify.show('Se ha Modificado con éxito!','success',5000);
          }
        })
        .catch((error)=>{
          notify.show('Ha ocurrido un error, intentelo más tarde.','error',5000);
          console.log(error);
        })                        
        resolve();
      }, 0)
    })
  )

  const rowDelete = (oldData) =>(
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const dataDelete = [...dataComponents];
      const index = oldData.tableData.id;
      dataDelete.splice(index, 1);
      //set on db
      DeleteComponentsAPI(oldData.Id_componente)
      SetdataComponents([...dataDelete]);
      resolve()
    }, 0)
  })
)

  return (
    <GridContainer>
      {/* CRUD COMPONENTS */}
      <GridItem xs={12} sm={12} md={12}>
        <Card >
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Gestión de Componentes</h4>
          </CardHeader>
          <CardBody>
            <MaterialTable 
              title=""
              data={dataComponents}
              columns={columnsComponents}
              parentChildData={(row, rows) => rows.find(a => console.log())}
              editable={{
                onRowAdd: rowAdd,                    
                onRowUpdate: rowUpdate,
                onRowDelete: rowDelete
                }}
              localization={localization}
              />
          </CardBody>
          <CardFooter>
            
          </CardFooter>
        </Card>
      </GridItem>
      {/* CRUD MAQUINARIAS */}
      <GridItem xs={12} sm={12} md={12}>
        <Card >
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Gestión de Maquinarias</h4>
          </CardHeader>
          <CardBody>
            <MaterialTable 
              title=""
              data={dataMaquinaria}
              columns={columnsMaquinas}
              parentChildData={(row, rows) => rows.find(a => console.log())}
              editable={{
                onRowAdd: rowAdd,                    
                onRowUpdate: rowUpdate,
                onRowDelete: rowDelete
                }}
              localization={localization}
              />
          </CardBody>
          <CardFooter>
            
          </CardFooter>
        </Card>
      </GridItem>
   
   </GridContainer>
  );
}
