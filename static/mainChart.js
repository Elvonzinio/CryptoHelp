function createSimpleSwitcher(items, activeItem, activeItemChangedCallback) {
  var switcherElement = document.createElement('div');
  switcherElement.classList.add('switcher');

  var intervalElements = items.map(function(item) {
    var itemEl = document.createElement('button');
    itemEl.innerText = item;
    itemEl.classList.add('switcher-item');
    itemEl.classList.toggle('switcher-active-item', item === activeItem);
    itemEl.addEventListener('click', function() {
      onItemClicked(item);
    });
    switcherElement.appendChild(itemEl);
    return itemEl;
  });

  function onItemClicked(item) {
    if (item === activeItem) {
      return;
    }

    intervalElements.forEach(function(element, index) {
      element.classList.toggle('switcher-active-item', items[index] === item);
    });

    activeItem = item;

    activeItemChangedCallback(item);
  }

  return switcherElement;
}

//set intervals and data
var intervals = ['1D', '1W', '1M'];

//BTC
const dayData = [];

for (const key in dailyData) {
  if (dailyData.hasOwnProperty(key)) {
    const item = dailyData[key];
    dayData.push({
      open: item.Open,
      high: item.High,
      low: item.Low,
      close: item.Close,
      time: item.Date
    });
  }
}

const weekData = [];

for (const key in weeklyData) {
  if (weeklyData.hasOwnProperty(key)) {
    const item = weeklyData[key];
    weekData.push({
      open: item.Open,
      high: item.High,
      low: item.Low,
      close: item.Close,
      time: item.Date
    });
  }
}

const monthData = [];

for (const key in monthlyData) {
  if (monthlyData.hasOwnProperty(key)) {
    const item = monthlyData[key];
    monthData.push({
      open: item.Open,
      high: item.High,
      low: item.Low,
      close: item.Close,
      time: item.Date
    });
  }
}

//RSI
const dayRSIData = [];

for (const key in dailyData) {
  if (dailyData.hasOwnProperty(key)) {
    const item = dailyData[key];
    dayRSIData.push({
      time: item.Date,
      value: item.rsi
    });
  }
}

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

const monthRSIData = [];

for (const key in monthlyData) {
  if (monthlyData.hasOwnProperty(key)) {
    const item = monthlyData[key];
    monthRSIData.push({
      time: item.Date,
      value: item.rsi
    });
  }
}

//Stoch
//K
const dayStochKData = [];

for (const key in dailyData) {
  if (dailyData.hasOwnProperty(key)) {
    const item = dailyData[key];
    dayStochKData.push({
      time: item.Date,
      value: item.StochK
    });
  }
}

const weekStochKData = [];

for (const key in weeklyData) {
  if (weeklyData.hasOwnProperty(key)) {
    const item = weeklyData[key];
    weekStochKData.push({
      time: item.Date,
      value: item.StochK
    });
  }
}

const monthStochKData = [];

for (const key in monthlyData) {
  if (monthlyData.hasOwnProperty(key)) {
    const item = monthlyData[key];
    monthStochKData.push({
      time: item.Date,
      value: item.StochK
    });
  }
}

//D
const dayStochDData = [];

for (const key in dailyData) {
  if (dailyData.hasOwnProperty(key)) {
    const item = dailyData[key];
    dayStochDData.push({
      time: item.Date,
      value: item.StochD
    });
  }
}

const weekStochDData = [];

for (const key in weeklyData) {
  if (weeklyData.hasOwnProperty(key)) {
    const item = weeklyData[key];
    weekStochDData.push({
      time: item.Date,
      value: item.StochD
    });
  }
}

const monthStochDData = [];

for (const key in monthlyData) {
  if (monthlyData.hasOwnProperty(key)) {
    const item = monthlyData[key];
    monthStochDData.push({
      time: item.Date,
      value: item.StochD
    });
  }
}

//MACD
const dayMACDData = [];

