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
import CustomInput from "components/CustomInput/CustomInput.js";

function getModalStyle() {
    const top = 60 ;
    const left = 60;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
}
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

const useStylesModal = makeStyles((theme) => ({
paper: {
  position: 'absolute',
  width: (window.screen.width>1200) ? "50%" : "80%",
  backgroundColor: theme.palette.background.paper,
  overflow:'scroll',
  height:(window.screen.width>1200) ? "90%" : "80%",
  border: '2px solid #9e9e9e',
  boxShadow: theme.shadows[5],
  padding: (window.screen.width>1200) ? theme.spacing(2, 4, 3) : null,
},
}));



export default function ProfileAccounts(props){
    const classes = useStyles();
    const [openModalRegister, SetopenModal] = React.useState(false);
    const classesModal = useStylesModal();
    const [modalStyle] = React.useState(getModalStyle);

    const handleOpen = () => {
        SetopenModal(true);
      };
    
      const handleClose = () => {
        SetopenModal(false);
      };

      const modal = (
        <div style={modalStyle} className={classesModal.paper}> 
        <Card >
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Crear un nuevo usuario</h4>
            <p className={classes.cardCategoryWhite}>
              
            </p>
          </CardHeader>
          <CardBody>
                <GridContainer>
                    {/* //RUT */}
                    <GridItem xs={12} sm={12} md={3}>
                    <CustomInput
                        labelText="Rut"
                        id="rut"
                        formControlProps={{
                        fullWidth: true
                        }}
                        inputProps={{
                            
                          }}
                    />
                    </GridItem>
                    {/* //NOMBRE */}
                    <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                        labelText="Nombre"
                        id="first-name"
                        formControlProps={{
                        fullWidth: true
                        }}
                        inputProps={{
                            
                          }}
                    />
                    </GridItem>
                    {/* //APELLIDO */}
                    <GridItem xs={12} sm={12} md={5}>
                    <CustomInput
                        labelText="Apellido"
                        id="last-name"
                        formControlProps={{
                        fullWidth: true
                        }}
                        inputProps={{
                            
                          }}
                    />
                    </GridItem>
                </GridContainer>
                <GridContainer>
                    {/* //CARGO */}
                    <GridItem xs={12} sm={12} md={6}>
                    <CustomInput
                        labelText="Cargo"
                        id="type"
                        formControlProps={{
                        fullWidth: true
                        }}
                        inputProps={{
                            
                          }}
                    />
                    </GridItem>
                    {/* //CORREO ELECTRONICO */}
                    <GridItem xs={12} sm={12} md={6}>
                    <CustomInput
                        labelText="Dirección de correo"
                        id="email-address"
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
            <Button color="primary">Añadir Mantención</Button>
          </CardFooter>
        </Card>          
    </div>
  );
    
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
                        <CustomTable 
                            tableHeaderColor="primary"
                            tableHead={["Nombre","Cargo","Correo","Estado","Acción"]}
                            tableData={[
                                ["Michael Puelle","Project Manager","Michael.Puelle@inacapmail.cl","Activa","Modificar/Borrar"],
                                ["Kevin Muñoz","Analista","Kevin.munoz11@inacapmail.cl","Activa","Modificar/Borrar"],
                                ["Diego Tapia","Desarrollador","Diego.tapia32@inacapmail.cl","Activa","Modificar/Borrar"],
                            ]}
                            />
                        </CardBody>
                        <CardFooter>
                        <Button color="primary" onClick={handleOpen}>Añadir Usuario</Button>
                        </CardFooter>
                    </Card>
                </GridItem>
                
            </GridContainer>            
            <Modal 
                open={openModalRegister}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description">
                {modal}
            </Modal>
        </div>
    )
}