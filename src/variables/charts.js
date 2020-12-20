
// ##############################
// // // Disponibilidad
// #############################

const disp_metas = (indicador,values)=>{
  let pom=0, actual = 0, delta_pom = 0, delta_actual = 0;
  if (values) {
    values=metasCalculo(indicador,values)
    pom = values[0] && values[0] ? (values[0]).toFixed(2) : 0;
    actual = values[0] && values[0]  ? (values[1]).toFixed(2) : 0;
    if (Math.round(pom-actual)<0) {
      delta_pom=((pom-actual)*-1).toFixed(2);;
    }else{
      delta_actual=(pom-actual).toFixed(2);;
    }
  }
  return {
    labels: [
      'Actual',
      'POM',
      'Delta'
    ],
    datasets: [{
      label:"dispdiaria",
      data: [pom, 0, delta_pom],
      backgroundColor: [
      '#fb8c00',
      '#36A2EB',
      '#43a047'
      ],
      hoverBackgroundColor: [
      '#fb8c00',
      '#8EC9F0',
      '#43a047'
      ],
      circumference: (1.0 * Math.PI)
    },{
      label:"dispdiaria1",
      data: [0, actual, delta_actual],
      backgroundColor: [
      '#fff',
      '#36A2EB',
      '#43a047'
      ],
      hoverBackgroundColor: [
      '#fb8c00',
      '#8EC9F0',
      '#43a047'
      ],
      circumference: (1.0 * Math.PI)
    },
  ]
}
};
const metasCalculo = (indicador,values)=>{
switch (indicador) {
  case "Disponibilidad":
    return [values.Disponiblidad_Anual,values.Disponibilidad_Metas]
  case "MTTR":
    return [values.MTTR,values.MTTR_Metas]
  case "MTBF":
    return [values.MTBF,values.MTBF_Metas]
  case "MTBME":
    return [values.MTBME,values.MTBME_Metas]
  default:
    return [0,100];
}
}

module.exports = {
  disp_metas
};