for (const key in dailyData) {
  if (dailyData.hasOwnProperty(key)) {
    const item = dailyData[key];
    dayMACDData.push({
      time: item.Date,
      value: item.macd
    });
  }
}

const weekMACDData = [];

for (const key in weeklyData) {
  if (weeklyData.hasOwnProperty(key)) {
    const item = weeklyData[key];
    weekMACDData.push({
      time: item.Date,
      value: item.macd
    });
  }
}

const monthMACDData = [];

for (const key in monthlyData) {
  if (monthlyData.hasOwnProperty(key)) {
    const item = monthlyData[key];
    monthMACDData.push({
      time: item.Date,
      value: item.macd
    });
  }
}

//picycletop
//long
const dayPiCycleTopLongData = [];

for (const key in dailyData) {
  if (dailyData.hasOwnProperty(key)) {
    const item = dailyData[key];
    dayPiCycleTopLongData.push({
      time: item.Date,
      value: item.longSMA350
    });
  }
}

//short
const dayPiCycleTopShortData = [];

for (const key in dailyData) {
  if (dailyData.hasOwnProperty(key)) {
    const item = dailyData[key];
    dayPiCycleTopShortData.push({
      time: item.Date,
      value: item.shortSMA111
    });
  }
}

//picyclebottom
//long
const dayPiCycleBottomLongData = [];

for (const key in dailyData) {
  if (dailyData.hasOwnProperty(key)) {
    const item = dailyData[key];
    dayPiCycleBottomLongData.push({
      time: item.Date,
      value: item.longSMA471
    });
  }
}

//short
const dayPiCycleBottomShortData = [];

for (const key in dailyData) {
  if (dailyData.hasOwnProperty(key)) {
    const item = dailyData[key];
    dayPiCycleBottomShortData.push({
      time: item.Date,
      value: item.shortEMA150
    });
  }
}

//volatility
const dayVolatilityData = [];

for (const key in dailyData) {
  if (dailyData.hasOwnProperty(key)) {
    const item = dailyData[key];
    dayVolatilityData.push({
      time: item.Date,
      value: item.volatility
    });
  }
}

const weekVolatilityData = [];

for (const key in weeklyData) {
  if (weeklyData.hasOwnProperty(key)) {
    const item = weeklyData[key];
    weekVolatilityData.push({
      time: item.Date,
      value: item.volatility
    });
  }
}

const monthVolatilityData = [];

for (const key in monthlyData) {
  if (monthlyData.hasOwnProperty(key)) {
    const item = monthlyData[key];
    monthVolatilityData.push({
      time: item.Date,
      value: item.volatility
    });
  }
}

//rci3lines
//short
const dayRciShortData = [];

for (const key in dailyData) {
  if (dailyData.hasOwnProperty(key)) {
    const item = dailyData[key];
    dayRciShortData.push({
      time: item.Date,
      value: item.rciShort
    });
  }
}

const weekRciShortData = [];

for (const key in weeklyData) {
  if (weeklyData.hasOwnProperty(key)) {
    const item = weeklyData[key];
    weekRciShortData.push({
      time: item.Date,
      value: item.rciShort
    });
  }
}

const monthRciShortData = [];

for (const key in monthlyData) {
  if (monthlyData.hasOwnProperty(key)) {
    const item = monthlyData[key];
    monthRciShortData.push({
      time: item.Date,
      value: item.rciShort
    });
  }
}

//middle
const dayRciMiddleData = [];

for (const key in dailyData) {
  if (dailyData.hasOwnProperty(key)) {
    const item = dailyData[key];
    dayRciMiddleData.push({
      time: item.Date,
      value: item.rciMiddle
    });
  }
}

const weekRciMiddleData = [];

for (const key in weeklyData) {
  if (weeklyData.hasOwnProperty(key)) {
    const item = weeklyData[key];
    weekRciMiddleData.push({
      time: item.Date,
      value: item.rciMiddle
    });
  }
}

