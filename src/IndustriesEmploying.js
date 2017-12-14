import React from 'react';
import { Chart } from 'react-google-charts';

// What do I do about this table? Would Victory be better? I'll try Google first
class IndustriesEmploying extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          options: {
            title: 'Industry',
            colors: ['lightblue'],
            chartArea: {left: 20, width: '50%'},
            legend: {position: 'none'},
            hAxis:
              { minValue: 0,
                maxValue: 5000,
                gridlines: {color:'white'},
               },
            vAxis: 
              { minValue: 0,
                maxValue: 5,
                textPosition: 'in',
                textStyle: {color: 'blue'}
              },
            legend: 'none',
          },
          rows: [
            ['Software Publishers', 4654],
            ['Computer Systems Design Services', 1873],
            ['Custom Computer Programming Services', 1388],
            ['Aircraft Manufacturing', 444],
            ['Other Computer Related Services', 296],
          ],
          columns: [
            {
              type: 'string',
              label: 'Age',
            },
            {
              type: 'number',
              label: 'Weight',
            },
          ],
        };
      }
    render() {
        return (
          <div>
            <Chart
                chartType="BarChart"
                rows={this.state.rows}
                columns={this.state.columns}
                options={this.state.options}
                graph_id="IndustryBarChart"
                width={'100%'}
                height={'400px'}
                legend_toggle
            />
            {/* How can I stile these? */}
            <ul className="chart">{this.props.titles}</ul>
            <ul>{this.props.inOccJobs}</ul>
          </div>
        );
    }
}


export default IndustriesEmploying;