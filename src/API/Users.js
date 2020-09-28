import {
  getToken,
  // deleteToken,
  // setToken,
  // getValue,
  // setValue
  } from '../API/helpers';
import { CreateLoginAPI } from './Login';

const {baseURL} = require("./configAPI")

/////////////////////////////////////////GET
var HeadersGetUsers = new Headers();
HeadersGetUsers.append("user-token",getToken());
HeadersGetUsers.append("Content-Type", "application/json;charset=UTF-8");

var requestOptions = {
  method: 'GET',
  headers: HeadersGetUsers,
  redirect: 'follow'
};
const dataUsersAPI = async()=>{
    console.log(baseURL+"/users");
    return await fetch(baseURL+"/users", requestOptions)
    .then(responseUsers => {
        const data = responseUsers.json();
        return data;
    })
    .catch(error => console.log('error', error));
}

//-------------------------------------------update
var HeadersPutUsers = new Headers();
HeadersPutUsers.append("Content-Type", "application/json;charset=UTF-8");
HeadersPutUsers.append("user-token", getToken());

// var requestOptions = {
//   method: 'PUT',
//   headers: myHeaders,
//   body: raw,
//   redirect: 'follow'
// };
export const PutUsersAPI = async(data)=>{
    const {Rut,Nombre,Apellidos,Correo_electronico,Estado,Cargo} = data
    var raw = JSON.stringify({
      "Rut":`${Rut}`,
      "Nombre":`${Nombre}`,
      "Apellidos":`${Apellidos}`,
      "Correo_electronico":`${Correo_electronico}`,
      "Estado":`${Estado}`,
      "Cargo":`${Cargo}`
    });
    return await fetch(`http://localhost:3100/api/users/${Rut}`, {
      method: 'PUT',
      headers: HeadersPutUsers,
      body: raw,
      redirect: 'follow'
    })
      .then(response => response.text())
      .then(result => result)
      .catch(error => console.log('error', error));
}


//------------------------------------------DELETE USER
var HeadersDeleteUsers = new Headers();
HeadersDeleteUsers.append("user-token", getToken());

var requestOptionsDelete = {
  method: 'DELETE',
  headers: HeadersDeleteUsers,
  redirect: 'follow'
};
export const DeleteUsersAPI = async(data)=>{
return await fetch(`http://localhost:3100/api/users/${data}`, requestOptionsDelete)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
}

///////////////////////////////////////////CREATE USER
var HeadersCreateUsers = new Headers();
HeadersCreateUsers.append("user-token", getToken());
HeadersCreateUsers.append("Content-Type", "application/json");

export const CreateUsersAPI = async(data)=>{
  const {Rut,Nombre,Apellidos,Correo_electronico,Estado,Cargo} = data
  var raw = JSON.stringify({
    "Rut":`${Rut}`,
    "Nombre":`${Nombre}`,
    "Apellidos":`${Apellidos}`,
    "Correo_electronico":`${Correo_electronico}`,
    "Estado":`${Estado}`,
    "Cargo":`${Cargo}`
  });
return fetch("http://localhost:3100/api/users/", {
  method: 'POST',
  headers: HeadersCreateUsers,
  body: raw,
  redirect: 'follow'
})
  .then(response => response.text())
  .then(result => {
    console.log(result);
    CreateLoginAPI(Rut);
  })
  .catch(error => console.log('error', error));
}

export default dataUsersAPI;
