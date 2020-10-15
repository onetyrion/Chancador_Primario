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
export const titletipoMaquinariaAPI = async()=>{
  return await fetch(baseURL+"/tipomaquinaria", requestOptions)
    .then(response => response.json())
    .then(value => {
      // IDMAQUINARIA: NOMBRE
      var column = {};
      for (let i = 0; i < Object.keys(value).length; i++) {
          let key = value[i].Id_Tipo.toString();
          let valor = value[i].Descripcion.toString();
          column[key]=valor;
        }
      return column;
    })
    .catch(error => {
      console.log('error', error);
      return error;
    });
}