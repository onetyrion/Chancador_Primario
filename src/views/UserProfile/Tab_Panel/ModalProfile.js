import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomTable from "components/Table/Table";
import { Modal } from "@material-ui/core";
import CustomInput from "components/CustomInput/CustomInput";

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
    width: "70%",
    backgroundColor: theme.palette.background.paper,
    overflow:'scroll',
    height:'90%',
    border: '2px solid #9e9e9e',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
},
}));

const modal = (
    <div style={getModalStyle} className={useStylesModal.paper}> 
        <Card >
            <CardHeader color="primary">
            <h4 className={useStyles.cardTitleWhite}>Registrar Detenciones del Chancador Priamario</h4>
            <p className={useStyles.cardCategoryWhite}>
                
            </p>
            </CardHeader>
            <CardBody>
        <GridContainer>
        {/* //Fecha */}
        <GridItem xs={12} sm={12} md={6}>
        <CustomInput
            labelText="Fecha"
            id="fecha"
            formControlProps={{
            fullWidth: true
            }}
        />
        </GridItem>
        {/* //Tipo */}
        <GridItem xs={12} sm={12} md={6}>
        <CustomInput
            labelText="Tipo"
            id="Tipo"
            formControlProps={{
            fullWidth: true
            }}
        />
        </GridItem>
        {/* //Evento */}
        <GridItem xs={12} sm={12} md={6}>
        <CustomInput
            labelText="Evento"
            id="evento"
            formControlProps={{
            fullWidth: true
            }}
        />
        </GridItem>
        {/* //Componente */}
        <GridItem xs={12} sm={12} md={6}>
        <CustomInput
            labelText="Componente"
            id="componente"
            formControlProps={{
            fullWidth: true
            }}
        />
        </GridItem>
            {/* //duracion */}
        <GridItem xs={12} sm={12} md={6}>
        <CustomInput
            labelText="Duración"
            id="duracion"
            formControlProps={{
            fullWidth: true
            }}
        />
        </GridItem>
            {/* //cantidad evento especiales */}
        <GridItem xs={12} sm={12} md={6}>
        <CustomInput
            labelText="Cant. Eventos Especiales"
            id="ev-esp"
            formControlProps={{
            fullWidth: true
            }}
        />
        </GridItem>         
        {/* //hrs programadas */}
        <GridItem xs={12} sm={12} md={3}>
        <CustomInput
            labelText="Hrs programadas"
            id="hrsprogramadas"
            formControlProps={{
            fullWidth: true
            }}
        />
        </GridItem>
            {/* //hrs no programadas */}
        <GridItem xs={12} sm={12} md={3}>
        <CustomInput
            labelText="Hrs No programadas"
            id="hrsnoprogramadas"
            formControlProps={{
            fullWidth: true
            }}
        />
        </GridItem>
        {/* //event no programadas */}
        <GridItem xs={12} sm={12} md={3}>
        <CustomInput
            labelText="Eventos No programados"
            id="evnoprogramadas"
            formControlProps={{
            fullWidth: true
            }}
        />
        </GridItem>        
        {/* //event programadas */}
        <GridItem xs={12} sm={12} md={3}>
        <CustomInput
            labelText="Eventos programados"
            id="evprogramadas"
            formControlProps={{
            fullWidth: true
            }}
        />
        </GridItem>
        {/* //Descripcion */}
        <GridItem xs={12} sm={12} md={6}>
        <CustomInput
            labelText="Descripción"
            id="descripcion"
            formControlProps={{
            fullWidth: true
            }}
        />
        </GridItem> 
        {/* //OT */}
        <GridItem xs={12} sm={12} md={6}>
        <CustomInput
            labelText="OT Relacionada"
            id="ot"
            formControlProps={{
            fullWidth: true
            }}
        />
        </GridItem> 
        {/* //RFCA */}
        <GridItem xs={12} sm={12} md={6}>
        <CustomInput
            labelText="RFCA"
            id="rfca"
            formControlProps={{
            fullWidth: true
            }}
        />
        </GridItem>   
        {/* //Area */}
        <GridItem xs={12} sm={12} md={6}>
        <CustomInput
            labelText="Área"
            id="area"
            formControlProps={{
            fullWidth: true
            }}
        />
        </GridItem> 
        </GridContainer>
        </CardBody>
            <CardFooter>
            <Button color="primary">Añadir Mantención</Button>
            </CardFooter>
        </Card>          
    </div>
    )
    export default Modal;