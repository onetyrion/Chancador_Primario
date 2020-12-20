import React from "react";
// @material-ui/core components
import { FormControl, InputLabel, MenuItem, Divider, Button, Input, Modal, Select } from "@material-ui/core";
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
import { notify } from 'react-notify-toast';

import {dataMantencionAPI} from 'API/Transc/mantencion';
// import {  } from "@material-ui/core";
import { titlesComponenteAPI } from "API/Transc/componente";
import { titlesFallasAPI } from "API/Transc/fallas";
import { titletipoMantencionAPI } from "API/Transc/tipoMantencion";
import { titleEventoAPI } from "API/Transc/eventoMantencion";
import { CreateMantencionAPI } from "API/Transc/mantencion";
import { DeleteMantencionAPI } from "API/Transc/mantencion";
import { PutMantencionAPI } from "API/Transc/mantencion";
import { getTypeInputs } from "variables/HelpersInputs";
import CustomInput from "components/CustomInput/CustomInput";
// import DeleteLoginAPI from 'API/Users';

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
    widthdiv:{
      width: ((window.screen.width*55)/100)
    },
    Selectform:{
      width:"100%",
      background:"#000"
    }
  };
  
function getModalStyle() {
  const top = 60 ;
  const left = 60;

  return {
    background:"transparent",
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}
const useStyles = makeStyles(styles);

const useStylesModal = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    // background:"black",
    width: (window.screen.width>1200) ? "50%" : "80%",
    backgroundColor: theme.palette.background.paper,
    overflow:'auto',
    height:(window.screen.width>1200) ? "90%" : "80%",
    // border: '2px solid #9e9e9e',
    // boxShadow: theme.shadows[5],
    padding: (window.screen.width>1200) ? theme.spacing(2, 4, 3) : null,
  },
}));

const customInput = (props)=>{
  // props.columnDef.field === "Fecha_mantencion" && console.log(props)
  // console.log(getTypeInputs(props.columnDef.field))
  return(
  <Input
    type={getTypeInputs(props.columnDef.field)}
    placeholder={props.columnDef.title}
    value={props.value ? props.value : ""}
    onChange={e => props.onChange(e.target.value)}
  />
)}

