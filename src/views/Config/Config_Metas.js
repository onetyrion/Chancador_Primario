import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

//DROPDOWN
import MaterialTable from "material-table";
import { localization } from "variables/language";
import { Input } from "@material-ui/core";
import { notify } from "react-notify-toast";
import { titlesIndicadorAPI } from "API/Transc/indicadorKPI";
import { dataPMantencionesAPI } from "API/Transc/pMantencion";
import { titlesMaquinariaAPI } from "API/Transc/maquinaria";
import { CreateMetasAPI, DeleteMetasAPI } from "API/Transc/pMantencion";
import { PutMetasAPI } from "API/Transc/pMantencion";
import { getTypeInputs, getChangeInputs } from "variables/HelpersInputs";
import { validation_metas } from "./validations_Config";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0",
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF",
    },
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
      lineHeight: "1",
    },
  },
  formControl: {
    margin: 10,
    minWidth: 200,
    maxWidth: 300,
  },
  filtrosbox: {
    width: "70%",
    margin: "auto",
    display: "inline",
  },
};
const useStyles = makeStyles(styles);

const customInput = (props) => {
  return (
    <Input
      type={getTypeInputs(props.columnDef.field)}
      value={props.value ? props.value : ""}
      onChange={(e) => props.onChange(getChangeInputs(props, e.target.value))}
      // onChange={e => props.onChange(e.target.value)}
      // error={true}
    />
  );
};

export default function ConfigMetas() {
  const classes = useStyles();
  const [dataMetas, SetdataMetas] = React.useState([]);
  const [columnsMetas, setcolumnsMetas] = React.useState([]);

  React.useEffect(() => {
    setDatos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setDatos = async () => {
    var maquinariaData = await titlesMaquinariaAPI();
    var Indicador = await titlesIndicadorAPI();
    var datapMantencion = await dataPMantencionesAPI();
    setcolumnsMetas([
      { title: "Maquinaria", field: "Id_maquinaria", lookup: maquinariaData },
      { title: "Indicador", field: "Id_kpi", lookup: Indicador },
      { title: "Año", field: "Anio", editComponent: customInput },
      { title: "Meta", field: "Meta", editComponent: customInput },
      { title: "Unidad", field: "unidad", editComponent: customInput },
    ]);
    SetdataMetas(datapMantencion);
  };

  const rowAdd = (newData) =>
    new Promise((resolve, reject) => {
      if (validation_metas(newData)) {
        return reject();
      }
      CreateMetasAPI(newData).then((value) => {
        if (value.errors) {
          notify.show(
            `Ha ocurrido un error, verifique los datos ingresados`,
            "error",
            5000
          );
        } else {
          setDatos();
          notify.show("Se ha Añadido con éxito!", "success", 5000);
        }
      });
      resolve();
    });

  const rowUpdate = (newData, oldData) =>
    new Promise((resolve, reject) => {
      if (validation_metas(newData)) {
        return reject();
      }
      PutMetasAPI(newData)
        .then((value) => {
          console.log("update");
          if (value.errors) {
            notify.show(
              `Ha ocurrido un error, verifique los datos ingresados`,
              "error",
              5000
            );
          } else {
            setDatos();
            notify.show("Se ha Modificado con éxito!", "success", 5000);
          }
        })
        .catch((error) => {
          notify.show(
            "Ha ocurrido un error, intentelo más tarde.",
            "error",
            5000
          );
          console.log(error);
        });
      resolve();
    });

  const rowDelete = (oldData) =>
    new Promise((resolve, reject) => {
      console.log(oldData);
      DeleteMetasAPI(oldData.Id_ProgramaMantencion).then((value) => {
        if (JSON.parse(value).errors) {
          notify.show(
            `Ha ocurrido un error al eliminar el registro`,
            "error",
            5000
          );
        } else {
          setDatos();
          notify.show("Se ha Eliminado con éxito!", "warning", 5000);
        }
      });
      resolve();
    });

  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Gestión de Metas</h4>
          </CardHeader>
          <CardBody>
            <MaterialTable
              title=""
              data={dataMetas}
              columns={columnsMetas}
              parentChildData={(row, rows) => rows.find((a) => console.log())}
              editable={{
                onRowAdd: rowAdd,
                onRowUpdate: rowUpdate,
                onRowDelete: rowDelete,
              }}
              localization={localization} //Set Idioma
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
