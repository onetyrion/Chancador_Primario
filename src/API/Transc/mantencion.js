import Cookies from 'universal-cookie';

const cookies = new Cookies();
const {baseURL} = require("../configAPI")

var HeadersGetFallas = new Headers();
HeadersGetFallas.append("user-token",cookies.get('user-token'));
HeadersGetFallas.append("Content-Type", "application/json;charset=UTF-8");

//############################## GET MAQUINARIAS
var requestOptions = {
  method: 'GET',
  headers: HeadersGetFallas,
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
  return await fetch(baseURL+"/mantencion", requestOptions)
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
//{Descripcion_causa: "ASDA", Id_categoria: "1", Id_tipo: "3", Id_componente: "5", Falla: "true"}
// export const CreateFallasAPI = async(data)=>{
//   console.log(data);
//   const {Descripcion_causa, Id_categoria, Id_tipo, Id_componente,Falla} = data;
//   let Estado = (Falla==='true' ? "1" : "0"); 
//   var raw = JSON.stringify({
//     "Descripcion_causa":`${Descripcion_causa}`,
//     "Id_categoria":`${Id_categoria}`,
//     "Id_tipo":`${Id_tipo}`,
//     "Id_componente":`${Id_componente}`,
//     "Falla":`${Estado}`,
//   });
//   return await fetch(baseURL+"/falla/", {
//   method: 'POST',
//   headers: HeadersGetFallas,
//   body: raw,
//   redirect: 'follow'
// })
//   .then(response => response.json())
//   .then(result => {
//     console.log(result);
//     return result;
//   })
//   .catch(error => {
//     console.log('error', error);
//     return error;
//   });
// }

// ############################## DELETE USER

// export const DeleteFallasAPI = async(data,data1)=>{
//     return await fetch(baseURL+`/falla/${data}/${data1}`, {
//     method: 'DELETE',
//     headers: HeadersGetFallas,
//     redirect: 'follow'
//   })
//   .then(response => response.text())
//   .then(result => {
//     console.log(result);
//     return result;
//   })
//   .catch(error => {
//     console.log('error', error);
//     return error
//   });
// }

// ############################## UPDATE MAQUINARIA

// export const PutFallasAPI = async(data,olddata)=>{
//   const {Descripcion_causa, Id_categoria, Id_tipo, Id_componente,Falla} = data;
//   let Estado = (Falla==='true' ? "1" : "0"); 
//   var raw = JSON.stringify({
//     "Descripcion_causa":`${Descripcion_causa}`,
//     "Id_categoria":`${Id_categoria}`,
//     "Id_tipo":`${Id_tipo}`,
//     "newId_componente":`${Id_componente}`,
//     "Falla":`${Estado}`,
//   });
//   return await fetch(baseURL+`/falla/${olddata.Id_falla}/${olddata.Id_componente}`, {
//     method: 'PUT',
//     headers: HeadersGetFallas,
//     body: raw,
//     redirect: 'follow'
//   })
//     .then(response => response.json())
//     .then(result => {
//       console.log(result);
//       return result;
//     })
//     .catch(error => {
//       console.log('error', error);
//       return error;
//     });
// }


// export default titlesMaquinariaAPI;