import React from "react";
// @material-ui/core components
import { makeStyles  } from "@material-ui/core/styles";
// core components
import { FormControl, InputLabel, MenuItem, Button, Select } from "@material-ui/core";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

//DROPDOWN
import { notify } from "react-notify-toast";
import CardFooter from "components/Card/CardFooter";
import CustomInput from "components/CustomInput/CustomInput";
import { getETLSchedule, setETLSchedule } from "API/DM";
import moment from "moment";
// import { setETLSchedule } from "API/Transc/pMantencion";

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

export default function ConfigETL() {
  const classes = useStyles();
  const [nextrundate,Setnextrundate] = React.useState("1");
  // const [nextruntime,Setnextruntime] = React.useState("");
  const [freq_type,Setfreq_type] = React.useState("");
  const [active_start_date,Setactive_start_date] = React.useState("");
  const [active_end_date,Setactive_end_date] = React.useState("");
  const [active_start_time,Setactive_start_time] = React.useState("");
  const [active_end_time,Setactive_end_time] = React.useState("");
  
  React.useEffect(()=>{
    setDatos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]); 
  
  const setDatos = async ()=>{
    await getETLSchedule()
    .then((res)=>{
        // console.log(res.ScheduleJob.Occurs_detail);
        Setnextrundate("Ocurre "+res.ScheduleJob.Occurs_detail+" "+res.ScheduleJob.Frequency)
        // Setnextruntime(moment(res.ScheduleJob.next_run_date+" "+res.ScheduleJob.next_run_time).format('HH:mm:ss'))
        Setfreq_type(res.ScheduleJob.freq_type)
        Setactive_start_date(moment(res.ScheduleJob.active_start_date.toString()).format('YYYY-MM-DD'))
        Setactive_start_time(moment(res.ScheduleJob.active_start_date+" "+res.ScheduleJob.active_start_time).format('HH:mm:ss'))
        Setactive_end_date(moment(res.ScheduleJob.active_end_date.toString()).format('YYYY-MM-DD'))
        Setactive_end_time(moment(res.ScheduleJob.active_end_date+" "+res.ScheduleJob.active_end_time).format('HH:mm:ss'))
        return res;
    })
    // console.log(moment(dataScheduleJob.ScheduleJob.next_run_time).format('HH:mm:ss'))
    // console.log(dataScheduleJob.ScheduleJob.next_run_date+" "+dataScheduleJob.ScheduleJob.next_run_time);
  }

  const dataAdd = ()=>(
    //   console.log()
    new Promise((resolve, reject) => {
      setETLSchedule({
        freq_type,
        active_start_date,
        active_start_time,
        active_end_date,
        active_end_time
    })
        .then((value)=>{
          if (value && value.errors) {
            notify.show(`Ha ocurrido un error, verifique los datos ingresados`,'error',5000);
          }else{
            setDatos();
            notify.show('Se ha Programado con éxito!','success',5000);
          }
        })
        resolve();
    })
  )

  return (
        <Card >
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Gestión de la programación del proceso ETL</h4>
              <p className={classes.cardCategoryWhite}>
              {nextrundate}
              </p>
          </CardHeader>
        <form className={classes.form} onSubmit={(a)=>{dataAdd();a.preventDefault()}} >
          <CardBody>
            <GridContainer>
            {/* //HORA DE INICIO*/}
            <GridItem xs={12} sm={12} md={6}>
            <CustomInput
                labelText="Hora de inicio"
                id="active_start_time"
                formControlProps={{
                fullWidth: true
                }}
                inputProps={{
                    value:active_start_time ? active_start_time :"",
                    type:"time",
                    onChange:(e => Setactive_start_time(e.target.value)),
                    required:true
                }}
            />
            </GridItem>
            {/* //FECHA DE INICIO*/}
            <GridItem xs={12} sm={12} md={6}>
            <CustomInput
                labelText="Fecha de inicio"
                id="active_start_date"
                formControlProps={{
                fullWidth: true
                }}
                inputProps={{
                    value:active_start_date ? active_start_date :"",
                    type:"date",
                    onChange:(e => Setactive_start_date(e.target.value)),
                    required:true
                }}
            />
            </GridItem>
            {/* //HORA DE TERMINO*/}
            <GridItem xs={12} sm={12} md={6}>
            <CustomInput
                labelText="Hora de Termino"
                id="active_end_time"
                formControlProps={{
                fullWidth: true
                }}
                inputProps={{
                    value:active_end_time ? active_end_time :"",
                    type:"time",
                    onChange:(e => Setactive_end_time(e.target.value)),
                    required:true
                }}
            />
            </GridItem>
            {/* //FECHA DE TERMINO*/}
            <GridItem xs={12} sm={12} md={6}>
            <CustomInput
                labelText="Fecha de termino"
                id="active_end_date"
                formControlProps={{
                fullWidth: true
                }}
                inputProps={{
                    value:active_end_date ? active_end_date :"",
                    type:"date",
                    onChange:(e => Setactive_end_date(e.target.value)),
                    required:true
                }}
            />
            </GridItem>                        
            {/* //freqtype */}
            <GridItem xs={12} sm={12} md={6} >
                <FormControl className={classes.SelectForm}
                fullWidth= {true} style={{marginTop:"27px"}}
                >
                <InputLabel id="select-freqtype-historic">Frecuencia de ejecución</InputLabel>
                <Select
                    labelId="select-freqtype-label"
                    id="select-freqtype-historic"
                    name="freqtype"
                    value={freq_type ? freq_type : ""}
                    onChange={e => Setfreq_type(e.target.value)}
                >
                    <MenuItem value="1"> Una vez</MenuItem>
                    <MenuItem value="4"> Diario </MenuItem>
                    <MenuItem value="8"> Semanal </MenuItem>
                    <MenuItem value="16"> Mensual </MenuItem>
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
            Guardar Programación
        </Button>
        </CardFooter>
        </form>
    </Card>
  );
}
