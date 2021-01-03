import React from "react";
// @material-ui/core components
import { Input } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import MaterialTable from "material-table";
import { localization } from "variables/language";
import { notify } from "react-notify-toast";

import dataUsersAPI from "API/Users";
import { PutUsersAPI, CreateUsersAPI, DeleteUsersAPI } from "API/Users";
import { getTypeInputs, getChangeInputs } from "variables/HelpersInputs";

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
  widthdiv: { width: (window.screen.width * 55) / 100 },
};

const useStyles = makeStyles(styles);

var Data = [
  {
    Rut: "",
    Nombre: "",
    Apellidos: "",
    Correo_electronico: "",
    Estado: true,
    Cargo: "",
    createdAt: "",
    updatedAt: "",
  },
];
const customInput = (props) => {
  return (
    <Input
      type={getTypeInputs(props.columnDef.field)}
      value={props.value ? props.value : ""}
      onChange={(e) => props.onChange(getChangeInputs(props, e.target.value))}
    />
  );
};
export default function ProfileAccounts(props) {
  const classes = useStyles();
  const [dataUsers, SetdataUsers] = React.useState(Data);
  const [columns] = React.useState([
    {
      title: "Rut",
      field: "Rut",
      editable: "onAdd",
      editComponent: customInput,
    },
    { title: "Nombre", field: "Nombre", editComponent: customInput },
    { title: "Apellidos", field: "Apellidos", editComponent: customInput },
    {
      title: "Correo",
      field: "Correo_electronico",
      editComponent: customInput,
    },
    {
      title: "Estado",
      field: "Estado",
      lookup: { true: "Activa", false: "Desactivada" },
    },
    {
      title: "Cargo/Rol",
      field: "Cargo",
      lookup: {
        Administrador: "Administrador",
        Planificador: "Planificador",
        Lector: "Lector",
      },
    },
  ]);
  const putUsers = PutUsersAPI;
  const usersAPI = dataUsersAPI;

  const setDatos = async () => {
    var datos = await usersAPI()
      .then((res) => res)
      .catch((error) => console.log(error));
    SetdataUsers(datos);
  };
  React.useEffect(() => {
    setDatos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const rowAdd = (newData) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        CreateUsersAPI(newData).then((value) => {
          if (value.errors) {
            notify.show(
              `Ha ocurrido un error, revise sus datos`,
              "error",
              5000
            );
          } else {
            setDatos();
            notify.show("Se ha Añadido con éxito!", "success", 5000);
          }
          console.log(value);
        });
        resolve();
      }, 0);
    });

  const rowUpdate = (newData, oldData) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        const dataUpdate = [...dataUsers];
        const index = oldData.tableData.id;
        dataUpdate[index] = newData;
        //set on db
        const msg = putUsers(dataUpdate[index]);
        msg
          .then((value) => {
            if (value.errors) {
              notify.show(
                `Ha ocurrido un error, revise sus datos`,
                "error",
                5000
              );
            } else {
              setDatos();
              notify.show("Se ha Añadido con éxito!", "success", 5000);
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
      }, 0);
    });

  const rowDelete = (oldData) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        DeleteUsersAPI(oldData.Rut).then((value) => {
          if (value && value.errors) {
            notify.show(
              `Ha ocurrido un error, revise sus datos`,
              "error",
              5000
            );
          } else {
            setDatos();
            notify.show("Se ha Añadido con éxito!", "success", 5000);
          }
        });
        resolve();
      }, 0);
    });
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Gestión de Usuarios</h4>
              <p className={classes.cardCategoryWhite}>
                Puedes dar de baja o modificar todas las cuentas registradas.
              </p>
            </CardHeader>
            <CardBody>
              <MaterialTable
                title=""
                data={dataUsers}
                // columns={columns}
                columns={columns}
                parentChildData={(row, rows) => rows.find((a) => console.log())}
                editable={{
                  onRowAdd: rowAdd,
                  onRowUpdate: rowUpdate,
                  onRowDelete: rowDelete,
                }}
                localization={localization}
              />
            </CardBody>
            <CardFooter>
              {/* <Button color="primary" onClick={handleOpen}>Añadir Usuario</Button> */}
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
