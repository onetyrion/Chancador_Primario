import {
  getToken,
  // deleteToken,
  // setToken,
  // getUser,
  // setUser,
} from '../API/helpers';
const {baseURL} = require("./configAPI");

var HeadersLogin = new Headers();
HeadersLogin.append("Content-Type", "application/json");

//var raw = JSON.stringify({"Rut":"000000000","Contraseña":"123456"});

const loginUserAPI = async (rut,pass) => {
  await fetch(baseURL+"/auth", {
    method: 'POST',
    headers: HeadersLogin,
    body: JSON.stringify({"Rut":rut,"Contraseña":pass}),
    redirect: 'follow'
  })
    .then(response => response.json())
    .then(result => {
      console.log(result);
      return result.success;
    })
    .catch(error => console.log('error', error));
}

//------------------------------------------DELETE USER ON LOGIN
var HeadersDeleteLogin = new Headers();
HeadersDeleteLogin.append("user-token", getToken());

var requestOptionsDelete = {
  method: 'DELETE',
  headers: HeadersDeleteLogin,
  redirect: 'follow'
};
export const DeleteLoginAPI = async(data)=>{
return await fetch(`http://localhost:3100/api/login/${data}`, requestOptionsDelete)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
}

//------------------------------------------CREATE USER ON LOGIN
var HeadersCreateLogin = new Headers();
HeadersCreateLogin.append("Content-Type", "application/json");

export const CreateLoginAPI = async(data)=>{
  var raw = JSON.stringify({
    "Rut":data,
    "Contraseña": `123456`,
    "Id_rol":1});
  await fetch("http://localhost:3100/api/login/create", {
  method: 'POST',
  headers: HeadersCreateLogin,
  body: raw,
  redirect: 'follow'
})
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
}
export default loginUserAPI;