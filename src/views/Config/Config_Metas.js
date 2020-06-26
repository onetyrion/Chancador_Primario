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
import { Divider } from "@material-ui/core";
const styles = {
    CardFooterBox:{
        margin:"auto",
    },
   TextGray: {
    "&,& a,& a:hover,& a:focus": {
      color: "#424242",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#424242"
    }
  }, 
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

export default function ConfigMetas() {
  const classes = useStyles();

  return (
    <GridContainer>
      
      <GridItem xs={12} sm={12} md={12}>
        <Card >
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Gestión de Metas</h4>
            <p className={classes.cardCategoryWhite}>
              
            </p>
          </CardHeader>
          <CardBody>
            <Table 
              tableHeaderColor="primary"
              tableHead={["KPI","Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre","2020"]}
              tableData={[
                ["Disponibilidad","93.4","96.4","92.2","94.4","96.5","87.4","81.1","84.4","92","93","96","92.5","93"],
                ["MTTR", "0","0","0","0","0","4.6","4.6","3.4","3.4","3.4","3.4","4.3","5.6"],
                ["MTBF", "104.6","104.6","104.6","104.6","104.6","67.4","74.2","57.2","65.2","65.2","65.2","89.2","72.5"],
              ]}
            />
            <p className={classes.TextGray}>*Las metas mensuales de la disponibilidad corresponde a el promedio de la disponibiliad de los últimos 91 días,por ende, no se puede editar*</p>
          </CardBody>
          <CardFooter className={classes.CardFooterBox}>
            <Divider light/>
            <Button color="primary">Añadir Meta</Button>
          </CardFooter>
        </Card>
      </GridItem>
      
   </GridContainer>
  );
}
