import Cookies from 'universal-cookie';

const cookies = new Cookies();
const {baseURL} = require("../configAPI")

var HeadersGetCategorias = new Headers();
HeadersGetCategorias.append("user-token",cookies.get('user-token'));
HeadersGetCategorias.append("Content-Type", "application/json;charset=UTF-8");

//############################## GET AREA PRODUCTIVA
var requestOptions = {
  method: 'GET',
  headers: HeadersGetCategorias,
  redirect: 'follow'
};
export const titlesCategoriaAPI = async()=>{
  return await fetch(baseURL+"/categoria", requestOptions)
    .then(response => response.json())
    .then(value => {
      // IDMAQUINARIA: NOMBRE
      var column = {};
      for (let i = 0; i < Object.keys(value).length; i++) {
        let key = value[i].Id_categoria.toString();
        let valor = value[i].Nombre_categoria.toString();
        column[key]=valor;
      }
      return column;
    })
    .catch(error => console.log('error', error));
}