const monthRciMiddleData = [];

for (const key in monthlyData) {
  if (monthlyData.hasOwnProperty(key)) {
    const item = monthlyData[key];
    monthRciMiddleData.push({
      time: item.Date,
      value: item.rciMiddle
    });
  }
}

//long
const dayRciLongData = [];

for (const key in dailyData) {
  if (dailyData.hasOwnProperty(key)) {
    const item = dailyData[key];
    dayRciLongData.push({
      time: item.Date,
      value: item.rciLong
    });
  }
}

const weekRciLongData = [];

for (const key in weeklyData) {
  if (weeklyData.hasOwnProperty(key)) {
    const item = weeklyData[key];
    weekRciLongData.push({
      time: item.Date,
      value: item.rciLong
    });
  }
}

const monthRciLongData = [];

for (const key in monthlyData) {
  if (monthlyData.hasOwnProperty(key)) {
    const item = monthlyData[key];
    monthRciLongData.push({
      time: item.Date,
      value: item.rciLong
    });
  }
}

//set series
var seriesData = new Map([
  ['1D', dayData],
  ['1W', weekData],
  ['1M', monthData],
]);

var seriesRsiData = new Map([
  ['1D', dayRSIData],
  ['1W', weekRSIData],
  ['1M', monthRSIData],
]);

var seriesStochKData = new Map([
  ['1D', dayStochKData],
  ['1W', weekStochKData],
  ['1M', monthStochKData],
]);

var seriesStochDData = new Map([
  ['1D', dayStochDData],
  ['1W', weekStochDData],
  ['1M', monthStochDData],
]);

var seriesMACDData = new Map([
  ['1D', dayMACDData],
  ['1W', weekMACDData],
  ['1M', monthMACDData],
]);

var seriesPiCycleTopLongData = new Map([
  ['1D', dayPiCycleTopLongData],
  ['1W', dayPiCycleTopLongData],
  ['1M', dayPiCycleTopLongData],
]);

var seriesPiCycleTopShortData = new Map([
  ['1D', dayPiCycleTopShortData],
  ['1W', dayPiCycleTopShortData],
  ['1M', dayPiCycleTopShortData],
]);

var seriesPiCycleBottomLongData = new Map([
  ['1D', dayPiCycleBottomLongData],
  ['1W', dayPiCycleBottomLongData],
  ['1M', dayPiCycleBottomLongData],
]);

var seriesPiCycleBottomShortData = new Map([
  ['1D', dayPiCycleBottomShortData],
  ['1W', dayPiCycleBottomShortData],
  ['1M', dayPiCycleBottomShortData],
]);

var seriesVolatilityData = new Map([
  ['1D', dayVolatilityData],
  ['1W', weekVolatilityData],
  ['1M', monthVolatilityData],
]);

var seriesRciShortData = new Map([
  ['1D', dayRciShortData],
  ['1W', weekRciShortData],
  ['1M', monthRciShortData],
]);

var seriesRciMiddleData = new Map([
  ['1D', dayRciMiddleData],
  ['1W', weekRciMiddleData],
  ['1M', monthRciMiddleData],
]);

var seriesRciLongData = new Map([
  ['1D', dayRciLongData],
  ['1W', weekRciLongData],
  ['1M', monthRciLongData],
]);


var switcherElement = createSimpleSwitcher(intervals, intervals[0], syncToInterval);


//create charts divs
var chartElement = document.createElement('div');
chartElement.setAttribute("id", "mainchart");
chartElement.setAttribute("class", "allcharts");

var chartRsiElement = document.createElement('div');
chartRsiElement.setAttribute("id", "rsichart");
chartRsiElement.setAttribute("class", "allcharts");
var infoRsi = document.createElement('div');
infoRsi.setAttribute("id", "inforsi");
infoRsi.setAttribute("class", "infoall");
infoRsi.innerText = "RSI";
var infoIconRsi = document.createElement('i');
infoIconRsi.classList.add('fas', 'fa-info-circle', 'info-icon', 'infoiconrsi');
infoRsi.appendChild(infoIconRsi);

