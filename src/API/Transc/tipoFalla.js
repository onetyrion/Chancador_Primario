import Cookies from 'universal-cookie';

const cookies = new Cookies();
const {baseURL} = require("../configAPI")

var HeadersGetTipoFalla = new Headers();
HeadersGetTipoFalla.append("user-token",cookies.get('user-token'));
HeadersGetTipoFalla.append("Content-Type", "application/json;charset=UTF-8");

//############################## GET AREA PRODUCTIVA
var requestOptions = {
  method: 'GET',
  headers: HeadersGetTipoFalla,
  redirect: 'follow'
};
export const titlestipofallaAPI = async()=>{
  return await fetch(baseURL+"/tipofalla", requestOptions)
    .then(response => response.json())
    .then(value => {
      // IDMAQUINARIA: NOMBRE
      var column = {};
      for (let i = 0; i < Object.keys(value).length; i++) {
        let key = value[i].Id_Tipo.toString();
        let valor = value[i].Nombre.toString();
        column[key]=valor;
      }
      return column;
    })
    .catch(error => console.log('error', error));
}