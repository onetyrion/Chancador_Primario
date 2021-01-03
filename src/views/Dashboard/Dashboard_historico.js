import React from "react";
// react plugin for creating charts
import { Doughnut } from "react-chartjs-2";
// @material-ui/core
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Radio,
  FormControlLabel,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import ArrowUpward from "@material-ui/icons/ArrowUpward";
// import AccessTime from "@material-ui/icons/AccessTime";
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
// import CardFooter from "components/Card/CardFooter.js";
import Button from "components/CustomButtons/Button.js";

import { disp_metas } from "variables/charts.js";
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import stylesRadio from "assets/jss/material-dashboard-react/checkboxAdnRadioStyle.js";

import { disponibilidadanual } from "API/DM";
import { titlesMaquinariaAPI } from "API/Transc/maquinaria";

const useStyles = makeStyles(styles);
const useStylesRadio = makeStyles(stylesRadio);

export default function DashboardHistorico(props) {
  const classes = useStyles();
  const classesRadio = useStylesRadio();
  const [Equipo, setEquipo] = React.useState("1");
  const [year, setYear] = React.useState("2019");
  const [RadioValueFilter, setRadioValueFilter] = React.useState("b");
  const [listMaquinarias, setlistMaquinarias] = React.useState(
    "Chancador Primario"
  );

  const [DataMeta, setDataMeta] = React.useState([0, 0, 0, 0]); //DISPONIBILIDAD, MTTR, MTBF, MTBME
  const [data, setdata] = React.useState(null);

  React.useEffect(
    () => {
      setDatos();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  const setDatos = async () => {
    //GET DATA FROM MAQUINARIAS
    await titlesMaquinariaAPI().then((res) => {
      setEquipo(res);
    });
    //GET DATA FROM INDICADORES AND SET ON STATE
    await disponibilidadanual(year, listMaquinarias).then((res) => {
      if (!res.errors) {
        setDataMeta([
          (res.Disponiblidad_Anual * 100) / res.Disponibilidad_Metas,
          (res.MTTR * 100) / res.MTTR_Metas,
          (res.MTBF * 100) / res.MTBF_Metas,
          (res.MTBME * 100) / res.MTBME_Metas,
        ]);
        setdata(res);
      } else {
        setDataMeta([0, 0, 0, 0]);
        setdata(null);
      }
    });
  };

  //SET SELECT AÑO AND EQUIPO
  const handleChange = (event, type) => {
    typeof event.target.value == "string"
      ? setlistMaquinarias(event.target.value)
      : setYear(event.target.value);
  };

  return (
    <div className={window.screen.width < 500 ? classes.DivWidth : null}>
      <GridContainer>
        {/* {///////////FILTROS} */}
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="danger">
              <h4 className={classes.cardTitleWhite}>Filtros</h4>
            </CardHeader>
            <CardBody
              className={window.screen.width > 1200 ? classes.filtrosbox : null}
            >
              {/* RADIO BUTTONS */}
              <FormControl className={classes.formControl}>
                <FormControlLabel
                  value="Seleccionar Equipo"
                  control={
                    <Radio
                      checked={RadioValueFilter === "a"}
                      onChange={() => setRadioValueFilter("a")}
                      value="a"
                      name="radio button Equipo"
                      aria-label="A"
                      icon={
                        <FiberManualRecord
                          className={classesRadio.radioUnchecked}
                        />
                      }
                      checkedIcon={
                        <FiberManualRecord
                          className={classesRadio.radioChecked}
                        />
                      }
                      classes={{
                        checked: classesRadio.radio,
                      }}
                    />
                  }
                  label="Seleccionar Equipo"
                  labelPlacement="end"
                />
                <FormControlLabel
                  value="Seleccionar Año"
                  control={
                    <Radio
                      checked={RadioValueFilter === "b"}
                      onChange={() => setRadioValueFilter("b")}
                      value="b"
                      name="radio button Year"
                      aria-label="B"
                      icon={
                        <FiberManualRecord
                          className={classesRadio.radioUnchecked}
                        />
                      }
                      checkedIcon={
                        <FiberManualRecord
                          className={classesRadio.radioChecked}
                        />
                      }
                      classes={{
                        checked: classesRadio.radio,
                      }}
                    />
                  }
                  label="Seleccionar Año"
                  labelPlacement="end"
                />
              </FormControl>
              {/* SELECTS */}
              {RadioValueFilter === "a" ? (
                <FormControl className={classes.formControl}>
                  <InputLabel id="select-Equipo-historic">Equipo</InputLabel>
                  <Select
                    labelId="select-Equipo-label"
                    id="select-Equipo-historic"
                    value={listMaquinarias}
                    onChange={handleChange}
                  >
                    {Object.entries(Equipo).map((values, index) => (
                      <MenuItem value={values[1]} key={index}>
                        {values[1]}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              ) : (
                <FormControl className={classes.formControl}>
                  <InputLabel id="select-year-historic">Año</InputLabel>
                  <Select
                    labelId="select-year-historic"
                    id="select-year-historic"
                    value={year}
                    onChange={handleChange}
                  >
                    <MenuItem value={2015}>2015</MenuItem>
                    <MenuItem value={2016}>2016</MenuItem>
                    <MenuItem value={2017}>2017</MenuItem>
                    <MenuItem value={2018}>2018</MenuItem>
                    <MenuItem value={2019}>2019</MenuItem>
                    <MenuItem value={2020}>2020</MenuItem>
                  </Select>
                </FormControl>
              )}
              <Button
                type="button"
                color="primary"
                className={classes.BtnFiltroWidth}
                onClick={() => {
                  setDatos();
                }}
              >
                Buscar
              </Button>
            </CardBody>
          </Card>
        </GridItem>

        {/* ////////////DISPONIBILIDAD CHART */}
        <GridItem xs={12} sm={12} md={6}>
          <Card chart>
            <CardHeader>
              <Doughnut
                data={disp_metas("Disponibilidad", data)}
                options={{
                  circumference: 1.0 * Math.PI,
                  rotation: 1 * Math.PI,
                  legend: { display: false },
                }}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Disponibilidad Anual</h4>
              <p className={classes.cardCategory}>
                <span className={classes.successText}>
                  <ArrowUpward className={classes.upArrowCardCategory} />
                  {Math.round(DataMeta[0])}%
                </span>{" "}
                Completado de la Meta
              </p>
            </CardBody>
          </Card>
        </GridItem>

        {/* ////////////MTTR CHART */}
        <GridItem xs={12} sm={12} md={6}>
          <Card chart>
            <CardHeader>
              <Doughnut
                data={disp_metas("MTTR", data)}
                options={{
                  circumference: 1.0 * Math.PI,
                  rotation: 1 * Math.PI,
                  legend: { display: false },
                }}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>MTTR Anual</h4>
              <p className={classes.cardCategory}>
                <span className={classes.successText}>
                  <ArrowUpward className={classes.upArrowCardCategory} />
                  {Math.round(DataMeta[1])}%
                </span>{" "}
                Completado de la Meta
              </p>
            </CardBody>
          </Card>
        </GridItem>

        {/* ////////////MTTR CHART */}
        <GridItem xs={12} sm={12} md={6}>
          <Card chart>
            <CardHeader>
              <Doughnut
                data={disp_metas("MTBF", data)}
                options={{
                  circumference: 1.0 * Math.PI,
                  rotation: 1 * Math.PI,
                  legend: { display: false },
                }}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>MTBF Anual</h4>
              <p className={classes.cardCategory}>
                <span className={classes.successText}>
                  <ArrowUpward className={classes.upArrowCardCategory} />
                  {Math.round(DataMeta[2])}%
                </span>{" "}
                Completado de la Meta
              </p>
            </CardBody>
          </Card>
        </GridItem>

        {/* ////////////MTBME CHART */}
        <GridItem xs={12} sm={12} md={6}>
          <Card chart>
            <CardHeader>
              <Doughnut
                data={disp_metas("MTBME", data)}
                options={{
                  circumference: 1.0 * Math.PI,
                  rotation: 1 * Math.PI,
                  legend: { display: false },
                }}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>MTBME Anual</h4>
              <p className={classes.cardCategory}>
                <span className={classes.successText}>
                  <ArrowUpward className={classes.upArrowCardCategory} />
                  {Math.round(DataMeta[3])}%
                </span>{" "}
                Completado de la Meta
              </p>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
