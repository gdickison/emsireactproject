import React from 'react';
import { Chart } from 'react-google-charts';
import 'font-awesome/scss/font-awesome.scss';

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
          <div className='IndEmploying'>
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
            {/* How can I style these? */}
            <div className='IndustryTableContainer'>
              <ul className='IndTableHeading'>
                <li>Industry</li>
              </ul>
              <ul className='IndHeading'>
                <li>Occupation Jobs in Industry(year)</li>
              </ul>
              <ul className='IndHeading'>
                <li>% of Occupation in Industry(year)</li>
              </ul>
              <ul className='IndHeading'>
                <li>% of Total Jobs in Industry(year)</li>
              </ul>
            </div>
            <div className='IndustryDataContainer'>
              <ul className='IndDataHeadings'>{this.props.titles}</ul>
              <ul className='IndTableData'>{this.props.inOccJobs}</ul>
              <ul className='IndTableData'>{this.props.percentOfOccInIndustry}</ul>
              <ul className='IndTableData'>{this.props.percentOfTotalJobsInInd}</ul>
            </div>
          </div>
        );
    }
}


export default IndustriesEmploying;