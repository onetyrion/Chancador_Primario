import Cookies from 'universal-cookie';

const cookies = new Cookies();
const {baseURL} = require("../configAPI")

var HeadersGetMantencion = new Headers();
HeadersGetMantencion.append("user-token",cookies.get('user-token'));
HeadersGetMantencion.append("Content-Type", "application/json;charset=UTF-8");

//############################## GET MAQUINARIAS
var requestOptions = {
  method: 'GET',
  headers: HeadersGetMantencion,
  redirect: 'follow'
};
// export const titlesMaquinariaAPI = async()=>{
//   return await fetch(baseURL+"/maquinaria", requestOptions)
//     .then(response => response.json())
//     .then(value => {
//       // IDMAQUINARIA: NOMBRE
//       var column = {};
//       for (let i = 0; i < Object.keys(value).length; i++) {
//           let key = value[i].Id_maquinaria.toString();
//           let valor = value[i].Nombre_maquinaria.toString();
//           column[key]=valor;
//         }
//       return column;
//     })
//     .catch(error => console.log('error', error));
// }
export const dataMantencionAPI = async()=>{
  return await fetch(baseURL+"/fmantencion", requestOptions)
    .then(response => response.json())
    .then(value => {
        for (let i = 0; i < Object.keys(value).length; i++) {
          if (value[i].Falla_Mantencions[0]) {
            value[i].Id_falla=value[i].Falla_Mantencions[0].Id_falla;
          }
        }
      return value;
    })
    .catch(error => {
      console.log('error', error);
      return error;
    });
}
//############################## CREATE FALLAS
export const CreateMantencionAPI = async(data)=>{
  console.log(data);
  const {Id_mantencion, Id_falla, Id_componente, Id_evento, Id_tipo, Fecha_mantencion, CantEvento_especial, Duracion, Descripcion, Horas_programadas, Horas_no_programadas, Cantidad_evProgramados, Cantidad_evNoProgramados, RCFA, Area, OT } = data;
  var raw = JSON.stringify({
    "Id_mantencion":`${Id_mantencion}`,
    "Id_falla":`${Id_falla}`,
    "Id_componente":`${Id_componente}`,
    "Id_evento":`${Id_evento}`,
    "Id_tipo":`${Id_tipo}`,
    "Fecha_mantencion":`${Fecha_mantencion}`,
    "CantEvento_especial":`${CantEvento_especial}`,
    "Duracion":`${Duracion}`,
    "Descripcion":`${Descripcion}`,
    "Horas_programadas":`${Horas_programadas}`,
    "Horas_no_programadas":`${Horas_no_programadas}`,
    "Cantidad_evProgramados":`${Cantidad_evProgramados}`,
    "Cantidad_evNoProgramados":`${Cantidad_evNoProgramados}`,
    "RFCA":`${RCFA}`,
    "Area":`${Area}`,
    "OT":`${OT}`,
  });
  return await fetch(baseURL+"/fmantencion/", {
  method: 'POST',
  headers: HeadersGetMantencion,
  body: raw,
  redirect: 'follow'
})
  .then(response => response.json())
  .then(result => {
    console.log(result);
    return result;
  })
  .catch(error => {
    console.log('error', error);
    return error;
  });
}

// ############################## DELETE USER

export const DeleteMantencionAPI = async(data)=>{
  console.log(data)
    return await fetch(baseURL+`/fmantencion/${data}`, {
    method: 'DELETE',
    headers: HeadersGetMantencion,
    redirect: 'follow'
  })
  .then(response => response.text())
  .then(result => {
    console.log(result);
    return result;
  })
  .catch(error => {
    console.log('error', error);
    return error
  });
}

// ############################## UPDATE MAQUINARIA

export const PutMantencionAPI = async(data)=>{
  const {Id_mantencion, Id_falla, Id_componente, Id_evento, Id_tipo, Fecha_mantencion, CantEvento_especial, Duracion, Descripcion, Horas_programadas, Horas_no_programadas, Cantidad_evProgramados, Cantidad_evNoProgramados, RCFA, Area, OT } = data;
  var raw = JSON.stringify({
    "Id_falla":`${Id_falla}`,
    "Id_componente":`${Id_componente}`,
    "Id_evento":`${Id_evento}`,
    "Id_tipo":`${Id_tipo}`,
    "Fecha_mantencion":`${Fecha_mantencion}`,
    "CantEvento_especial":`${CantEvento_especial}`,
    "Duracion":`${Duracion}`,
    "Descripcion":`${Descripcion}`,
    "Horas_programadas":`${Horas_programadas}`,
    "Horas_no_programadas":`${Horas_no_programadas}`,
    "Cantidad_evProgramados":`${Cantidad_evProgramados}`,
    "Cantidad_evNoProgramados":`${Cantidad_evNoProgramados}`,
    "RFCA":`${RCFA}`,
    "Area":`${Area}`,
    "OT":`${OT}`,
  });
  return await fetch(baseURL+`/fmantencion/${Id_mantencion}`, {
    method: 'PUT',
    headers: HeadersGetMantencion,
    body: raw,
    redirect: 'follow'
  })
    .then(response => response.json())
    .then(result => {
      console.log(result);
      return result;
    })
    .catch(error => {
      console.log('error', error);
      return error;
    });
}