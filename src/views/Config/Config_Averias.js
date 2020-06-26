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

export default function ConfigAverias() {
  const classes = useStyles();

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
            <Button color="primary">Añadir Averías</Button>
          </CardFooter>
        </Card>
      </GridItem>
      
   </GridContainer>
  );
}