var chartStochElement = document.createElement('div');
chartStochElement.setAttribute("id", "stochchart");
chartStochElement.setAttribute("class", "allcharts");
var infoStochRsi = document.createElement('div');
infoStochRsi.setAttribute("id", "infostochrsi");
infoStochRsi.setAttribute("class", "infoall");
infoStochRsi.innerText = "Stochastic RSI";
var infoIconStochRsi = document.createElement('i');
infoIconStochRsi.classList.add('fas', 'fa-info-circle', 'info-icon', 'infostochiconrsi');
infoStochRsi.appendChild(infoIconStochRsi);

var chartMacdElement = document.createElement('div');
chartMacdElement.setAttribute("id", "macdchart");
chartMacdElement.setAttribute("class", "allcharts");
var infoMacd = document.createElement('div');
infoMacd.setAttribute("id", "infomacd");
infoMacd.setAttribute("class", "infoall");
infoMacd.innerText = "MACD";
var infoIconMacd = document.createElement('i');
infoIconMacd.classList.add('fas', 'fa-info-circle', 'info-icon', 'infoiconmacd');
infoMacd.appendChild(infoIconMacd);

var chartPiCycleTopElement = document.createElement('div');
chartPiCycleTopElement.setAttribute("id", "picycletop");
chartPiCycleTopElement.setAttribute("class", "allcharts");
var infoTop = document.createElement('div');
infoTop.setAttribute("id", "infotop");
infoTop.setAttribute("class", "infoall");
infoTop.innerText = "Pi Cycle Top";
var infoIconTop = document.createElement('i');
infoIconTop.classList.add('fas', 'fa-info-circle', 'info-icon', 'infoicontop');
infoTop.appendChild(infoIconTop);

var chartPiCycleBottomElement = document.createElement('div');
chartPiCycleBottomElement.setAttribute("id", "picyclebottom");
chartPiCycleBottomElement.setAttribute("class", "allcharts");
var infoBottom = document.createElement('div');
infoBottom.setAttribute("id", "infobottom");
infoBottom.setAttribute("class", "infoall");
infoBottom.innerText = "Pi Cycle Bottom";
var infoIconBottom = document.createElement('i');
infoIconBottom.classList.add('fas', 'fa-info-circle', 'info-icon', 'infoiconbottom');
infoBottom.appendChild(infoIconBottom);

var chartVolatilityElement = document.createElement('div');
chartVolatilityElement.setAttribute("id", "volatilitychart");
chartVolatilityElement.setAttribute("class", "allcharts");
var infoVolatility = document.createElement('div');
infoVolatility.setAttribute("id", "infovolatility");
infoVolatility.setAttribute("class", "infoall");
infoVolatility.innerText = "Volatility";
var infoIconVolatility = document.createElement('i');
infoIconVolatility.classList.add('fas', 'fa-info-circle', 'info-icon', 'infoiconvolatility');
infoVolatility.appendChild(infoIconVolatility);

var chartRci3LinesElement = document.createElement('div');
chartRci3LinesElement.setAttribute("id", "rci3lineschart");
chartRci3LinesElement.setAttribute("class", "allcharts");

