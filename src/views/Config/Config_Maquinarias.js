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

export default function ConfigMaquinarias() {
  const classes = useStyles();

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
            <Table 
              tableHeaderColor="primary"
              tableHead={["ID","Maquinaria","Componente","Estado","Acción"]}
              tableData={[
                ["01","Chancador Primario","32CV02","Vigente","Modificar / Borrrar"],
                ["02","Chancador Primario","31FE016","Vigente","Modificar / Borrrar"],
                ["03","Chancador Primario","31CR01","Vigente","Modificar / Borrrar"],
                ["04","Chancador Primario","Picaroca","Vigente","Modificar / Borrrar"],
                ["05","Chancador Primario","32CV02","Vigente","Modificar / Borrrar"]
              ]}
            />
          </CardBody>
          <CardFooter>
            <Button color="primary">Añadir Maquinaria</Button>
          </CardFooter>
        </Card>
      </GridItem>
      
   </GridContainer>
  );
}
