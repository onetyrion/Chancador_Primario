import React from 'react';
import TablaPivote from '../../assets/jss/material-dashboard-react/components/pivotTable'
import { baseURL } from 'API/configAPI';

function pivotDetenciones(props){

    return(
        <div>
        <TablaPivote urlData={baseURL+"/dm/pivotDetenciones"}/>
        </div>
    )
}

export default pivotDetenciones;