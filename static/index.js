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

dailyData = JSON.parse(dailyData);
dailyData = dailyData.data;

weeklyData = JSON.parse(weeklyData);
weeklyData = weeklyData.data;

monthlyData = JSON.parse(monthlyData);
monthlyData = monthlyData.data;


var intervals = ['1D', '1W', '1M'];

const dayData = [];

for (const key in dailyData) {
  if (dailyData.hasOwnProperty(key)) {
    const item = dailyData[key];
    dayData.push({
      time: item.Date,
      value: item.Close
    });
  }
}


const weekData = [];

for (const key in weeklyData) {
  if (weeklyData.hasOwnProperty(key)) {
    const item = weeklyData[key];
    weekData.push({
      time: item.Date,
      value: item.Close
    });
  }
}


const monthData = [];

for (const key in monthlyData) {
  if (monthlyData.hasOwnProperty(key)) {
    const item = monthlyData[key];
    monthData.push({
      time: item.Date,
      value: item.Close
    });
  }
}


var seriesesData = new Map([
  ['1D', dayData],
  ['1W', weekData],
  ['1M', monthData],
]);

var switcherElement = createSimpleSwitcher(intervals, intervals[0], syncToInterval);

var chartElement = document.createElement('div');

var chart = LightweightCharts.createChart(chartElement, {
  width: 1000,
  height: 600,
  layout: {
    background: {
      type: 'solid',
      color: '#fff',
    },
    textColor: '#d1d4dc',
  },
  grid: {
    vertLines: {
      visible: false,
    },
    horzLines: {
      visible: false,
      color: 'rgba(42, 46, 57, 0.5)',
    },
  },
  rightPriceScale: {
    borderVisible: false,
  },
  timeScale: {
    borderVisible: false,
  },
  crosshair: {
    horzLine: {
      visible: false,
    },
  },
});

document.body.appendChild(chartElement);
document.body.appendChild(switcherElement);

var areaSeries = null;

function syncToInterval(interval) {
  if (areaSeries) {
    chart.removeSeries(areaSeries);
    areaSeries = null;
  }
  areaSeries = chart.addAreaSeries({
    topColor: '#2962ff',    //'rgba(76, 175, 80, 0.56)'
    bottomColor: 'rgba(41, 98, 255, 0.28)',
    lineColor: '#2962ff',
    lineWidth: 1,
  });
  areaSeries.setData(seriesesData.get(interval));
}

syncToInterval(intervals[0]);
