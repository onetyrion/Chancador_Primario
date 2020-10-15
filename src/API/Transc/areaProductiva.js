import Cookies from 'universal-cookie';

const cookies = new Cookies();
const {baseURL} = require("../configAPI")

var HeadersGetAreaProductiva = new Headers();
HeadersGetAreaProductiva.append("user-token",cookies.get('user-token'));
HeadersGetAreaProductiva.append("Content-Type", "application/json;charset=UTF-8");

//############################## GET AREA PRODUCTIVA
var requestOptions = {
  method: 'GET',
  headers: HeadersGetAreaProductiva,
  redirect: 'follow'
};
export const titlesaProductivaAPI = async()=>{
  return await fetch(baseURL+"/areaProductiva", requestOptions)
    .then(response => response.json())
    .then(value => {
      // IDMAQUINARIA: NOMBRE
      var column = {};
      for (let i = 0; i < Object.keys(value).length; i++) {
          let key = value[i].Id_area.toString();
          let valor = value[i].Nombre_area.toString();
          column[key]=valor;
        }
      return column;
    })
    .catch(error => console.log('error', error));
}
// export const dataMaquinariaAPI = async()=>{
//   return await fetch(baseURL+"/maquinaria", requestOptions)
//     .then(response => response.json())
//     .then(value => {
//       // IDMAQUINARIA: NOMBRE
//       // var column = {};
//       // for (let i = 0; i < Object.keys(value).length; i++) {
//       //     let key = value[i].Id_maquinaria.toString();
//       //     let valor = value[i].Nombre_maquinaria.toString();
//       //     column[key]=valor;
//       //   }
//       console.log(value)
//       return value;
//     })
//     .catch(error => console.log('error', error));
// }

// export default titlesMaquinariaAPI;