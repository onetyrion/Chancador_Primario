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
const dataMaquinariaAPI = async()=>{
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

export default dataMaquinariaAPI;