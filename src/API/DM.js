import {
    getToken,
    // deleteToken,
    setToken
  } from '../API/helpers';
  const {baseURL} = require("./configAPI");
  

// ***********************************
//             Tipos de Mantecion
// ***********************************
var HeadersGetUsers = new Headers();
HeadersGetUsers.append("user-token",getToken());
HeadersGetUsers.append("Content-Type", "application/json;charset=UTF-8");

var requestOptions = {
  method: 'GET',
  headers: HeadersGetUsers,
  redirect: 'follow'
};
export const tiposMantencion = async (year)=>{
    console.log(baseURL+"/dm/tiposmantencion/"+year);
    return await fetch(baseURL+"/dm/tiposmantencion/"+year, requestOptions)
    .then(responseUsers => {
        const data = responseUsers.json();
        //console.log(data);
        return data;
    })
    .catch(error => console.log('error', error));
}

// ***********************************
//             Tipos de Componentes
// ***********************************
var HeadersGetUsers = new Headers();
HeadersGetUsers.append("user-token",getToken());
HeadersGetUsers.append("Content-Type", "application/json;charset=UTF-8");

var requestOptions = {
  method: 'GET',
  headers: HeadersGetUsers,
  redirect: 'follow'
};
export const tiposComponentes = async (year)=>{
    console.log(baseURL+"/dm/tiposcomponentes/"+year);
    return await fetch(baseURL+"/dm/tiposcomponentes/"+year, requestOptions)
    .then(responseUsers => {
        var data = responseUsers.json();
        //console.log(data);
        return data;
    })
    .catch(error => console.log('error', error));
}

// ***********************************
//             Tipos de Componentes
// ***********************************
var HeadersGetUsers = new Headers();
HeadersGetUsers.append("user-token",getToken());
HeadersGetUsers.append("Content-Type", "application/json;charset=UTF-8");

var requestOptions = {
  method: 'GET',
  headers: HeadersGetUsers,
  redirect: 'follow'
};
export const eventosMantenciones = async (year)=>{
    console.log(baseURL+"/dm/eventosmantencion/"+year);
    return await fetch(baseURL+"/dm/eventosmantencion/"+year, requestOptions)
    .then(responseEvent => responseEvent.json())
    .then(res=>{
        //console.log(res[0][0]);
        const values = res[0][0];
        return values;
    })
    .catch(error => console.log('error', error));
}
// ***********************************
//             Disponibilidad Historica
// ***********************************
var HeadersGetUsers = new Headers();
HeadersGetUsers.append("user-token",getToken());
HeadersGetUsers.append("Content-Type", "application/json;charset=UTF-8");

var requestOptions = {
  method: 'GET',
  headers: HeadersGetUsers,
  redirect: 'follow'
};
export const disponibilidadanual = async (year)=>{
    console.log(baseURL+"/dm/disponibilidadanual/"+year);
    return await fetch(baseURL+"/dm/disponibilidadanual/"+year, requestOptions)
    .then(responseEvent => responseEvent.json())
    .then(res=>{
        //console.log(res[0][0]);
        return res;
    })
    .catch(error => console.log('error', error));
}

// ***********************************
//             MMTR Historica
// ***********************************
var HeadersGetUsers = new Headers();
HeadersGetUsers.append("user-token",getToken());
HeadersGetUsers.append("Content-Type", "application/json;charset=UTF-8");

var requestOptions = {
  method: 'GET',
  headers: HeadersGetUsers,
  redirect: 'follow'
};
export const mttranual = async (year)=>{
    console.log(baseURL+"/dm/mttranual/"+year);
    return await fetch(baseURL+"/dm/mttranual/"+year, requestOptions)
    .then(responseEvent => responseEvent.json())
    .then(res=>{
        //console.log(res[0][0]);
        return res;
    })
    .catch(error => console.log('error', error));
}

// ***********************************
//             MMTBF Historica
// ***********************************
var HeadersGetUsers = new Headers();
HeadersGetUsers.append("user-token",getToken());
HeadersGetUsers.append("Content-Type", "application/json;charset=UTF-8");

var requestOptions = {
  method: 'GET',
  headers: HeadersGetUsers,
  redirect: 'follow'
};
export const mtbfanual = async (year)=>{
    console.log(baseURL+"/dm/mtbfanual/"+year);
    return await fetch(baseURL+"/dm/mtbfanual/"+year, requestOptions)
    .then(responseEvent => responseEvent.json())
    .then(res=>{
        //console.log(res[0][0]);
        return res;
    })
    .catch(error => console.log('error', error));
}
// ***********************************
//             MTBME Historica
// ***********************************
var HeadersGetUsers = new Headers();
HeadersGetUsers.append("user-token",getToken());
HeadersGetUsers.append("Content-Type", "application/json;charset=UTF-8");

var requestOptions = {
  method: 'GET',
  headers: HeadersGetUsers,
  redirect: 'follow'
};
export const mtbmeanual = async (year)=>{
    console.log(baseURL+"/dm/mtbmeanual/"+year);
    return await fetch(baseURL+"/dm/mtbmeanual/"+year, requestOptions)
    .then(responseEvent => responseEvent.json())
    .then(res=>{
        //console.log(res);
        return res;
    })
    .catch(error => console.log('error', error));
}