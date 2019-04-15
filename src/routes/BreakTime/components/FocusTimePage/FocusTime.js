import React from 'react'
import PropTypes from 'prop-types'
//import ChartistGraph from 'react-chartist';
//import {
//  PieChart, Pie, Sector, Cell,
//} from 'recharts';

//Sleep, Work, Driving, Break, Study
//Minute : 1440 minutes
// Hours : 24 HRS
// Getting Ready to work : 
/* 

const data = [
  { name: 'Sleep', value: 8 },
  { name: 'Work', value: 8 },
  { name: 'Group C', value: 1 },
  { name: 'Study', value: 4 },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];





var simpleLineChartData = {
  labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  series: [
    [12, 9, 7, 8, 5],
    [2, 1, 3.5, 7, 3],
    [1, 3, 4, 5, 6]
  ]
}
var options = {
  high: 10,
  low: -10,
  axisX: {
    labelInterpolationFnc: function(value, index) {
      return index % 2 === 0 ? value : null;
    }
  }
};

var data2 = {
  series: [5, 3, 4]
};

var sum = function(a, b) { return a + b };

var type = 'Bar'

var defaultOptions = {
  // Specify a fixed width for the chart as a string (i.e. '100px' or '50%')
  width: undefined,
  // Specify a fixed height for the chart as a string (i.e. '100px' or '50%')
  height: undefined,
  // Padding of the chart drawing area to the container element and labels as a number or padding object {top: 5, right: 5, bottom: 5, left: 5}
  chartPadding: 5,
  // Override the class names that are used to generate the SVG structure of the chart
  classNames: {
    chartPie: 'ct-chart-pie',
    chartDonut: 'ct-chart-donut',
    series: 'ct-series',
    slicePie: 'ct-slice-pie',
    sliceDonut: 'ct-slice-donut',
    sliceDonutSolid: 'ct-slice-donut-solid',
    label: 'ct-label'
  },
  // The start angle of the pie chart in degrees where 0 points north. A higher value offsets the start angle clockwise.
  startAngle: 0,
  // An optional total you can specify. By specifying a total value, the sum of the values in the series must be this total in order to draw a full pie. You can use this parameter to draw only parts of a pie or gauge charts.
  total: undefined,
  // If specified the donut CSS classes will be used and strokes will be drawn instead of pie slices.
  donut: false,
  // If specified the donut segments will be drawn as shapes instead of strokes.
  donutSolid: false,
  // Specify the donut stroke width, currently done in javascript for convenience. May move to CSS styles in the future.
  // This option can be set as number or string to specify a relative width (i.e. 100 or '30%').
  donutWidth: 60,
  // If a label should be shown or not
  showLabel: true,
  // Label position offset from the standard position which is half distance of the radius. This value can be either positive or negative. Positive values will position the label away from the center.
  labelOffset: 0,
  // This option can be set to 'inside', 'outside' or 'center'. Positioned with 'inside' the labels will be placed on half the distance of the radius to the border of the Pie by respecting the 'labelOffset'. The 'outside' option will place the labels at the border of the pie and 'center' will place the labels in the absolute center point of the chart. The 'center' option only makes sense in conjunction with the 'labelOffset' option.
  labelPosition: 'inside',
  // An interpolation function for the label value
  //labelInterpolationFnc: Chartist.noop,
  // Label direction can be 'neutral', 'explode' or 'implode'. The labels anchor will be positioned based on those settings as well as the fact if the labels are on the right or left side of the center of the chart. Usually explode is useful when labels are positioned far away from the center.
  labelDirection: 'neutral',
  // If true the whole data is reversed including labels, the series order as well as the whole series data arrays.
  reverseData: false,
  // If true empty values will be ignored to avoid drawing unncessary slices and labels
  ignoreEmptyValues: false
};

var datapie = {
  series: [5, 3, 4]
};

var sumpie = function(a, b) { return a + b };


let options5 = {
  width:400,
  height:500,
  labelInterpolationFnc: function(value) {
    return value[0]
  }
};


let plugin = {
    plugin:'legend'
}

var PieData = {
  labels: ['sleep', 'work', 'drive','eat','freetime'],
  series: [8, 9, 1,1.5,4.5]
};


var responsiveOptions = [
  ['screen and (min-width: 640px)', {
    chartPadding: 30,
    labelOffset: 100,
    labelDirection: 'explode',
    labelInterpolationFnc: function(value) {
      return value;
    }
  }],
  ['screen and (min-width: 1024px)', {
    labelOffset: 80,
    chartPadding: 20
  }]
];

var Pieoptions = {
  labelInterpolationFnc: function(value) {
    return value[0]
  }
};
*/

export const FocusTime = ({ classes }) => (


  <div className={classes.root}>
{/*
<PieChart width={800} height={400} >
        <Pie
          data={data}
          cx={120}
          cy={200}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {
            data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
          }
        </Pie>
        <Pie
          data={data}
          cx={420}
          cy={200}
          startAngle={180}
          endAngle={0}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {
            data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
          }
        </Pie>
      </PieChart>
*/}
  </div>
)

FocusTime.propTypes = {
  classes: PropTypes.object // from enhancer (withStyles)
}

export default FocusTime
