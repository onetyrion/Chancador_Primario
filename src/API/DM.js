import moment from 'moment';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

const {baseURL} = require("./configAPI");
  

// ***********************************
//             Tipos de Mantecion
// ***********************************
var headers = new Headers();
headers.append("user-token",cookies.get('user-token'));
headers.append("Content-Type", "application/json;charset=UTF-8");

var requestOptions = {
  method: 'GET',
  headers,
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

export const disponibilidadanual = async (year,equipo)=>{
    // console.log(year,equipo)
    let urlPeticion = baseURL+`/dm/disponibilidadanual/${year}/${equipo}`
    // console.log(urlPeticion);
    return await fetch(urlPeticion, requestOptions)
    .then(responseEvent => responseEvent.json())
    .then(res=>{
        return res;
    })
    .catch(error => console.log('error', error));
}

// ***********************************
//             MMTR Historica
// ***********************************

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

// ***********************************
//             PROGRAMACION ETL
// ***********************************

export const getETLSchedule = async (year)=>{
    // console.log(baseURL+"/dm/mtbmeanual/"+year);
    return await fetch(baseURL+"/dm/ETL", requestOptions)
    .then(responseEvent => responseEvent.json())
    .then(res=>{
        //console.log(res);
        return res;
    })
    .catch(error => console.log('error', error));
}

export const setETLSchedule = async (dataraw)=>{
    dataraw.active_start_time=moment(dataraw.active_start_date+" "+dataraw.active_start_time).format('HHmmss');
    dataraw.active_end_time=moment(dataraw.active_end_date+" "+dataraw.active_end_time).format('HHmmss');
    dataraw.active_start_date=moment(dataraw.active_start_date).format('YYYYMMDD');
    dataraw.active_end_date=moment(dataraw.active_end_date).format('YYYYMMDD');
    dataraw.freq_type=parseInt(dataraw.freq_type);
    dataraw.active_start_date=parseInt(dataraw.active_start_date);
    dataraw.active_start_time=parseInt(dataraw.active_start_time);
    dataraw.active_end_date=parseInt(dataraw.active_end_date);
    dataraw.active_end_time=parseInt(dataraw.active_end_time);
    var raw = JSON.stringify({
        "intjob_name":"JobDetencionesDM",
        "intname":"Shedule_JobDetencionesDM",
        "intenabled":1,
        "intfreq_type":dataraw.freq_type,
        "intfreq_interval":1,
        "intfreq_subday_type":1,
        "intfreq_subday_interval":1,
        "intfreq_relative_interval":0,
        "intfreq_recurrence_factor":dataraw.freq_type===8 || dataraw.freq_type===16 ? 1 : 0,
        "intactive_start_date":dataraw.active_start_date,
        "intactive_end_date":dataraw.active_end_date,
        "intactive_start_time":dataraw.active_start_time,
        "intactive_end_time":dataraw.active_end_time,
    })

    console.log(raw);
    return await fetch(baseURL+"/dm/ETL", {
        method: 'POST',
        headers: headers,
        body: raw,
        redirect: 'follow'
      })
    .then(responseEvent => responseEvent.json())
    .then(res=>{ console.log(res); return res; })
    .catch(error => error);
}
