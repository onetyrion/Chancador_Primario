import Cookies from 'universal-cookie';

const cookies = new Cookies();
const {baseURL} = require("../configAPI")

var HeadersGetMaquinarias = new Headers();
HeadersGetMaquinarias.append("user-token",cookies.get('user-token'));
HeadersGetMaquinarias.append("Content-Type", "application/json;charset=UTF-8");

//############################## GET MAQUINARIAS
var requestOptions = {
  method: 'GET',
  headers: HeadersGetMaquinarias,
  redirect: 'follow'
};
export const titlesMaquinariaAPI = async()=>{
  return await fetch(baseURL+"/maquinaria", requestOptions)
    .then(response => response.json())
    .then(value => {
      // IDMAQUINARIA: NOMBRE
      var column = {};
      for (let i = 0; i < Object.keys(value).length; i++) {
          let key = value[i].Id_maquinaria.toString();
          let valor = value[i].Nombre_maquinaria.toString();
          column[key]=valor;
        }
      return column;
    })
    .catch(error => console.log('error', error));
}
export const dataMaquinariaAPI = async()=>{
  return await fetch(baseURL+"/maquinaria", requestOptions)
    .then(response => response.json())
    .then(value => {
      return value;
    })
    .catch(error => {
      console.log('error', error);
      return error;
    });
}
//############################## CREATE MAQUINARIA

export const CreateMaquinariaAPI = async(data)=>{
  const {Nombre_maquinaria, Estado, Id_area, Id_tipo} = data;
  let EstadoUser = (Estado==='true' ? "1" : "0"); 
  var raw = JSON.stringify({
    "Nombre_maquinaria":`${Nombre_maquinaria}`,
    "Estado":`${EstadoUser}`,
    "Id_area":`${Id_area}`,
    "Id_tipo":`${Id_tipo}`,
  });
  console.log(baseURL+"/maquinaria/");
return fetch(baseURL+"/maquinaria/", {
  method: 'POST',
  headers: HeadersGetMaquinarias,
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

export const DeleteMaquinariaAPI = async(data)=>{
  return await fetch(baseURL+`/maquinaria/${data}`, {
    method: 'DELETE',
    headers: HeadersGetMaquinarias,
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

export const PutMaquinariaAPI = async(data)=>{
  const {Id_maquinaria, Nombre_maquinaria, Estado, Id_area, Id_tipo} = data;
  let EstadoUser = (Estado==='true' ? "1" : "0"); 
  console.log(Estado==='true')
  var raw = JSON.stringify({
    "Nombre_maquinaria":`${Nombre_maquinaria}`,
    "Estado":`${EstadoUser}`,
    "Id_area":`${Id_area}`,
    "Id_tipo":`${Id_tipo}`,
  });
    return await fetch(baseURL+`/maquinaria/${Id_maquinaria}`, {
      method: 'PUT',
      headers: HeadersGetMaquinarias,
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


// export default titlesMaquinariaAPI;