//set charts settings
var chart1 = LightweightCharts.createChart(chartElement, {
  width: 1800,
  height: 600,
  localization: {
    priceFormatter: (p) => `${p.toFixed(2).padEnd(10)}`,
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

var chartRSI = LightweightCharts.createChart(chartRsiElement, {
width: 1800,
  height: 300,
  localization: {
    priceFormatter: (p) => `${p.toFixed(2).padEnd(10)}`,
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

var chartStoch = LightweightCharts.createChart(chartStochElement, {
width: 1800,
  height: 300,
  localization: {
    priceFormatter: (p) => `${p.toFixed(2).padEnd(10)}`,
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

var chartMACD = LightweightCharts.createChart(chartMacdElement, {
width: 1800,
  height: 300,
  localization: {
    priceFormatter: (p) => `${p.toFixed(2).padEnd(10)}`,
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

var chartPiCycleTop = LightweightCharts.createChart(chartPiCycleTopElement, {
width: 1800,
  height: 300,
  localization: {
    priceFormatter: (p) => `${p.toFixed(2).padEnd(10)}`,
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

var chartPiCycleBottom = LightweightCharts.createChart(chartPiCycleBottomElement, {
width: 1800,
  height: 300,
  localization: {
    priceFormatter: (p) => `${p.toFixed(2).padEnd(10)}`,
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

var chartVolatility = LightweightCharts.createChart(chartVolatilityElement, {
width: 1800,
  height: 300,
  localization: {
    priceFormatter: (p) => `${p.toFixed(2).padEnd(10)}`,
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

var chartRci3Lines = LightweightCharts.createChart(chartRci3LinesElement, {
width: 1800,
  height: 300,
  localization: {
    priceFormatter: (p) => `${p.toFixed(2).padEnd(10)}`,
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

//chart1.timeScale().fitContent();

document.body.appendChild(switcherElement);
document.body.appendChild(chartElement);

document.body.appendChild(infoRsi);
document.body.appendChild(chartRsiElement);

document.body.appendChild(infoStochRsi);
document.body.appendChild(chartStochElement);

document.body.appendChild(infoMacd);
document.body.appendChild(chartMacdElement);

document.body.appendChild(infoTop);
document.body.appendChild(chartPiCycleTopElement);

document.body.appendChild(infoBottom);
document.body.appendChild(chartPiCycleBottomElement);

document.body.appendChild(infoVolatility);
document.body.appendChild(chartVolatilityElement);

document.body.appendChild(chartRci3LinesElement);

var candlestickSeries = null;
var lineSeries = null;
var stochKlineSeries = null;
var stochDlineSeries = null;
var histSeries = null;
var piCycleTopLongSeries = null
var piCycleTopShortSeries = null
var piCycleBottomLongSeries = null
var piCycleBottomShortSeries = null
var volatilitySeries = null
var RciShortSeries = null;
var RciMiddleSeries = null;
var RciLongSeries = null;

function syncToInterval(interval) {
  if (candlestickSeries) {
    chart1.removeSeries(candlestickSeries);
    candlestickSeries  = null;
  }
  if (lineSeries) {
    chartRSI.removeSeries(lineSeries);
    lineSeries  = null;
  }
  if (stochKlineSeries) {
    chartStoch.removeSeries(stochKlineSeries);
    stochKlineSeries  = null;
  }
  if (stochDlineSeries) {
    chartStoch.removeSeries(stochDlineSeries);
    stochDlineSeries  = null;
  }
  if (histSeries) {
    chartMACD.removeSeries(histSeries);
    histSeries  = null;
  }
  if (piCycleTopLongSeries) {
    chartPiCycleTop.removeSeries(piCycleTopLongSeries);
    piCycleTopLongSeries  = null;
  }
  if (piCycleTopShortSeries) {
    chartPiCycleTop.removeSeries(piCycleTopShortSeries);
    piCycleTopShortSeries  = null;
  }
  if (piCycleBottomLongSeries) {
    chartPiCycleBottom.removeSeries(piCycleBottomLongSeries);
    piCycleBottomLongSeries  = null;
  }
  if (piCycleBottomShortSeries) {
    chartPiCycleBottom.removeSeries(piCycleBottomShortSeries);
    piCycleBottomShortSeries  = null;
  }
  if (volatilitySeries) {
    chartVolatility.removeSeries(volatilitySeries);
    volatilitySeries  = null;
  }
  if (RciShortSeries) {
    chartRci3Lines.removeSeries(RciShortSeries);
    RciShortSeries  = null;
  }
  if (RciMiddleSeries) {
    chartRci3Lines.removeSeries(RciMiddleSeries);
    RciMiddleSeries  = null;
  }
  if (RciLongSeries) {
    chartRci3Lines.removeSeries(RciLongSeries);
    RciLongSeries  = null;
  }


  candlestickSeries  = chart1.addCandlestickSeries({
    //topColor: '#2962ff',
    //bottomColor: '#fff',
    //lineColor: '#2962ff',
    //lineWidth: 1,
  });
  lineSeries = chartRSI.addLineSeries({
    color: '#2962FF',
    lineWidth: 3,
  });
  stochKlineSeries = chartStoch.addLineSeries({
    color: '#2962FF',
    lineWidth: 2,
  });
  stochDlineSeries = chartStoch.addLineSeries({
    color: '#FF6D00',
    lineWidth: 2,
  });
  histSeries = chartMACD.addHistogramSeries({

  });
  piCycleTopLongSeries = chartPiCycleTop.addLineSeries({
    color: '#FFFFFF',
    lineWidth: 2,
  });
  piCycleTopShortSeries = chartPiCycleTop.addLineSeries({
    color: '#FFEB3B',
    lineWidth: 2,
  });
  piCycleBottomLongSeries = chartPiCycleBottom.addLineSeries({
    color: '#FF5252',
    lineWidth: 2,
  });
  piCycleBottomShortSeries = chartPiCycleBottom.addLineSeries({
    color: '#4CAF50',
    lineWidth: 2,
  });
  volatilitySeries = chartVolatility.addLineSeries({
    color: '#2962FF',
    lineWidth: 2,
  });
  RciShortSeries = chartRci3Lines.addLineSeries({
    color: '#FF0000',
    lineWidth: 1,
  });
  RciMiddleSeries = chartRci3Lines.addLineSeries({
    color: '#008000',
    lineWidth: 1,
  });
  RciLongSeries = chartRci3Lines.addLineSeries({
    color: '#0000FF',
    lineWidth: 1,
  });

  const histData = seriesMACDData.get(interval);
  let prevValue = 0;
  let color;

  histData.forEach(data => {
    if (data.value > 0) {
      color = '#26A69A';
      if (data.value < prevValue) {
          color = '#B2DFDB';
      }
    } else {
      color = '#FF5252';
      if (data.value > prevValue) {
          color = '#FFCDD2';
      }
    }

    data.color = color;
    prevValue = data.value;
  });

    histSeries.setData(histData);

  candlestickSeries.setData(seriesData.get(interval));
  lineSeries.setData(seriesRsiData.get(interval));
  stochKlineSeries.setData(seriesStochKData.get(interval));
  stochDlineSeries.setData(seriesStochDData.get(interval));
  piCycleTopLongSeries.setData(seriesPiCycleTopLongData.get(interval));
  piCycleTopShortSeries.setData(seriesPiCycleTopShortData.get(interval));
  piCycleBottomLongSeries.setData(seriesPiCycleBottomLongData.get(interval));
  piCycleBottomShortSeries.setData(seriesPiCycleBottomShortData.get(interval));
  volatilitySeries.setData(seriesVolatilityData.get(interval));
  RciShortSeries.setData(seriesRciShortData.get(interval));
  RciMiddleSeries.setData(seriesRciMiddleData.get(interval));
  RciLongSeries.setData(seriesRciLongData.get(interval));
  //histSeries.setData(seriesMACDData.get(interval));

    candlestickSeries.setMarkers([
	{ time: '2020-05-11', position: 'aboveBar', shape: 'circle', color: 'yellow', text: 'Havling', size: 1},
    ]);
}

syncToInterval(intervals[0]);

var theme = 0;
const changeChartStyleButton = document.getElementById('themeToggleButton');
changeChartStyleButton.addEventListener('click', () => {
  if (theme == 0){
  chart1.applyOptions({
  layout: {
    background: {
      type: 'solid',
      color: '#fff',
    },
    textColor: '#000',
  },
  grid: {
    vertLines: {
      visible: true,
      color: 'rgba(42, 46, 57, 0.1)',
    },
    horzLines: {
      visible: true,
      color: 'rgba(42, 46, 57, 0.1)',
    },
  },
  });

  chartRSI.applyOptions({
  layout: {
    background: {
      type: 'solid',
      color: '#fff',
    },
    textColor: '#000',
  },
  grid: {
    vertLines: {
      visible: true,
      color: 'rgba(42, 46, 57, 0.1)',
    },
    horzLines: {
      visible: true,
      color: 'rgba(42, 46, 57, 0.1)',
    },
  },
  });

  chartStoch.applyOptions({
  layout: {
    background: {
      type: 'solid',
      color: '#fff',
    },
    textColor: '#000',
  },
  grid: {
    vertLines: {
      visible: true,
      color: 'rgba(42, 46, 57, 0.1)',
    },
    horzLines: {
      visible: true,
      color: 'rgba(42, 46, 57, 0.1)',
    },
  },
  });

  chartMACD.applyOptions({
  layout: {
    background: {
      type: 'solid',
      color: '#fff',
    },
    textColor: '#000',
  },
  grid: {
    vertLines: {
      visible: true,
      color: 'rgba(42, 46, 57, 0.1)',
    },
    horzLines: {
      visible: true,
      color: 'rgba(42, 46, 57, 0.1)',
    },
  },
  });

  chartPiCycleTop.applyOptions({
  layout: {
    background: {
      type: 'solid',
      color: '#fff',
    },
    textColor: '#000',
  },
  grid: {
    vertLines: {
      visible: true,
      color: 'rgba(42, 46, 57, 0.1)',
    },
    horzLines: {
      visible: true,
      color: 'rgba(42, 46, 57, 0.1)',
    },
  },
  });

  chartPiCycleBottom.applyOptions({
  layout: {
    background: {
      type: 'solid',
      color: '#fff',
    },
    textColor: '#000',
  },
  grid: {
    vertLines: {
      visible: true,
      color: 'rgba(42, 46, 57, 0.1)',
    },
    horzLines: {
      visible: true,
      color: 'rgba(42, 46, 57, 0.1)',
    },
  },
  });

  chartVolatility.applyOptions({
  layout: {
    background: {
      type: 'solid',
      color: '#fff',
    },
    textColor: '#000',
  },
  grid: {
    vertLines: {
      visible: true,
      color: 'rgba(42, 46, 57, 0.1)',
    },
    horzLines: {
      visible: true,
      color: 'rgba(42, 46, 57, 0.1)',
    },
  },
  });

  chartRci3Lines.applyOptions({
  layout: {
    background: {
      type: 'solid',
      color: '#fff',
    },
    textColor: '#000',
  },
  grid: {
    vertLines: {
      visible: true,
      color: 'rgba(42, 46, 57, 0.1)',
    },
    horzLines: {
      visible: true,
      color: 'rgba(42, 46, 57, 0.1)',
    },
  },
  });
  theme = 1;
  } else if (theme == 1){
  chart1.applyOptions({
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
      color: 'rgba(42, 46, 57, 0.1)',
    },
    horzLines: {
      visible: true,
      color: 'rgba(42, 46, 57, 0.1)',
    },
  },
  });

  chartRSI.applyOptions({
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
  });

  chartStoch.applyOptions({
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
  });

  chartMACD.applyOptions({
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
  });

  chartPiCycleTop.applyOptions({
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
  });

  chartPiCycleBottom.applyOptions({
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
  });

  chartVolatility.applyOptions({
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
  });

  chartRci3Lines.applyOptions({
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
  });
  theme = 0;
  }

});

