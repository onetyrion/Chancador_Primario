import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

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

export default function ProfileDetails(props){
    const classes = Styles();
    const datos = ["19.767.283-8","Pepito","Perez Garcia","Planificardor del área de mantenciones","p.garcia@lundinmining.com"];

    return(
        <div className={(window.screen.width>1200) ? classes.widthdiv : null} >
            <Card >
                <CardHeader color="info">
                <h4 className={classes.cardTitleWhite}>Perfil</h4>
                <p className={classes.cardCategoryWhite}>Para actualizar tus datos habla con tu supervisor</p>
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
                            disabled: true,
                            value:datos[0]
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
                            disabled: true,
                            value:datos[1]
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
                            disabled: true,
                            value:datos[2]
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
                            disabled: true,
                            value:datos[3]
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
                            disabled: true,
                            value:datos[4]
                          }}
                    />
                    </GridItem>

                </GridContainer>
                
                </CardBody>
                
                <CardFooter>
                {/* <Button color="info">Guardar Perfil</Button> */}
                </CardFooter>
            </Card>
        </div>
    )
}