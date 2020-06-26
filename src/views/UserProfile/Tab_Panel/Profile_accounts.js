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

const Styles = makeStyles({
    cardCategoryWhite: {
      color: "rgba(255,255,255,.62)",
      margin: "10",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0",
      width:'auto',
    },
    cardTitleWhite: {
      color: "#FFFFFF",
      marginTop: "0px",
      minHeight: "auto",
      fontWeight: "300",
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      marginBottom: "3px",
      textDecoration: "none"
    },
    widthdiv:{width: ((window.screen.width*55)/100)}
  });

export default function ProfileAccounts(props){
    const classes = Styles();
    
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
                        <Button color="primary">Añadir Usuario</Button>
                        </CardFooter>
                    </Card>
                </GridItem>
                
            </GridContainer>            
      
        </div>
    )
}