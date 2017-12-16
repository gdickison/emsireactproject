import React from 'react';
import { Render } from 'react-dom';
import { Chart } from 'react-google-charts';
// import './OccRegionalTrend.css';


// This only contains a section heading, which has been replaced by the SectionHeader component. The Google char should go here instead, and it should be renamed? The h5 element can go away.
class RegionalTrendsGraph extends React.Component {
    render() {
        return (
          <div className="RegionalTrendsLineChart">
            <Chart
              chartType="LineChart"
              /* I need to get every year to display, rather than every other year */
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
                  [ 2011, 22, 21, -3 ],
                  [ 2012, 25, 24, -1 ],
                  [ 2013, 29, 28, 0 ],
                  [ 2014, 33, 32, 1 ],
                  [ 2015, 31, 30, 3 ],
                  [ 2016, 34, 33, 5 ],
                  [ 2017, 36, 35, 7 ],
                  [ 2018, 38, 37, 9 ],
                  [ 2019, 40, 39, 11 ],
                  [ 2020, 39.8, 39, 12 ],
                  [ 2021, 42, 41, 13 ],
                  [ 2022, 44, 43, 14 ],
                  [ 2023, 46, 45, 15 ],
                  [ 2024, 47, 46, 16 ],
                  [ 2025, 48, 47, 17 ] ]}
              options={{
                chartArea: {
                  left: 100,
                  width: '90%',
                  height: '60%'},
                legend: {
                  position: 'bottom',
                  alignment: 'start'
                },
                series: {
                  0: {
                    color: 'black',
                    pointSize: 5,
                    pointShape: 'circle',
                  },
                  1: {
                    color: 'blue',
                    pointSize: 5,
                    pointShape: 'square',
                  },
                  2: {
                    color: 'lightblue',
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
                    color: 'white',
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
              height="400px"
              legend_toggle
            />
          </div>
        );
      }
}

export default RegionalTrendsGraph;