var chartElement = document.createElement('div');
chartElement.setAttribute("id", "rsichart");

var chartRSI = LightweightCharts.createChart(chartElement, {
width: 1000,
  height: 300,
  layout: {
    background: {
      type: 'solid',
      color: '#131722',
    },
    textColor: '#d1d4dc',
  },
  grid: {
    vertLines: {
      visible: true,
      color: 'rgba(42, 46, 57, 0.6)',
    },
    horzLines: {
      visible: true,
      color: 'rgba(42, 46, 57, 0.6)',
    },
  },
  rightPriceScale: {
    borderVisible: false,
  },
  timeScale: {
    //borderVisible: false,
    fixLeftEdge: true,
    fixRightEdge: true,
    visible: true,
  },
  crosshair: {
    mode: LightweightCharts.CrosshairMode.Normal,
    horzLine: {
      visible: true,
    },
  },
});


var lineSeries = chartRSI.addLineSeries({
    color: '#2962FF',
    lineWidth: 3,
});

const weekRSIData = [];

for (const key in weeklyData) {
  if (weeklyData.hasOwnProperty(key)) {
    const item = weeklyData[key];
    weekRSIData.push({
      time: item.Date,
      value: item.rsi
    });
  }
}

lineSeries.setData(weekRSIData);
document.body.appendChild(chartElement);