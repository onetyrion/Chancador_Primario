import Cookies from 'universal-cookie';
import { Auth } from './Auth';
// import { getToken } from '../API/helpers';

const {baseURL} = require("./configAPI");
const cookies = new Cookies();
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
var HeadersUserLogin = new Headers();
HeadersUserLogin.append("user-token",cookies.get('user-token'));
HeadersUserLogin.append("Content-Type", "application/json;charset=UTF-8");

var requestOptionsDelete = {
  method: 'DELETE',
  headers: HeadersUserLogin,
  redirect: 'follow'
};
export const DeleteLoginAPI = async(data)=>{
return await fetch(baseURL+`/login/${data}`, requestOptionsDelete)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
}

export const PutLoginAPI = async(data,currentPass)=>{
  const user = await cookies.get('user', {path: "/"});
  const rol = await cookies.get('rol', {path: "/"});
  const result = await Auth(user,currentPass);
  if (result) {
    // console.log(result.error)
    return result;
  }
  var raw = JSON.stringify({
    "Rut":user,
    "Password": data,
    "Id_rol":rol});
    console.log(raw);
    var requestOptionsPut = {
    method: 'PUT',
    headers: HeadersUserLogin,
    body: raw,
    redirect: 'follow'
  };
  return await fetch(baseURL+`/login/${user}`, requestOptionsPut)
    .then(response => response.text())
    .then(result => result)
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
  await fetch(baseURL+`/login/create`, {
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