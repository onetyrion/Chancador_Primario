import Cookies from 'universal-cookie';

const cookies = new Cookies();
const {baseURL} = require("../configAPI")

var HeadersGettipoMaquinaria = new Headers();
HeadersGettipoMaquinaria.append("user-token",cookies.get('user-token'));
HeadersGettipoMaquinaria.append("Content-Type", "application/json;charset=UTF-8");

//############################## GET TIPO MAQUINARIA
var requestOptions = {
  method: 'GET',
  headers: HeadersGettipoMaquinaria,
  redirect: 'follow'
};
export const titletipoMantencionAPI = async()=>{
  return await fetch(baseURL+"/tipomantencion", requestOptions)
    .then(response => response.json())
    .then(value => {
      var column = {};
      for (let i = 0; i < Object.keys(value).length; i++) {
          let key = value[i].Id_tipo.toString();
          let valor = value[i].Nombre.toString();
          column[key]=valor;
        }
      return column;
    })
    .catch(error => {
      console.log('error', error);
      return error;
    });
}