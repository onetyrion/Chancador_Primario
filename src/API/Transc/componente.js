import Cookies from 'universal-cookie';

const cookies = new Cookies();
const {baseURL} = require("./configAPI")

var HeadersGetUsers = new Headers();
HeadersGetUsers.append("user-token",cookies.get('user-token'));
HeadersGetUsers.append("Content-Type", "application/json;charset=UTF-8");

//############################## GET USERS
var requestOptions = {
  method: 'GET',
  headers: HeadersGetUsers,
  redirect: 'follow'
};
const dataUsersAPI = async()=>{
  return await fetch(baseURL+"/users", requestOptions)
    .then(response => response.json())
    .then(value => {
      return value;
    })
    .catch(error => console.log('error', error));
}
export const dataUserfindOne = async()=>{
  return await fetch((baseURL+"/users/"+cookies.get('user')), requestOptions)
    .then(response => response.json())
    .then(value => {
      return value;
    })
    .catch(error => console.log('error', error));
}

//############################## UPDATE USERS

export const PutUsersAPI = async(data)=>{
    const {Rut,Nombre,Apellidos,Correo_electronico,Estado,Cargo} = data
    var raw = JSON.stringify({
      "Nombre":`${Nombre}`,
      "Apellidos":`${Apellidos}`,
      "Correo_electronico":`${Correo_electronico}`,
      "Estado":`${Estado}`,
      "Cargo":`${Cargo}`,
      "Id_empresa":`1`
    });
    return await fetch(`http://localhost:3100/api/users/${Rut}`, {
      method: 'PUT',
      headers: HeadersGetUsers,
      body: raw,
      redirect: 'follow'
    })
      .then(response => response.json())
      .then(result => {console.log(result);return result})
      .catch(error => console.log('error', error));
}

//------------------------------------------DELETE USER
export const DeleteUsersAPI = async(data)=>{
return await fetch(`http://localhost:3100/api/registrarusuario/${data}`, {
    method: 'DELETE',
    headers: HeadersGetUsers,
    redirect: 'follow'
  })
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
}
//############################## CREATE USER

export const CreateUsersAPI = async(data)=>{
  const {Rut,Nombre,Apellidos,Correo_electronico,Estado,Cargo} = data;
  let EstadoUser = (Estado ? "1" : "0"); 
  var raw = JSON.stringify({
    "Rut":`${Rut}`,
    "Nombre":`${Nombre}`,
    "Apellidos":`${Apellidos}`,
    "Correo_electronico":`${Correo_electronico}`,
    "Estado":`${EstadoUser}`,
    "Cargo":`${Cargo}`,
    "Id_empresa":`1`,
    "Id_rol":`1`
  });
return fetch("http://localhost:3100/api/registrarusuario/", {
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
  .catch(error => console.log('error', error));
}

export default dataUsersAPI;