export default function DetencionesChancadores(props){
  //STATES STYLES
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const classesModal = useStylesModal();
  //STATES MODAL
  const [openModal, SetopenModal] = React.useState(false);
  const [actionModal, SetactionModal] = React.useState(false);
  //STATE ROWS DETENCION
  const [Area, SetArea] = React.useState("");//
  const [CantEvento_especial, SetCantEvento_especial] = React.useState(0);
  const [Cantidad_evNoProgramados, SetCantidad_evNoProgramados] = React.useState(0);
  const [Cantidad_evProgramados, SetCantidad_evProgramados] = React.useState(0);
  const [Descripcion, SetDescripcion] = React.useState("");
  const [Duracion, SetDuracion] = React.useState(0);
  const [Fecha_mantencion, SetFecha_mantencion] = React.useState();
  const [Id_evento, SetId_evento] = React.useState(0);
  const [Id_falla, SetId_falla] = React.useState(0);
  const [Id_mantencion, SetId_mantencion] = React.useState(0);
  const [Id_tipo, SetId_tipo] = React.useState(0);
  const [Id_componente, SetId_componente] = React.useState(0);
  const [OT, SetOT] = React.useState(0);
  const [RCFA, SetRCFA] = React.useState(0);
  const [Horas_no_programadas, SetHoras_no_programadas] = React.useState(0);
  const [Horas_programadas, SetHoras_programadas] = React.useState(0);
  //STATES DATA
  const [listipo,setlistipo] = React.useState("")
  const [listFallas,setlistFallas] = React.useState("")
  const [listcomponents,setlistcomponents] = React.useState("")
  const [listevento,setlistevento] = React.useState("")
  const [dataMantencion,SetdataMantencion] = React.useState();
  const [hiddenColumnOUT,SethiddenColumn] = React.useState(true);
  const [columns,setColumns] = React.useState();
  const mantencionAPI = dataMantencionAPI;

  const setDatos = async (hidden)=>{
    var hiddenColumn = hidden !== undefined ? hidden : true
    SethiddenColumn(hidden !== undefined ? hidden : true);
    var components = await titlesComponenteAPI(); 
    var fallas = await titlesFallasAPI(); //Id_tipo Id_evento Area
    var tipo = await titletipoMantencionAPI();
    var evento = await titleEventoAPI();
    // console.log(hidden !== undefined);
    setColumns([ 
      {"title":"ID","field":"Id_mantencion",hidden: hiddenColumn,export:true,editable: 'never',editComponent:customInput},
      {"title":"Fecha","field":"Fecha_mantencion",editComponent:customInput},
      {"title":"Pieza","field":"Id_componente",hidden: hiddenColumn,lookup: components},
      {"title":"Ev.Esp","field":"CantEvento_especial",hidden: hiddenColumn,editComponent:customInput},
      {"title":"Falla","field":"Id_falla",lookup: fallas},
      {"title":"Tipo","field":"Id_tipo",hidden: hiddenColumn,lookup: tipo},
      {"title":"Evento","field":"Id_evento",hidden: hiddenColumn,lookup: evento},
      {"title":"Descripción","field":"Descripcion", headerStyle: { paddingRight: 200 },editComponent:customInput},
      {"title":"Duración(Hrs)","field":"Duracion",editComponent:customInput,align:"center"},
      // {"title":"Tipo","field":"Estado",
      // lookup: { true: "Activa", false: 'Desactivada' }},
      {"title":"Hrs.Prog","field":"Horas_programadas",hidden: hiddenColumn,editComponent:customInput},
      {"title":"Hrs.No Prog","field":"Horas_no_programadas",hidden: hiddenColumn,editComponent:customInput},
      {"title":"Ev.Prog","field":"Cantidad_evProgramados",hidden: hiddenColumn,editComponent:customInput},
      {"title":"Ev.No Prog","field":"Cantidad_evNoProgramados",hidden: hiddenColumn,editComponent:customInput},
      {"title":"RFCA","field":"RCFA",hidden: hiddenColumn,editComponent:customInput},
      {"title":"Area","field":"Area",hidden: hiddenColumn,editComponent:customInput},
      {"title":"OT","field":"OT",hidden: hiddenColumn,editComponent:customInput}
    ])
    var datos = await mantencionAPI()
    .then((res)=>res)
    .catch((error) => console.log(error));
    SetdataMantencion(datos);
    setlistipo(tipo);
    setlistFallas(fallas);
    setlistcomponents(components);
    setlistevento(evento)
  };
  React.useEffect(()=>{
    setDatos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]); 

  const rowAdd = (newData)=>(
    new Promise((resolve, reject) => {
      setTimeout(() => {
        CreateMantencionAPI(newData)
        .then((value)=>{
          if (value.errors) {
            notify.show(`Ha ocurrido un error, revise los datos`,'error',5000);
          }else{
            setDatos();
            notify.show('Se ha Añadido con éxito!','success',5000);
          }
        })
        resolve();
      }, 0)
    })
  )

  const rowUpdate = (newData, oldData) =>(
    new Promise((resolve, reject) => {
      setTimeout(() => {
        PutMantencionAPI(newData)
        .then((value)=>{
          if (value.errors) {
            notify.show(`Ha ocurrido un error, revise los datos`,'error',5000);
          }else{
            setDatos();
            notify.show('Se ha Modificado con éxito!','success',5000);
          }
        })
        .catch((error)=>{
          notify.show('Ha ocurrido un error, intentelo más tarde.','error',5000);
          console.log(error);
        })                        
        resolve();
      }, 0)
  }))
  
  const rowDelete = (oldData) =>(
  new Promise((resolve, reject) => {
    setTimeout(() => {
      DeleteMantencionAPI(oldData.Id_mantencion)
        .then((value)=>{
          if (value.errors) {
            notify.show(`Ha ocurrido un error, revise los datos`,'error',5000);
          }else{
            setDatos();
            notify.show('Se ha Borrado el registro!','success',5000);
          }
        })
        .catch((error)=>{
          notify.show('Ha ocurrido un error, intentelo más tarde.','error',5000);
          console.log(error);
        });
      resolve()
    }, 0)
  })
)

const handleModal = (rowData,event) => {
  if (rowData) {
    SetArea(rowData.Area)
    SetCantEvento_especial(rowData.CantEvento_especial)
    SetCantidad_evNoProgramados(rowData.Cantidad_evNoProgramados)
    SetCantidad_evProgramados(rowData.Cantidad_evProgramados)
    SetDescripcion(rowData.Descripcion)
    SetDuracion(rowData.Duracion)
    SetFecha_mantencion(rowData.Fecha_mantencion)
    SetId_evento(rowData.Id_evento)
    SetId_falla(rowData.Id_falla)
    SetId_mantencion(rowData.Id_mantencion)
    SetId_tipo(rowData.Id_tipo)
    SetOT(rowData.OT)
    SetRCFA(rowData.RCFA)
    SetId_componente(rowData.Id_componente)
    SetHoras_no_programadas(rowData.Horas_no_programadas)
    SetHoras_programadas(rowData.Horas_programadas)
    SetopenModal(!openModal);
    SetactionModal(event)
  }else{
    SetArea("")
    SetCantEvento_especial(0)
    SetCantidad_evNoProgramados(0)
    SetCantidad_evProgramados(0)
    SetDescripcion("")
    SetDuracion(0)
    SetFecha_mantencion("")
    SetId_evento(0)
    SetId_falla(0)
    SetId_mantencion(0)
    SetId_tipo(0)
    SetOT(0)
    SetRCFA(0)
    SetId_componente(0)
    SetHoras_no_programadas(0)
    SetHoras_programadas(0)
    SetopenModal(!openModal);
    SetactionModal(event)
  }
  SetopenModal(!openModal);
  console.log(event);
};
const handleChange = (event,type) => { 
  switch (event.target.name) {
    case "tipo":
      SetId_tipo(event.target.value)
      break;
    case "falla":
      SetId_falla(event.target.value)
      break;
    case "componente":
      SetId_componente(event.target.value)
      break;  
    case "evento":
      SetId_evento(event.target.value)
      break;            
    default:
      break;
  }
};
const SubmitModal = (a)=>{
  let rawdata={Area,CantEvento_especial,Cantidad_evNoProgramados,Cantidad_evProgramados,Descripcion,Duracion,Fecha_mantencion,Horas_programadas,Horas_no_programadas,Id_componente,Id_evento,Id_falla,Id_mantencion,Id_tipo,OT,RCFA}
  rawdata.OT = OT ? OT : 0;
  if (actionModal==="edit") {
    rowUpdate(rawdata);
  }else{
    rowAdd(rawdata);
  }
  SetopenModal(false);
  console.log(a);
}

const bodyModal = (
  <div style={modalStyle} className={classesModal.paper}> 
    <Card >
      <CardHeader color="primary">
        <h4 className={classes.cardTitleWhite}>Registrar Detenciones del Chancador Priamario</h4>
      </CardHeader>
      <form className={classes.form} onSubmit={(a)=>{SubmitModal(a);a.preventDefault()}} >
      <CardBody>
    <GridContainer>
      {/* //Mantencion */}
      <GridItem xs={12} sm={12} md={6}>
      <CustomInput
          labelText="Mantención"
          id="mantencion"
          formControlProps={{
          fullWidth: true
          }}
          inputProps={{
            value:Id_mantencion ? Id_mantencion :"",
            type:"text",
            disabled:true,
            onChange:(e => SetId_mantencion(e.target.value)),
            required:true
          }}
      />
      </GridItem>
      {/* //Fecha */}
      <GridItem xs={12} sm={12} md={6}>
      <CustomInput
          labelText="Fecha"
          id="fecha"
          formControlProps={{
          fullWidth: true
          }}
          inputProps={{
            value:Fecha_mantencion ? Fecha_mantencion :"2020-01-01",
            type:"date",
            onChange:(e => SetFecha_mantencion(e.target.value)),
            required:true
          }}
      />
      </GridItem>
       {/* //duracion */}
      <GridItem xs={12} sm={12} md={6}>
      <CustomInput
          labelText="Horas Totales"
          id="duracion"
          formControlProps={{
          fullWidth: true
          }}
          inputProps={{
            value:Duracion ? Duracion : "",
            type:"number",
            onChange:(e => SetDuracion(e.target.value)),
            required:true
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
          inputProps={{
            value:CantEvento_especial ? CantEvento_especial : 0,
            type:"number",
            onChange:(e => SetCantEvento_especial(e.target.value)),
            required:true
          }} 
      />
      </GridItem>         
      {/* //hrs programadas */}
      <GridItem xs={12} sm={12} md={3}>
      <CustomInput
          labelText="Hrs Programadas"
          id="hrsprogramadas"
          formControlProps={{
          fullWidth: true
          }}
          inputProps={{
            value:Horas_programadas ? Horas_programadas : 0,
            type:"number",
            onChange:(e => SetHoras_programadas(e.target.value)),
            required:true
          }} 
      />
      </GridItem>
         {/* //hrs no programadas */}
      <GridItem xs={12} sm={12} md={3}>
      <CustomInput
          labelText="Hrs No Prog."
          id="hrsnoprogramadas"
          formControlProps={{
          fullWidth: true
          }}
          inputProps={{
            value:Horas_no_programadas ? Horas_no_programadas : 0,
            type:"number",
            onChange:(e => SetHoras_no_programadas(e.target.value)),
            required:true
          }} 
      />
      </GridItem>
      {/* //event no programadas */}
      <GridItem xs={12} sm={12} md={3}>
      <CustomInput
          labelText="Eventos Prog."
          id="evprogramadas"
          formControlProps={{
          fullWidth: true
          }}
          inputProps={{
            value:Cantidad_evProgramados ? Cantidad_evProgramados : 0,
            type:"number",
            onChange:(e => SetCantidad_evProgramados(e.target.value)),
            required:true
          }} 
      />
      </GridItem>        
      {/* //event programadas */}
      <GridItem xs={12} sm={12} md={3}>
      <CustomInput
          labelText="Eventos no Prog."
          id="evnoprogramadas"
          formControlProps={{
          fullWidth: true
          }}
          inputProps={{
            value:Cantidad_evNoProgramados ? Cantidad_evNoProgramados : 0,
            type:"number",
            onChange:(e => SetCantidad_evNoProgramados(e.target.value)),
            required:true
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
          inputProps={{
            value:OT ? OT : 0,
            type:"number",
            onChange:(e => SetOT(e.target.value)),
            required:true
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
          inputProps={{
            value:RCFA ? RCFA : 0,
            type:"number",
            onChange:(e => SetRCFA(e.target.value)),
            required:true
          }} 
      />
      </GridItem>       
     {/* //Area */}
     <GridItem xs={12} sm={12} md={6}>
      <CustomInput className={classes.SelectForm}
          labelText="Área"
          id="area"
          formControlProps={{
          fullWidth: true
          }}
          inputProps={{
            value:Area ? Area : "",
            type:"text",
            onChange:(e => SetArea(e.target.value)),
            required:true  
          }}
      />
      </GridItem>       
      {/* //Tipo */}
      <GridItem xs={12} sm={12} md={6}>
        <FormControl className={classes.SelectForm} 
          fullWidth= {true} style={{marginTop:"27px"}}
          >
          <InputLabel id="select-tipo-historic">Tipo</InputLabel>
          <Select 
            labelId="select-tipo-label"
            id="select-tipo-historic"
            name="tipo"
            value={Id_tipo ? Id_tipo : 0}
            onChange={handleChange}
          >
            {Object.entries(listipo).map((values,index)=>
            <MenuItem value={values[0]} key={index}>{values[1]}</MenuItem>
            )}
          </Select>
        </FormControl>
      </GridItem>  
      {/* //Descripcion */}
      <GridItem xs={12} sm={12} md={12}>
      <CustomInput
          labelText="Descripción"
          id="descripcion"
          formControlProps={{
          fullWidth: true
          }}
          inputProps={{
            value:Descripcion ? Descripcion : "",
            type:"text",
            onChange:(e => SetDescripcion(e.target.value)),
            required:true
          }} 
      />
      </GridItem>            
      {/* //Falla */}
      <GridItem xs={12} sm={12} md={6}>
        <FormControl className={classes.SelectForm} 
          fullWidth= {true} style={{marginTop:"27px"}}
        >
          <InputLabel id="select-falla-historic">Falla</InputLabel>
          <Select
            labelId="select-falla-label"
            id="select-falla-historic"
            name="falla"
            value={Id_falla ? Id_falla : 0}
            onChange={handleChange}
          >
            {Object.entries(listFallas).map((values,index)=>
            <MenuItem value={values[0]} key={index}>{values[1]}</MenuItem>
            )}
          </Select>
        </FormControl>
      </GridItem>
     {/* //Componente */}
     <GridItem xs={12} sm={12} md={6}>
      <FormControl className={classes.SelectForm} 
          fullWidth= {true} style={{marginTop:"27px"}}
        >
        <InputLabel id="select-componente-historic">Componente</InputLabel>
        <Select
          labelId="select-componente-label"
          id="select-componente-historic"
          name="componente"
          value={Id_componente ? Id_componente : 0}
          onChange={handleChange}
        >
          {Object.entries(listcomponents).map((values,index)=>
          <MenuItem value={values[0]} key={index}>{values[1]}</MenuItem>
          )}
        </Select>
      </FormControl>     
      </GridItem>            
      {/* //Evento */}
      <GridItem xs={12} sm={12} md={6} >
        <FormControl className={classes.SelectForm}
          fullWidth= {true} style={{marginTop:"27px"}}
        >
          <InputLabel id="select-evento-historic">Evento</InputLabel>
          <Select
            labelId="select-evento-label"
            id="select-evento-historic"
            name="evento"
            value={Id_evento ? Id_evento : 0}
            onChange={handleChange}
          >
            {Object.entries(listevento).map((values,index)=>
            <MenuItem value={values[0]} key={index}>{values[1]}</MenuItem>
            )}
          </Select>
        </FormControl>
      </GridItem>
    </GridContainer>
    </CardBody>
    <CardFooter>
      <Button 
      color="primary" type="submit" 
      fullWidth
      variant="outlined">
        Añadir Mantención
      </Button>
    </CardFooter>
    </form>
      </Card>          
  </div>
);
return(
    <div >
      <GridContainer >
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Registro de detenciones de los Chancadores</h4>
            </CardHeader>
            <CardBody>
            <MaterialTable 
              title="Gestión de Mantenciones"
              data={dataMantencion}
              columns={columns}                        
              parentChildData={(row, rows) => rows.find(a => console.log())}
              editable={{
                // onRowAdd: rowAdd,                    
                // onRowUpdate: rowUpdate,
                onRowDelete: rowDelete
                }}
              localization={localization}
              options={{
                exportAllData:true,
                exportButton: true,
                exportDelimiter:";",
                exportFileName:("REG_DETENCIONES_"+new Date().toLocaleString()),
                pageSizeOptions:[5, 10, 20, 100]
              }}   
              actions={[
                {
                  icon: 'view_column',
                  tooltip: 'Mostrar Todo',
                  isFreeAction: true,
                  onClick: (event) => {
                    setDatos(!hiddenColumnOUT);
                  }
                }                
                ,{
                  icon: 'edit',
                  tooltip: 'Editar',
                  onClick: (event, rowData) => {
                    handleModal(rowData,"edit")
                  }
                }
              ]}
              />
            </CardBody>
            <CardFooter className={classes.CardFooterBox}>
            <Divider light/>
            <Button color="primary" onClick={()=>handleModal(null,"add")}>Añadir Meta</Button>
          </CardFooter>
          </Card>
        <Modal open={openModal}
          onClose={handleModal}
          aria-labelledby="Modal-detenciones"
          aria-describedby="Modal-detenciones">
            {bodyModal}
        </Modal>
        </GridItem>
          
      </GridContainer>     
      
    </div>
  )
}