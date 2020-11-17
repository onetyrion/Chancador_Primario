import Cookies from 'universal-cookie';

const cookies = new Cookies();
const {baseURL} = require("../configAPI")

var HeadersGetUsers = new Headers();
HeadersGetUsers.append("user-token",cookies.get('user-token'));
HeadersGetUsers.append("Content-Type", "application/json;charset=UTF-8");

//############################## GET COMPONENTS
var requestOptions = {
  method: 'GET',
  headers: HeadersGetUsers,
  redirect: 'follow'
};
const dataComponentsAPI = async()=>{
  return await fetch(baseURL+"/components", requestOptions)
    .then(response => response.json())
    .then(value => {
      for (let i = 0; i < Object.keys(value).length; i++) {
        if (value[i].Maquinarium) {
          value[i].Nombre_maquinaria=value[i].Maquinarium.Nombre_maquinaria;
        }
      }
      return value;
    })
    .catch(error => {
      console.log('error', error);
      return error;
    });
}

//############################## UPDATE COMPONENTS

export const PutComponentsAPI = async(data)=>{
  const {Denominacion,Id_maquinaria,Estado,Id_componente} = data
  let EstadoUser = (Estado==='true' ? "1" : "0"); 
  console.log(Estado+'\n'+EstadoUser)
    var raw = JSON.stringify({
      "Denominacion":`${Denominacion}`,
      "Id_maquinaria":`${Id_maquinaria}`,
      "Estado":`${EstadoUser}`,
    });
    return await fetch(`http://localhost:3100/api/components/${Id_componente}`, {
      method: 'PUT',
      headers: HeadersGetUsers,
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

//------------------------------------------DELETE USER
export const DeleteComponentsAPI = async(data)=>{
  return await fetch(`http://localhost:3100/api/components/${data}`, {
    method: 'DELETE',
    headers: HeadersGetUsers,
    redirect: 'follow'
  })
  .then(response => response.text())
  .then(result => {
    console.log(result);
    return result;
  })
  .catch(error => {
    console.log('error', error);
    return error;
  });
}
//############################## CREATE USER

export const CreateComponentsAPI = async(data)=>{
  const {Denominacion,Id_maquinaria,Estado} = data;
  let EstadoUser = (Estado==='true' ? "1" : "0"); 
  var raw = JSON.stringify({
    "Denominacion":`${Denominacion}`,
    "Id_maquinaria":`${Id_maquinaria}`,
    "Estado":`${EstadoUser}`,
  });
return fetch("http://localhost:3100/api/components/", {
  method: 'POST',
  headers: HeadersGetUsers,
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

export const titlesComponenteAPI = async()=>{
  return await fetch(baseURL+"/components", requestOptions)
    .then(response => response.json())
    .then(value => {
      // IDMAQUINARIA: NOMBRE
      var column = {};
      for (let i = 0; i < Object.keys(value).length; i++) {
        let key = value[i].Id_componente.toString();
        let valor = value[i].Denominacion.toString();
        column[key]=valor;
      }
      column[null]="";
      return column;
    })
    .catch(error => console.log('error', error));
}

export default dataComponentsAPI;