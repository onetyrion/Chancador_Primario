// ##############################
// // // javascript library for creating charts
// #############################
var Chartist = require("chartist");

// ##############################
// // // variables used to create animation on charts
// #############################
var delays = 80,
  durations = 500;


// ##############################
// // // Disponibilidad
// #############################

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

//////////////HISTORICA
const disp_histChart = {
  data: {
    labels: [ "Ene" , "Feb", "Mar", "Abr","May", "Jun", "Jul","Ago","Sep","Oct","Nov","Dic"],
    series : [[95.27, 98.16, 98.72,94.66, 82.25, 98.67, 88.39, 98.27, 86.84, 99.86, 96.15, 98.67],[100,100,100,100,100,100,100,100,100,100,100,100]]
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

///////////HISTORICA
const mttr_histChart = {
  data: {
    series: [[0,10,0,0,0,4.6,4.6,3.4,3.4,3.4,3.4,4.3]],
    labels: ["Ene" , "Feb", "Mar", "Abr","May", "Jun", "Jul","Ago","Sep","Oct","Nov","Dic"]
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
// // // MTBF DIARIO
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

///////////HISTORICA
const mtbf_histChart = {
  data: {
    series: [[104.6,104.6,104.6,104.6,104.6,67.4,74.2,57.2,65.2,65.2,65.2,89.2]],
    labels: ["Ene" , "Feb", "Mar", "Abr","May", "Jun", "Jul","Ago","Sep","Oct","Nov","Dic"]
  },
  options: {
    lineSmooth: Chartist.Interpolation.cardinal({
      tension: 0
    }),
    low: 0,
    high: 124, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
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
// // // MTBME DIARIO
// #############################

///////////HISTORICA
const mtbme_histChart = {
  data: {
    series: [[104.6,104.6,104.6,104.6,104.6,67.4,74.2,57.2,65.2,65.2,65.2,89.2]],
    labels: ["Ene" , "Feb", "Mar", "Abr","May", "Jun", "Jul","Ago","Sep","Oct","Nov","Dic"]
  },
  options: {
    lineSmooth: Chartist.Interpolation.cardinal({
      tension: 0
    }),
    low: 0,
    high: 124, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
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
  mtbme_histChart
};
