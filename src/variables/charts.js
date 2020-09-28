// ##############################
// // // javascript library for creating charts
// #############################
var Chartist = require("chartist");
const { tiposMantencion } =  require("API/DM");

// ##############################
// // // variables used to create animation on charts
// #############################
var delays = 80,
  durations = 500;


// ##############################
// // // Disponibilidad
// #############################

//////////////Diaria

const dailySalesChart = {
  data: {
    labels: [ "5" , "10" , "15" , "20" , "30" , "35 Días "],
    series : [[100.0,75.9,100.0,98.3,56.7,96.7],[100,100,100,100,100,100]]
    //series: [[100,100,100,100,100,100,100,100,100,100,100]]
  },
  options: {
    lineSmooth: Chartist.Interpolation.cardinal({
      tension: 0
    }),
    low: 50,
    high: 110, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
    chartPadding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  },
  // for animation
  animation: {
    draw: function(data) {
      if (data.type === "line" || data.type === "area") {
        data.element.animate({
          d: {
            begin: 600,
            dur: 700,
            from: data.path
              .clone()
              .scale(1, 0)
              .translate(0, data.chartRect.height())
              .stringify(),
            to: data.path.clone().stringify(),
            easing: Chartist.Svg.Easing.easeOutQuint
          }
        });
      } else if (data.type === "point") {
        data.element.animate({
          opacity: {
            begin: (data.index + 1) * delays,
            dur: durations,
            from: 0,
            to: 1,
            easing: "ease"
          }
        });
      }
    }
  }
};

