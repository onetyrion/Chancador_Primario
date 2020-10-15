import React from "react";
// @material-ui/core components
import { makeStyles  } from "@material-ui/core/styles";
import { Input } from "@material-ui/core";
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
// import { PutComponentsAPI, DeleteComponentsAPI } from 'API/Transc/componente';
import {dataMaquinariaAPI,CreateMaquinariaAPI, DeleteMaquinariaAPI,PutMaquinariaAPI} from "API/Transc/maquinaria";
import {titlesaProductivaAPI} from "API/Transc/areaProductiva";
import {titletipoMaquinariaAPI} from "API/Transc/tipoMaquinaria";

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
  "Nombre": "",
  "Estado": true,  
  "Area": "",
  "Tipo": ""
}];
const customInput = (props)=>{
  return(
  <Input
    type="text"
    value={props.value ? props.value : ""}
    onChange={e => props.onChange(e.target.value)}
  />
)}
export default function TableMaquinarias() {
  const classes = useStyles();  
  const [dataMaquinaria,SetdataMaquinaria] = React.useState(Data);
  const [columnsMaquinas,setColumnsMaquinas,] = React.useState([]);
  const PutMaquinaria = PutMaquinariaAPI;
  
  
  React.useEffect(()=>{
    setDatos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]); 
  
  const setDatos = async ()=>{
    var maquinasdata = await dataMaquinariaAPI(); 
    var titlesAreaProductiva = await titlesaProductivaAPI();
    var titletipoMaquinaria = await titletipoMaquinariaAPI();
    setColumnsMaquinas([ 
      {"title":"ID","field":"Id_maquinaria",editable: 'never',editComponent:customInput},
      {"title":"Nombre","field":"Nombre_maquinaria",editComponent:customInput},
      {"title":"Estado","field":"Estado", lookup: { true: "Activa", false: 'Desactivada' }},
      {"title":"Area","field":"Id_area", lookup: titlesAreaProductiva},
      {"title":"Tipo","field":"Id_tipo", lookup: titletipoMaquinaria},
    ]);      
    SetdataMaquinaria(maquinasdata);
  }

  const rowAdd = (newData)=>(
    new Promise((resolve, reject) => {
      setTimeout(() => {
        CreateMaquinariaAPI(newData)
        .then((value)=>{
          console.log(value)
          if (value.errors) {
            notify.show(`Ha ocurrido un error, verifique los datos ingresados`,'error',5000);
          }else{
            setDatos();
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
        const dataUpdate = [...dataMaquinaria];
        const index = oldData.tableData.id;
        dataUpdate[index] = newData;
        //set on db
        const msg = PutMaquinaria(dataUpdate[index]);
        msg.then((value)=>{
          //alert("Cambiado con exito")                    
          //set on state
          // SetdataUsers([...dataUpdate]);
          if (value.errors) {
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
      const dataDelete = [...dataMaquinaria];
      const index = oldData.tableData.id;
      dataDelete.splice(index, 1);
      //set on db
      DeleteMaquinariaAPI(oldData.Id_maquinaria)
      .then((value)=>{
        if (JSON.parse(value).errors) {
          notify.show(`Ha ocurrido un error al eliminar el registro`,'error',5000);
        }else{
          setDatos()
          notify.show('Se ha Eliminado con éxito!','warning',5000);
        }
      })
      resolve()
    }, 0)
  })
  )

  return (
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
              localization={localization}//LENGUAJE
              />
          </CardBody>
          <CardFooter>
            
          </CardFooter>
        </Card>
  );
}
