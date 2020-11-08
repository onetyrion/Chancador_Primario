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
import { FormControl, InputLabel, Select, ListItemText, Checkbox, Input, Modal } from "@material-ui/core";

//DROPDOWN
import MenuItem from "@material-ui/core/MenuItem";
import Button from "components/CustomButtons/Button.js";
import CardFooter from "components/Card/CardFooter";
import CustomInput from "components/CustomInput/CustomInput";

const namesColumn = [
  "Fecha",
  "Tipo",
  "Evento",
  "Componente",
  "Duración",
  "Eventos Especiales",
  "Descripción",
  "Hrs Programadas",
  "Hrs No Programadas",
  "Eventos Programados",
  "Eventos No Programados",
  "OT",
  "RFCA",
  "Área",
];

const meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Dicembre"
]

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
  width: (window.screen.width>1200) ? "50%" : "80%",
  backgroundColor: theme.palette.background.paper,
  overflow:'scroll',
  height:(window.screen.width>1200) ? "90%" : "80%",
  border: '2px solid #9e9e9e',
  boxShadow: theme.shadows[5],
  padding: (window.screen.width>1200) ? theme.spacing(2, 4, 3) : null,
},
}));

export default function DetencionesMantenciones() {
  const classes = useStyles();
  const classesModal = useStylesModal();

  const [modalStyle] = React.useState(getModalStyle);
  const [openModalRegister, SetopenModal] = React.useState(false);
  const [ColumnName, setColumnName] = React.useState(["Fecha"]);
  const [Mes, setMes] = React.useState(meses[new Date().getMonth()]);

  const handleChangeColumn = (event) => {
    setColumnName(event.target.value);
  };
  const handleChangeMes = (event) => {
    setMes(event.target.value);
  };
  const handleOpen = () => {
    SetopenModal(true);
  };

  const handleClose = () => {
    SetopenModal(false);
  };
  
  const bodyModal = (
    <div style={modalStyle} className={classesModal.paper}> 
        <Card >
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Registrar Detenciones del Chancador Priamario</h4>
            <p className={classes.cardCategoryWhite}>
              
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
  );
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card >
          <CardBody className={classes.filtrosbox}>
            <FormControl className={classes.formControl}>
              <InputLabel id="Chk-Column-label">Selección de Columnas</InputLabel>
              <Select
                labelId="Chk-Column-label"
                id="Chk-Column"
                multiple
                value={ColumnName}
                onChange={handleChangeColumn}
                input={<Input />}
                renderValue={(selected) => ColumnName.length+" Columnas"}
              >
                {namesColumn.map((Column) => (
                  <MenuItem key={Column} value={Column}>
                    <Checkbox checked={ColumnName.indexOf(Column) > -1} />
                    <ListItemText primary={Column} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>    
            <FormControl className={classes.formControl}>
              <InputLabel id="Select-Month-label">Mes a buscar</InputLabel>
              <Select
                labelId="Select-Month-label"
                id="Select-Month"
                //multiple
                value={Mes}
                onChange={handleChangeMes}
                input={<Input />}
                renderValue={(selected) => Mes}
              >
                {meses.map((Mes) => (
                  <MenuItem key={Mes} value={Mes}>
                    <ListItemText primary={Mes} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>                       
            <FormControl className={classes.formControl}>
            <Button  type="button" color="primary"> Buscar</Button>  
            </FormControl> 
          </CardBody>
        </Card>
      </GridItem>
      
      <GridItem xs={12} sm={12} md={12}>
        <Card >
          <CardHeader color="warning">
            <h4 className={classes.cardTitleWhite}>Detenciones del Chancador Priamario</h4>
            <p className={classes.cardCategoryWhite}>
              
            </p>
          </CardHeader>
          <CardBody>
          <MaterialTable 
            title=""
            data={dataUsers}
            // columns={columns}
            columns={columns}
            parentChildData={(row, rows) => rows.find(a => console.log())}
            editable={{
              onRowAdd: rowAdd,                    
              onRowUpdate: rowUpdate,
              onRowDelete: rowDelete
              }}
            localization={localization}
            />
            {/* <Table 
              tableHeaderColor="warning"
              tableHead={["Fecha","Pieza","Ev. SP","Avería","Tipo","Hrs Progr","Hrs No Prog", "Event Prog", "Event No Prog", "RFCA"]}
              tableData={[
                ["12-01-20","32CV02","1","Reparación","Eléctrica","0","1.77","0","1","0"],
                ["12-01-20","32CV02","1","Mant. Prog","Mecánica","8.25","0","1","0","0"],
                ["12-01-20","32CV02","1","Reparación","Eléctrica","0","1.77","0","1","0"],
                ["12-01-20","32CV02","1","Reparación","Mecánica","0","1.77","0","1","0"],
                ["12-01-20","32CV02","1","Reparación","Eléctrica","0","1.77","0","1","0"],
              ]}
            /> */}
          </CardBody>
          <CardFooter>
            <Button color="warning" onClick={handleOpen}>Añadir Mantención</Button>
          </CardFooter>
        </Card>
        <Modal open={openModalRegister}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description">
            {bodyModal}
        </Modal>
      </GridItem>
   </GridContainer>
  );
}
