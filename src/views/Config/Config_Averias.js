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

//DROPDOWN
import Button from "components/CustomButtons/Button.js";
import CardFooter from "components/Card/CardFooter";
import CustomInput from "components/CustomInput/CustomInput";
import { FormControl, InputLabel, Select, Input, MenuItem, ListItemText, Modal } from "@material-ui/core";
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
  width: (window.screen.width>1200) ? "50%" : "80%",
  backgroundColor: theme.shadows[5],
  overflow:'auto',
  height:(window.screen.width>1200) ? "88%" : "80%",
  //border: '2px solid #9e9e9e',
  //boxShadow: theme.shadows[5],
  //padding: (window.screen.width>1200) ? theme.spacing(2, 4, 3) : null,
},
}));

export default function ConfigAverias() {
  const classes = useStyles();

  //Modal Variables
  const [modalStyle] = React.useState(getModalStyle);
  const classesModal = useStylesModal();
  const [openModalRegister, SetopenModal] = React.useState(false);

  const [selectComponente, setselectComponente] = React.useState("32CV02");
  const [selectCategoria, setselectCategoria] = React.useState("Categoria 1");
  const [selectTipo, setselectTipo] = React.useState("Aguda");
  

  //Forms Variable
  const componentes = ["32CV02","31FE016","Picaroca","31CR01"]
  const categoria = ["Categoria 1","Categoria 2"]
  const tipo = ["Aguda","Croníca","Croníca y Aguda","Sin Clasificar"]

  const handleOpen = () => {
    SetopenModal(true);
  };

  const handleClose = () => {
    SetopenModal(false);
  };
  const handleChange = (event) => {
    console.log(event)
    switch (event.target.name) {
      case "ComponenteValue":      
        setselectComponente(event.target.value);
        break;
      case "CategoriaValue":      
        setselectCategoria((event.target.value));
        break;   
      case "tipoValue":      
        setselectTipo((event.target.value));
        break;            
      default:
        alert("Ha ocurrido un error: HandleChange")
        break;
    }
  };

  const bodyModal = (
    <div style={modalStyle} className={classesModal.paper}> 
      <Card style={{}}>
        <CardHeader color="primary">
          <h4 className={classes.cardTitleWhite}>Registrar una fallas de componentes</h4>
          <p className={classes.cardCategoryWhite}>
            
          </p>
        </CardHeader>
        <CardBody>
      <GridContainer>
        {/* //Nombre Falla*/}
        <GridItem xs={12} sm={12} md={6}>
        <CustomInput
            labelText="Nombre de la falla"
            id="nameComponente"
            formControlProps={{
            fullWidth: true
            }}
        />
        </GridItem>
        {/* //Maquinaria */}
        <GridItem xs={12} sm={12} md={6}>
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
        {/* //Componente */}
        <GridItem xs={12} sm={12} md={6} style={{marginTop:"18px"}}>
        <FormControl fullWidth={true}>
          <InputLabel id="Estado-label">Componente Afectado</InputLabel>
          <Select
            name="ComponenteValue"
            labelId="Coponente-label"
            id="Componente"
            value={selectComponente}
            onChange={handleChange}
            input={<Input />}
          >
            {componentes.map((value,index) => 
              <MenuItem  key={index} value={value}>
                <ListItemText primary={value} />
              </MenuItem>
            )}
          </Select>
        </FormControl>
        </GridItem>
        {/* //Categoria */}
        <GridItem xs={12} sm={12} md={6} style={{marginTop:"18px"}}>
        <FormControl fullWidth={true}>
          <InputLabel id="Categoria-label">Categoría de la falla</InputLabel>
          <Select
            name="CategoriaValue"
            labelId="Categoria-label"
            id="Categoria"
            value={selectCategoria}
            onChange={handleChange}
            input={<Input />}
          >
            {categoria.map((value,index) => 
              <MenuItem  key={index} value={value}>
                <ListItemText primary={value} />
              </MenuItem>
            )}
          </Select>
        </FormControl>
        </GridItem>
        {/* //Tipo */}
        <GridItem xs={12} sm={12} md={12} style={{marginTop:"18px"}}>
        <FormControl fullWidth={true}>
          <InputLabel id="tipo-label">Tipo de falla</InputLabel>
          <Select
            name="tipoValue"
            labelId="tipo-label"
            id="tipo"
            value={selectTipo}
            onChange={handleChange}
            input={<Input />}
          >
            {tipo.map((value,index) => 
              <MenuItem  key={index} value={value}>
                <ListItemText primary={value} />
              </MenuItem>
            )}
          </Select>
        </FormControl>
        </GridItem>
        {/* //Descripcion */}
        <GridItem xs={12} sm={12} md={12}>
        <CustomInput
            labelText="Descripición"
            id="descripcion"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
            }}
        />
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
            <h4 className={classes.cardTitleWhite}>Gestión de Averías</h4>
            <p className={classes.cardCategoryWhite}>
              
            </p>
          </CardHeader>
          <CardBody>
            <Table 
              tableHeaderColor="primary"
              tableHead={["ID","Falla","Componente","Categoría","Descripición","Tipo","Acción"]}
              tableData={[
                ["01","Cambio de Poste","32CV02","Cat.1","Rotura del modulo 4","Aguda","Modificar / Borrrar"],
                ["02","Reparación controlador Eléctricio","31FE016","Cat.2","Fusible quemado","Croníca","Modificar / Borrrar"],
                ["03","Sistema de Diluvio CV02","32CV02","Cat.1","Falla modulo 2","Croníca y Aguda","Modificar / Borrrar"],
                ["04","Limpieza","Picaroca","Cat.1","Lubricación, Limpieza comp.321","Sin Clasificar","Modificar / Borrrar"],
              ]}
            />
          </CardBody>
          <CardFooter>
            <Button color="primary" onClick={handleOpen}>Añadir Averías</Button>
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
