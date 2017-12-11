import React from 'react';
import { Chart } from 'react-google-charts';

// What do I do about this table? Would Victory be better? I'll try Google first
class IndustriesEmploying extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          options: {
            title: 'Industry',
            hAxis: { minValue: 0, maxValue: 5000 },
            vAxis: { minValue: 0, maxValue: 5 },
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
        );
    }
}


export default IndustriesEmploying;