import React from 'react';
import TablaPivote from '../../assets/jss/material-dashboard-react/components/pivotTable'
import { baseURL } from 'API/configAPI';

function pivotDisponibilidad(props){

    return(
        <div>
        <TablaPivote urlData={baseURL+"/dm/pivotDisponibilidad"}/>
        </div>
    )
}

export default pivotDisponibilidad;