const dispDiaria_metas = {
	labels: [
		'Actual',
		'POM',
		'Delta'
	],
	datasets: [{
		data: [100,0,0],
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
		data: [0,94, 6],
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
]};


//////////////HISTORICA
const disp_histChart = (data) =>{
  //console.log(data);
  //b year a Month
  return({
    labels: ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'],
    datasets: [{
      label: 'Real',
      borderColor: "#fb8c00",
      backgroundColor: "#FFAE4C",
      data: data.DataDisponibilidad,
    }, {
      label: 'Meta',
      borderColor: "#43a047",
      backgroundColor: "#7ADA7E",
      data: [98,97,100,96,90,96,100,99,97,92,99,100,],
    }]
  })
}


// ##############################
// // // MTTR 
// #############################

//0.0,0.0,0.0,0.0,0.0,4.6,4.6,3.4,3.4,3.4,3.4,3.4,3.4,3.4,3.4,3.4,3.4,3.4,3.4,3.4,3.4,3.4,2.7,2.7,2.7,2.7,2.7,2.7,2.7,2.7,2.7
const mttrdiarioChart = {
  data: {
    labels: [ "5" , "10" , "15" , "20" , "30" , "35 Días "],
    series : [[0.0,4.6,3.4,3.4,2.7,6.4]]
    //series: [[100,100,100,100,100,100,100,100,100,100,100]]
  },
  options: {
    lineSmooth: Chartist.Interpolation.cardinal({
      tension: 0
    }),
    low: 0,
    high: 24, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
    chartPadding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  },
  // for animation
  animation: {
    draw: function(data) {
      if (data.type === "line" || data.type === "area") {
        data.element.animate({
          d: {
            begin: 600,
            dur: 700,
            from: data.path
              .clone()
              .scale(1, 0)
              .translate(0, data.chartRect.height())
              .stringify(),
            to: data.path.clone().stringify(),
            easing: Chartist.Svg.Easing.easeOutQuint
          }
        });
      } else if (data.type === "point") {
        data.element.animate({
          opacity: {
            begin: (data.index + 1) * delays,
            dur: durations,
            from: 0,
            to: 1,
            easing: "ease"
          }
        });
      }
    }
  }
};
const mttrDiaria_metas = {
  labels: [
    'Actual',
    'Budget',
    'Delta'
  ],
  datasets: [{
    data: [2.7,0,-1.5],
    backgroundColor: [
    '#fb8c00',
    '#36A2EB',
    '#f44336'
    ],
    hoverBackgroundColor: [
    '#fb8c00',
    '#8EC9F0',
    '#f44336'
    ],
    circumference: (1.0 * Math.PI)
  },{
    data: [0,1.2, 0],
    backgroundColor: [
    '#fff',
    '#36A2EB',
    '#f44336'
    ],
    hoverBackgroundColor: [
    '#fb8c00',
    '#36A2EB',
    '#f44336'
    ],
    circumference: (1.0 * Math.PI)
  },
]};
///////////HISTORICA
const mttr_histChart = (prop)=> {
  // const data = tiposMantencion(prop)
  // .then((a)=>a)
  //console.log(prop);
  //console.log(prop[0]);
  return({
    labels: ["Ene" , "Feb", "Mar", "Abr","May", "Jun", "Jul","Ago","Sep","Oct","Nov","Dic"],
    datasets: [
      {
      data: prop,
      label:"MTTR",
      backgroundColor: 
      '#00acc1'
      ,
      hoverBackgroundColor: 
      '#26c6db',
    }
    ]
    })
}

// ##############################
// // // MTBF
// #############################
//1004.6,1004.6,1004.6,1004.6,1004.6,67.4,74.2,57.2,65.2,65.2,65.2,89.2,105.2,105.2,105.2,105.2,105.2,105.2,105.2,105.2,105.2,105.2,121.2,127.2,133.2,139.2,145.2,151.2,157.2,163.2,169.2
const mtbfdiarioChart = {
  data: {
    labels: [ "5" , "10" , "15" , "20" , "30" , "35 Días "],
    series : [[67.4,65.2,89.2,105.2,57.2,169.2]]
    //series: [[100,100,100,100,100,100,100,100,100,100,100]]
  },
  options: {
    lineSmooth: Chartist.Interpolation.cardinal({
      tension: 0
    }),
    low: 0,
    high: 200, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
    chartPadding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  },
  // for animation
  animation: {
    draw: function(data) {
      if (data.type === "line" || data.type === "area") {
        data.element.animate({
          d: {
            begin: 600,
            dur: 700,
            from: data.path
              .clone()
              .scale(1, 0)
              .translate(0, data.chartRect.height())
              .stringify(),
            to: data.path.clone().stringify(),
            easing: Chartist.Svg.Easing.easeOutQuint
          }
        });
      } else if (data.type === "point") {
        data.element.animate({
          opacity: {
            begin: (data.index + 1) * delays,
            dur: durations,
            from: 0,
            to: 1,
            easing: "ease"
          }
        });
      }
    }
  }
};
const mtbfDiaria_metas = {
	labels: [
		'Actual',
		'POM',
		'Delta'
	],
	datasets: [{
		data: [169,0,0],
		backgroundColor: [
		'#fb8c00',
		'#36A2EB',
		'#43a047'
		],
		hoverBackgroundColor: [
		'#fb8c00',
		'#36A2EB',
		'#43a047'
    ],
    circumference: (1.0 * Math.PI)
	},{
		data: [0,110, 59],
		backgroundColor: [
		'#fff',
		'#36A2EB',
		'#43a047'
		],
		hoverBackgroundColor: [
		'#fb8c00',
		'#36A2EB',
		'#43a047'
    ],
    circumference: (1.0 * Math.PI)
  },
]};
///////////HISTORICA
const mtbf_histChart = (prop)=> {
  // const data = tiposMantencion(prop)
  // .then((a)=>a)
  //console.log(prop);
  //console.log(prop[0]);
  return({
    labels: ["Ene" , "Feb", "Mar", "Abr","May", "Jun", "Jul","Ago","Sep","Oct","Nov","Dic"],
    datasets: [
      {
      data: prop,
      label:"MTBF",
      backgroundColor: 
      '#e53935'
      ,
      hoverBackgroundColor: 
      '#ef5350',
    }
    ]
    })
}

// ##############################
// // // MTBME DIARIO
// #############################

///////////HISTORICA
const mtbme_histChart = (prop)=> {
  // const data = tiposMantencion(prop)
  // .then((a)=>a)
  //console.log(prop);
  //console.log(prop[0]);
  return({
    labels: ["Ene" , "Feb", "Mar", "Abr","May", "Jun", "Jul","Ago","Sep","Oct","Nov","Dic"],
    datasets: [
      {
      data: prop,
      label:"MTBME",
      backgroundColor: 
      '#8e24aa'
      ,
      hoverBackgroundColor: 
      '#ab47bc',
    }
    ]
    })
}


// ##############################
// // // Horas totales programadas y no programadas de MANTENCIÓN
// #############################
//1004.6,1004.6,1004.6,1004.6,1004.6,67.4,74.2,57.2,65.2,65.2,65.2,89.2,105.2,105.2,105.2,105.2,105.2,105.2,105.2,105.2,105.2,105.2,121.2,127.2,133.2,139.2,145.2,151.2,157.2,163.2,169.2
const hrsmantencionChart = {
  data: {
    series: [[336.02], [122.17]],
    labels: [["336.2 hrs Progr."], ["122.16 hrs No Progr."]]
  },
  options:{
    seriesBarDistance: 50,
    reverseData: true,
    horizontalBars: true,
    axisY: {
      offset: 70
    }
  },animation:{

  }
};


// ##############################
// // // Email Subscriptions
// #############################

const emailsSubscriptionChart = {
  data: {
    series: [[12], [443]],
    labels: [["12 averías"], ["443 horas"]]
  },

};


// ##############################
// // // Completed Tasks
// #############################

const completedTasksChart = {
  data: {
    labels: ["12am", "3pm", "6pm", "9pm", "12pm", "3am", "6am", "9am"],
    series: [[230, 750, 450, 300, 280, 240, 200, 190]]
  },
  options: {
    lineSmooth: Chartist.Interpolation.cardinal({
      tension: 0
    }),
    low: 0,
    high: 1000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
    chartPadding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  },
  animation: {
    draw: function(data) {
      if (data.type === "line" || data.type === "area") {
        data.element.animate({
          d: {
            begin: 600,
            dur: 700,
            from: data.path
              .clone()
              .scale(1, 0)
              .translate(0, data.chartRect.height())
              .stringify(),
            to: data.path.clone().stringify(),
            easing: Chartist.Svg.Easing.easeOutQuint
          }
        });
      } else if (data.type === "point") {
        data.element.animate({
          opacity: {
            begin: (data.index + 1) * delays,
            dur: durations,
            from: 0,
            to: 1,
            easing: "ease"
          }
        });
      }
    }
  }
};


// ##############################
// // // Horas de Mantención por Tipo de Mantención
// #############################
// const hrs = .then((a)=>a)
const averiasChart =(prop)=> {
  // const data = tiposMantencion(prop)
  // .then((a)=>a)
  //console.log("prop");
  console.log(prop);
  return({
    labels: [
      ('Total'),
      'Mecánica',
      'Eléctrica'
    ],
    datasets: [
      {
      label:"Total",
      data: [prop[0],0,0],
      backgroundColor:
      '#fb8c00',
    },{
      label:"Mecanicas",
      data: [0,prop[1],0],
      backgroundColor:
      '#36A2EB',
    },{
      label:"Eléctricas",
      data: [0,0,prop[2]],
      backgroundColor:
      '#43a047',
    }]
  })
}

// ##############################
// // // Componentes
// #############################

const componentesChart = (data)=>{
  //Totales programadas noprogramadas
  //console.log(data);
  return({
    labels: ["31CR01", "32CV02", "31FE016", "Picaroca"],
    datasets: [
      {
        label: "Mant. Programada",
        backgroundColor: "#fb8c00",
        data: data.Programadas,
        stack: 'Stack 0',
      },
      {
        label: "Mant. no Programada",
        backgroundColor: "#36A2EB",
        data: data.NoProgramadas,
        stack: 'Stack 1',
      }
    ],options: {
      tooltips: {
        mode: 'index',
        intersect: false
      },
      responsive: true,
      scales: {
        xAxes: [{
          stacked: true,
        }],
        yAxes: [{
          stacked: true
        }]
      }
    }
  })
}

/////////Eventos

const eventMantChart = (data)=>{
  //console.log(data)
  return({
    labels: [
      'Mant. Programada',
      'Mant. No Programada'
    ],
    datasets: [{
      data: [data[1],data[2]],
      backgroundColor: [
      '#dc3545',
      '#36A2EB',
      '#43a047'
      ],
      hoverBackgroundColor: [
      '#E4525F',
      '#8EC9F0',
      '#43a047'
      ],
      circumference: (1.0 * Math.PI)
    }]
  })
};



module.exports = {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart,
  mttrdiarioChart,
  mtbfdiarioChart,
  hrsmantencionChart,
  disp_histChart,
  mttr_histChart,
  mtbf_histChart,
  mtbme_histChart,
  dispDiaria_metas,
  mttrDiaria_metas,
  mtbfDiaria_metas,
  averiasChart,
  componentesChart,
  eventMantChart
};
