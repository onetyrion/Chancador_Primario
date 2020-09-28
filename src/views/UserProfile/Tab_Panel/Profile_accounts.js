import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
// import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
// import CustomTable from "components/Table/Table";
// import { Modal } from "@material-ui/core";
// import CustomInput from "components/CustomInput/CustomInput.js";
// import baseURL from "API/configAPI";
// import loginUserAPI from "API/Login";
// import { TokenUser } from "API/configAPI";
// import { getValue } from "API/helpers";
import MaterialTable from "material-table";
import { localization } from "variables/language";

import dataUsersAPI from "API/Users";
import { PutUsersAPI } from "API/Users";
import { DeleteUsersAPI } from "API/Users";
import { CreateUsersAPI } from "API/Users";
import { DeleteLoginAPI } from "API/Login";
import { CreateLoginAPI } from "API/Login";

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
    widthdiv:{width: ((window.screen.width*55)/100)}
  };
  
const useStyles = makeStyles(styles);

var Data = [
  {
      "Rut": "00000000",
      "Nombre": "diego PRUEBA2",
      "Apellidos": "el apellido test2",
      "Correo_electronico": "diego2@gmail.com",
      "Estado": true,
      "Cargo": "Desarrollador",
      "createdAt": "2020-07-13T18:59:57.062Z",
      "updatedAt": "2020-07-14T01:42:16.032Z"
  },
  {
      "Rut": "197672838",
      "Nombre": "diego",
      "Apellidos": "tapia zapata",
      "Correo_electronico": "diego@gmail.com",
      "Estado": true,
      "Cargo": "Desarrollador",
      "createdAt": "2020-07-13T21:17:10.467Z",
      "updatedAt": "2020-07-13T21:17:10.467Z"
  },
  {
      "Rut": "000000001",
      "Nombre": "diego",
      "Apellidos": "tapia zapata",
      "Correo_electronico": "diego@gmail.com",
      "Estado": true,
      "Cargo": "Desarrollador",
      "createdAt": "2020-07-14T01:53:21.447Z",
      "updatedAt": "2020-07-14T01:53:21.447Z"
  }
];

export default function ProfileAccounts(props){
    const classes = useStyles();
    const [dataUsers,SetdataUsers] = React.useState(Data);
    const usersAPI = dataUsersAPI;
    const putUsers = PutUsersAPI;

    React.useEffect(()=>{
      setDatos()
    }
    ,[]); 
    const setDatos = async ()=>{
      var datos = await usersAPI()
      .then((res)=>{
        // console.log(res)
        return res;
      }).catch((error) => console.log(error));

      SetdataUsers(datos);
    }
    
    return(
        <div className={(window.screen.width>1200) ? classes.widthdiv : null}>
          <GridContainer >
            <GridItem xs={12} sm={12} md={12}>
              <Card>
                <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>Gestión de Usuarios</h4>
                <p className={classes.cardCategoryWhite} >Puedes dar de baja o modificar todas las cuentas registradas.</p>
                </CardHeader>
                <CardBody>
                <MaterialTable 
                  title=""
                  data={dataUsers}
                  columns={[
                    {"title":"Rut","field":"Rut",editable: 'onAdd'},
                    {"title":"Nombre","field":"Nombre"},
                    {"title":"Apellidos","field":"Apellidos"},
                    {"title":"Correo","field":"Correo_electronico"},
                    {"title":"Estado","field":"Estado",
                    lookup: { true: "Activa", false: 'Desactivada' }},
                    {"title":"Cargo","field":"Cargo"}]}
                  parentChildData={(row, rows) => rows.find(a => console.log(row.Rut))}
                  editable={{
                    onRowAdd: newData =>
                    new Promise((resolve, reject) => {
                      console.log(newData);
                      setTimeout(() => {
                        CreateUsersAPI(newData)
                        .then(()=>{
                          SetdataUsers([...dataUsers, newData]);
                          alert("Usuario Añadido con exito")
                        })
                        resolve();
                      }, 0)
                    }),                    
                    onRowUpdate: (newData, oldData) =>
                    new Promise((resolve, reject) => {
                      setTimeout(() => {
                        const dataUpdate = [...dataUsers];
                        const index = oldData.tableData.id;
                        dataUpdate[index] = newData;
                        //set on db
                        const msg = putUsers(dataUpdate[index]);
                        msg.then((values)=>{
                          alert("Cambiado con exito")                    
                          //set on state
                          SetdataUsers([...dataUpdate]);
                        })
                        .catch((error)=>{
                          alert("Ha ocurrido un error, intentelo más tarde.");
                          console.log(error);
                        })                        
                        resolve();
                      }, 0)
                    }),
                    onRowDelete: oldData =>
                    new Promise((resolve, reject) => {
                      setTimeout(() => {
                        const dataDelete = [...dataUsers];
                        const index = oldData.tableData.id;
                        dataDelete.splice(index, 1);
                        SetdataUsers([...dataDelete]);
                        //set on db
                        DeleteLoginAPI(oldData.Rut)
                        .then(DeleteUsersAPI(oldData.Rut))

                        // console.log(oldData.Rut);
                        resolve()
                      }, 0)
                    }),
                    }}
                  localization={localization}
                  />
                {/* <CustomTable 
                    tableHeaderColor="primary"
                    tableHead={["Nombre","Cargo","Correo","Estado","Acción"]}
                    tableData={(!dataUsers) ? [[]] :[[]]}
                    /> */}
                </CardBody>
                <CardFooter>
                {/* <Button color="primary" onClick={handleOpen}>Añadir Usuario</Button> */}
                </CardFooter>
              </Card>
            </GridItem>
              
          </GridContainer>     
          
        </div>
    )
}