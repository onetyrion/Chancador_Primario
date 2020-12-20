import React, {useState, useRef, useEffect} from 'react';
import * as WebDataRocksReact from './webdatarocks.react';
import Cookies from 'universal-cookie';


function PivotTable(props){
  const cookies = new Cookies();
  var myRef = null;
  myRef = useRef();
//   const urlFecth = 'http://localhost:3100/api/dm/pivot' //url de datos json
  const [data, setData]= useState([]) // estado para guardar data
  const loadingMessage = 'Cargando'

  const reportComplete = () => {
    console.log(">>>>>", myRef.webdatarocks.getReport());
  }
  const getData = async()=>{
    await fetch(props.urlData, {
      headers:{
        'Content-Type': 'application/json',
        'user-token':cookies.get('user-token')
      }
    }).then(res => res.json())
    .then(response => {
      // console.log(response)
        const {pivotDates} = response
        setData(pivotDates)
    })
    .catch(error => {
      setData([])
      console.error('Error:', error)
    });
  }
  //Recibe datos de un json
  useEffect(() => {
    getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
 
  return (
    <div>
      {data.length ?
       <WebDataRocksReact.Pivot 
       ref={(elem) => {
         myRef = elem
       }} 
       toolbar={true} 
       report={{dataSource: {data}}}
       reportcomplete={() => {
         reportComplete();
       }}  
     />
    :  loadingMessage
    }
      </div>
    ); 
}
    

export default PivotTable;