import React from "react";
// @material-ui/core components
import { makeStyles  } from "@material-ui/core/styles";
import { Modal, Select, InputLabel, FormControl, MenuItem, Input, ListItemText } from "@material-ui/core";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

//DROPDOWN
import Button from "components/CustomButtons/Button.js";
import CardFooter from "components/Card/CardFooter";
import CustomInput from "components/CustomInput/CustomInput";

//TABLE
import MaterialTable from "material-table";
import { localization } from "variables/language";

//NOTIFICATION
import { notify } from 'react-notify-toast';

//API
import dataUsersAPI from 'API/Transc/componente';
import {PutUsersAPI,CreateUsersAPI,DeleteUsersAPI} from 'API/Users';

// import dataComponentsAPI from 'API/Transc/componente'; 

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
function getModalStyle() {
  const top = 60 ;
  const left = 60;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}
const useStylesModal = makeStyles((theme) => ({
paper: {
  position: 'absolute',
  width: (window.screen.width>1200) ? "30%" : "80%",
  backgroundColor: theme.shadows[5],
  //overflow:'scroll',
  height:(window.screen.width>1200) ? "65%" : "80%",
  //border: '2px solid #9e9e9e',
  //boxShadow: theme.shadows[5],
  //padding: (window.screen.width>1200) ? theme.spacing(2, 4, 3) : null,
},
}));
var Data = [ {
  "ID": "",
  "Maquinaria": "",
  "Componente": "",
  "Estado": true,
}];
export default function ConfigMaquinarias() {
  const classes = useStyles();  
  const customInput = (props)=>{
    return(
    <Input
      type="text"
      value={props.value ? props.value : ""}
      onChange={e => props.onChange(e.target.value)}
    />
  )}
  const [dataUsers,SetdataUsers] = React.useState(Data);
  const [columns] = React.useState([ 
    {"title":"ID","field":"Id_componente",editable: 'onAdd',editComponent:customInput},
    {"title":"Maquinaria","field":"Id_maquinaria",editComponent:customInput},
    {"title":"Componente","field":"Denominacion",editComponent:customInput},
    {"title":"Estado","field":"Estado",
    lookup: { true: "Activa", false: 'Desactivada' }},
  ]);
  const putUsers = PutUsersAPI;
  const usersAPI = dataUsersAPI;
  
  //Modal Variables
  const [modalStyle] = React.useState(getModalStyle);
  const [openModalRegister, SetopenModal] = React.useState(false);
  const [selectEstado, setSelectEstado] = React.useState("true");
  const classesModal = useStylesModal();

  const handleOpen = () => {
    SetopenModal(true);
  };

  const handleClose = () => {
    SetopenModal(false);
  };
  const handleChange = (event) => {
    console.log(event)
    switch (event.target.name) {
      case "EstadoValue":      
        setSelectEstado(event.target.value);
        break;           
      default:
        alert("Ha ocurrido un error: HandleChange")
        break;
    }
  };

  const setDatos = async ()=>{
    var datos = await usersAPI()
    .then((res)=>res)
    .catch((error) => console.log(error));
    SetdataUsers(datos);
  };
  React.useEffect(()=>{
    setDatos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]); 

  const rowAdd = (newData)=>(
    new Promise((resolve, reject) => {
      setTimeout(() => {
        CreateUsersAPI(newData)
        .then((value)=>{
          if (value.errores) {
            notify.show(`${value.errores}`,'error',5000);
          }else{
            SetdataUsers([...dataUsers, newData]);
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
        const dataUpdate = [...dataUsers];
        const index = oldData.tableData.id;
        dataUpdate[index] = newData;
        //set on db
        const msg = putUsers(dataUpdate[index]);
        msg.then((values)=>{
          //alert("Cambiado con exito")                    
          //set on state
          SetdataUsers([...dataUpdate]);
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
      const dataDelete = [...dataUsers];
      const index = oldData.tableData.id;
      dataDelete.splice(index, 1);
      SetdataUsers([...dataDelete]);
      //set on db
      DeleteUsersAPI(oldData.Rut)
      // console.log(oldData.Rut);
      resolve()
    }, 0)
  })
)
  

  const bodyModal = (
    <div style={modalStyle} className={classesModal.paper}> 
      <Card >
        <CardHeader color="primary">
          <h4 className={classes.cardTitleWhite}>Registrar una nueva maquinaria</h4>
          <p className={classes.cardCategoryWhite}>
            
          </p>
        </CardHeader>
        <CardBody>
      <GridContainer>
        {/* //Componente */}
        <GridItem xs={12} sm={12} md={12}>
        <CustomInput
            labelText="Nombre de componente"
            id="nameComponente"
            formControlProps={{
            fullWidth: true
            }}
        />
        </GridItem>
        {/* //Maquinaria */}
        <GridItem xs={12} sm={12} md={12}>
        <CustomInput
            labelText="Maquinaria"
            id="maquinaria"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              disabled: true,
              value:"Chancador Primario"
            }}
        />
        </GridItem>
        {/* //Estado */}
        <GridItem xs={12} sm={12} md={12} style={{marginTop:"18px"}}>
        <FormControl fullWidth={true}>
          <InputLabel id="Estado-label">Estado del Componente</InputLabel>
          <Select
            name="EstadoValue"
            labelId="Estado-label"
            id="Estado"
            value={selectEstado}
            onChange={handleChange}
            input={<Input />}
          >
            <MenuItem value={"true"}>
              <ListItemText primary={"Habilitado"} />
            </MenuItem>
            <MenuItem value={"false"}>
              <ListItemText primary={"No habilitado"} />
            </MenuItem>
          </Select>
        </FormControl>
        </GridItem>
      </GridContainer>
      </CardBody>
          <CardFooter>
            <Button color="primary">Añadir Componente</Button>
          </CardFooter>
        </Card>          
    </div>
  );

  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card >
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Gestión de Maquinarias</h4>
            <p className={classes.cardCategoryWhite}>
              
            </p>
          </CardHeader>
          <CardBody>
            <MaterialTable 
              title=""
              data={dataUsers}
              // columns={columns}
              columns={columns}
              parentChildData={(row, rows) => rows.find(a => console.log())}
              editable={{
                onRowAdd: rowAdd,                    
                onRowUpdate: rowUpdate,
                onRowDelete: rowDelete
                }}
              localization={localization}
              />
            {/* <Table 
              tableHeaderColor="primary"
              tableHead={["ID","Maquinaria","Componente","Estado","Acción"]}
              tableData={[
                ["01","Chancador Primario","32CV02","Vigente","Modificar / Borrrar"],
                ["02","Chancador Primario","31FE016","Vigente","Modificar / Borrrar"],
                ["03","Chancador Primario","31CR01","Vigente","Modificar / Borrrar"],
                ["04","Chancador Primario","Picaroca","Vigente","Modificar / Borrrar"],
                ["05","Chancador Primario","32CV02","Vigente","Modificar / Borrrar"]
              ]}
            /> */}
          </CardBody>
          <CardFooter>
            <Button color="primary" onClick={handleOpen}>Añadir Maquinaria</Button>
          </CardFooter>
        </Card>
      </GridItem>
      <Modal open={openModalRegister}
        name="closeModal"
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description">
          {bodyModal}
      </Modal>
   </GridContainer>
  );
}
