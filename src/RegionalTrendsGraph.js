import React from 'react';
// import { Render } from 'react-dom';
import { Chart } from 'react-google-charts';
import './styles/RegionalTrendsGraph.css';

// I used the Google charts dev tool to create the line chart

// I could not figure out how to get the yellow background for the target years (2013-2018)

// Obviously, everything is hard-coded. I could create the line section for the target years using the JSON data, but I could not figure out how to write code to extrapolate the other years (I tried the npm extrapolate package, but the extrapolated values wouldn't come out right).
class RegionalTrendsGraph extends React.Component {
    render() {
        return (
          <div className="RegionalTrendsLineChart">
            <Chart
              chartType="LineChart"
              data={[['Year', 'Region', 'State', 'Nation'],
                  [ 2001, 0, 0, 0 ],
                  [ 2002, -8, -8, -8 ],
                  [ 2003, -10, -9, -9 ],
                  [ 2004, -8, -8, -8 ],
                  [ 2005, 0, 0, -8 ],
                  [ 2006, 8, 8, -5 ],
                  [ 2007, 15, 15, -3 ],
                  [ 2008, 20, 20, -2 ],
                  [ 2009, 18, 17.5, -5 ],
                  [ 2010, 19, 18, -5 ],
                  [ 2011, 22, 20.5, -3 ],
                  [ 2012, 25, 23.5, -1 ],
                  [ 2013, 29, 27.5, 0 ],
                  [ 2014, 33, 31.5, 1 ],
                  [ 2015, 31, 29.5, 3 ],
                  [ 2016, 34, 32.5, 5 ],
                  [ 2017, 36, 34.5, 7 ],
                  [ 2018, 38, 36.5, 9 ],
                  [ 2019, 40, 38.5, 11 ],
                  [ 2020, 39.8, 38.5, 12 ],
                  [ 2021, 42, 40.5, 13 ],
                  [ 2022, 44, 42.5, 14 ],
                  [ 2023, 46, 44.5, 15 ],
                  [ 2024, 47, 45.5, 16 ],
                  [ 2025, 48, 46.5, 17 ] ]}
              options={{
                chartArea: {
                  center: 50,
                  width: '93%',
                  height: '60%'},
                legend: {
                  position: 'none',
                },
                series: {
                  0: {
                    color: 'black',
                    pointSize: 5,
                    pointShape: 'circle',
                  },
                  1: {
                    color: 'rgb(97,144,204)',
                    pointSize: 5,
                    pointShape: 'square',
                  },
                  2: {
                    color: 'rgb(190,228,241)',
                    pointSize: 5,
                    pointShape: 'triangle'
                  }
                },  
                hAxis: {
                  baseline: 2001,
                  format: '####',
                  textStyle: {
                    fontSize: 12,
                  },
                  gridlines: {
                    format: 'none',
                    color: 'rgb(245, 238, 238)',
                    count: 13,
                  }
                },
                vAxis: {
                  baselineColor: 'white',
                  title: 'Percent Change',
                  titleTextStyle: {
                    fontSize: 12,
                    bold: true,
                    italic: false },
                  textStyle: {
                    fontSize: 12
                  },
                  minValue: -20,
                  maxValue: 70,
                  gridlines: {
                    color: 'white',
                    count: 10
                  }
                }
              }}
              graph_id="PercentChangeLineChart"
              width="100%"
              height="300px"
              legend_toggle
            />
          </div>
        );
      }
}

export default RegionalTrendsGraph;