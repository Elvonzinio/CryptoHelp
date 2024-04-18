var chartElement = document.createElement('div');
chartElement.setAttribute("id", "stochchart");

var chart = LightweightCharts.createChart(chartElement, {
	width: 600,
  height: 300,
	rightPriceScale: {
	visible: true,
		borderVisible: false,
	},
		leftPriceScale: {
		visible: true,
    borderColor: 'rgba(197, 203, 206, 1)',
	},
	layout: {
		background: {
            type: 'solid',
            color: '#131722',
        },
		textColor: '#d1d4dc',
	},
	grid: {
		vertLines: {
			color: 'rgba(42, 46, 57, 0)',
		},
		horzLines: {
			color: 'rgba(42, 46, 57, 0.6)',
		},
	},
});

var areaSeries = chart.addAreaSeries({
	topColor: 'rgba(38,198,218, 0.56)',
	bottomColor: 'rgba(38,198,218, 0.04)',
	lineColor: 'rgba(38,198,218, 1)',
	lineWidth: 2,
});

var volumeSeries = chart.addLineSeries({
    color: '#2962FF',
    lineWidth: 3,
});

const dayRSIData2 = [];

for (const key in dailyData) {
  if (dailyData.hasOwnProperty(key)) {
    const item = dailyData[key];
    dayRSIData2.push({
      time: item.Date,
      value: item.rsi
    });
  }
}

const dayData2 = [];

for (const key in dailyData) {
  if (dailyData.hasOwnProperty(key)) {
    const item = dailyData[key];
    dayData2.push({
      time: item.Date,
      value: item.Close
    });
  }
}

areaSeries.setData(dayData2);

volumeSeries.setData(dayRSIData2);
document.body.appendChild(chartElement);