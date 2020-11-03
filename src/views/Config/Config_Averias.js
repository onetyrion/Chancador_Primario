import React from "react";
// @material-ui/core components
import { makeStyles  } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

//DROPDOWN
import MaterialTable from "material-table";
import { localization } from "variables/language";
import { titlesCategoriaAPI } from "API/Transc/categorias";
import { titlestipofallaAPI } from "API/Transc/tipoFalla";
import { titlesComponenteAPI } from "API/Transc/componente";
import { Input } from "@material-ui/core";
import { dataFallasAPI } from "API/Transc/fallas";
import { CreateFallasAPI } from "API/Transc/fallas";
import { notify } from "react-notify-toast";
import { DeleteFallasAPI } from "API/Transc/fallas";
import { PutFallasAPI } from "API/Transc/fallas";

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
  "Descripción": "",
  "Componente": "",  
  "Categoría": "",
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

export default function ConfigAverias() {
  const classes = useStyles();
  const [loading,setloading] = React.useState(true);
  
  //Modal Variables
  
  const [dataFallas,SetdataFallas] = React.useState(Data);
  const [columnsFallas,setcolumnsFallas,] = React.useState([]);
  
  React.useEffect(()=>{
    setDatos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]); 
  
  const setDatos = async ()=>{
    var fallasdata = await dataFallasAPI();
    var categorias = await titlesCategoriaAPI(); 
    var tipoFalla = await titlestipofallaAPI(); 
    var components = await titlesComponenteAPI(); 
    setcolumnsFallas([ 
      {"title":"ID","field":"Id_falla",editable: 'never',editComponent:customInput},
      {"title":"Descripción","field":"Descripcion_causa",editComponent:customInput},
      {"title":"Categoría","field":"Id_categoria", lookup: categorias},
      {"title":"Tipo","field":"Id_tipo", lookup: tipoFalla},
      {"title":"Componente","field":"Id_componente", lookup: components},
      {"title":"Falla","field":"Falla", lookup: { true: "Activa", false: 'Desactivada' }},
    ]);      
    SetdataFallas(fallasdata);
    setloading(false);
  }

  const rowAdd = (newData)=>(
    new Promise((resolve, reject) => {
      CreateFallasAPI(newData)
        .then((value)=>{
          if (value.errors) {
            notify.show(`Ha ocurrido un error, verifique los datos ingresados`,'error',5000);
          }else{
            setDatos();
            notify.show('Se ha Añadido con éxito!','success',5000);
          }
        })
        resolve();
    })
  )

  const rowUpdate = (newData, oldData) =>(
    new Promise((resolve, reject) => {
      // const dataUpdate = [...dataMaquinaria];
      // const index = oldData.tableData.id;
      // dataUpdate[index] = newData;
      //set on db
      const msg = PutFallasAPI(newData,oldData);
      msg.then((value)=>{
        if (value.errors) {
          notify.show(`Ha ocurrido un error, verifique los datos ingresados`,'error',5000);
        }else{
          setDatos()
          notify.show('Se ha Modificado con éxito!','success',5000);
        }
      })
      .catch((error)=>{
        notify.show('Ha ocurrido un error, intentelo más tarde.','error',5000);
        console.log(error);
      })                       
      resolve();
    })
  )

  const rowDelete = (oldData) =>(
  new Promise((resolve, reject) => {
    DeleteFallasAPI(oldData.Id_falla,oldData.Id_componente)
    .then((value)=>{
      if (JSON.parse(value).errors) {
        notify.show(`Ha ocurrido un error al eliminar el registro`,'error',5000);
      }else{
        setDatos()
        notify.show('Se ha Eliminado con éxito!','warning',5000);
      }
    })
      resolve()
  })
  )

  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card >
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Gestión de Fallas</h4>
          </CardHeader>
          <CardBody>
            <MaterialTable 
              title=""
              data={dataFallas}
              columns={columnsFallas}
              parentChildData={(row, rows) => rows.find(a => console.log())}
              editable={{
                onRowAdd: rowAdd,                    
                onRowUpdate: rowUpdate,
                onRowDelete: rowDelete
                }}
              localization={localization}//LENGUAJE
              />
            {/* <Table 
              tableHeaderColor="primary"
              tableHead={["ID","Falla","Componente","Categoría","Descripción","Tipo","Acción"]}
              tableData={[
                ["01","Cambio de Poste","32CV02","Cat.1","Rotura del modulo 4","Aguda","Modificar / Borrrar"],
                ["02","Reparación controlador Eléctricio","31FE016","Cat.2","Fusible quemado","Croníca","Modificar / Borrrar"],
                ["03","Sistema de Diluvio CV02","32CV02","Cat.1","Falla modulo 2","Croníca y Aguda","Modificar / Borrrar"],
                ["04","Limpieza","Picaroca","Cat.1","Lubricación, Limpieza comp.321","Sin Clasificar","Modificar / Borrrar"],
              ]}
            /> */}
          </CardBody>
        </Card>
      </GridItem>     
   </GridContainer>
  );
}
