import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
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

export default function ProfileSecurity(props){
    const classes = Styles();
    const [ setpassword ] = React.useState("");
    const [ setconfirm_password ] = React.useState("");
    const [ setnewPassword ] = React.useState("");
    const [ validError,setvalidError ] = React.useState(["",""]);//ERROR pass /////////// ERROR RUT
    
    const handleChangePassword = async(e)=>{
        switch (e.target.name) {
          case "password":
            (e.target.value.length>0) 
            ? setvalidError([validError[0],""]) 
            : setvalidError([validError[0],"Debe ingresar una contraseña"]);
            setpassword(e.target.value);
            break;
          case "cpassword":
            (e.target.value.length>0 ? setvalidError(["",validError[1]]) : setvalidError(["Debe ingresar una contraseña",validError[1]]));
            setconfirm_password(e.target.value);
            break;
          case "newpassword":
            (e.target.value.length>0 ? setvalidError(["",validError[1]]) : setvalidError(["Debe ingresar una contraseña",validError[1]]));
            setnewPassword(e.target.value);
            break;
          default:
            break;
          }
      }

    const changePassword = async(e)=>{
        alert("Password");
    }

    return(
        <div className={(window.screen.width>1200) ? classes.widthdiv : null}>
            <GridContainer >
                <GridItem xs={12} sm={12} md={12}>
                    <Card>
                        <CardHeader color="warning">
                        <h4 className={classes.cardTitleWhite}>Cambia la contraseña</h4>
                        <p className={classes.cardCategoryWhite} >Es una buena idea utilizar una contraseña segura que no esté utilizando en otro lugar.</p>
                        </CardHeader>
                        <CardBody>
                        <GridContainer>
                            {/* //Actual Contraseña */}
                            <GridItem xs={12} sm={12} md={5}>
                                <CustomInput
                                    labelText="Actual Contraseña"
                                    id="pass_current"
                                    required
                                    onChange={handleChangePassword}
                                    formControlProps={{
                                    fullWidth: true
                                    }}
                                />
                            </GridItem>
                        </GridContainer>
                        <GridContainer>
                            {/* //Nueva Contraseña */}
                            <GridItem xs={12} sm={12} md={6}>
                                <CustomInput
                                    labelText="Nueva Contraseña"
                                    id="pass-new"
                                    required
                                    onChange={handleChangePassword}
                                    formControlProps={{
                                    fullWidth: true
                                    }}
                                />
                            </GridItem>
                            {/* //Confirmar Nueva Contraseña */}
                            <GridItem xs={12} sm={12} md={6}>
                                <CustomInput
                                    labelText="Confirma la nueva contraseña"
                                    id="pass-confirm"
                                    required
                                    onChange={handleChangePassword}
                                    formControlProps={{
                                    fullWidth: true
                                    }}
                                />
                            </GridItem>
                        </GridContainer>
                        </CardBody>
                        <CardFooter>
                        <Button color="warning" type="button" onClick={changePassword}>Cambiar Contraseña</Button>
                        </CardFooter>
                    </Card>
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                    <Card>
                        <CardHeader color="danger">
                        <h4 className={classes.cardTitleWhite}>Desactivar cuenta</h4>
                        <p className={classes.cardCategoryWhite} >Recuerda que no podrás volver a activarla, solo el administrador del sistema puede hacerlo.</p>
                        </CardHeader>
                        <CardBody>
                        <GridContainer>
                            {/* //Actual Contraseña */}
                            <GridItem xs={12} sm={12} md={6}>
                                <CustomInput
                                    labelText="Actual Contraseña"
                                    id="off_pass_current"
                                    formControlProps={{
                                    fullWidth: true
                                    }}
                                />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={6} style={{marginTop:30}}>
                            <Button color="danger">Desactivar</Button>
                            </GridItem>
                        </GridContainer>
                        
                        </CardBody>
                        <CardFooter >
                        </CardFooter>
                    </Card>
                </GridItem>
            </GridContainer>            
      
        </div>
    )
}