import React from 'react';
import './styles/IndustriesEmploying.css';

// Set up to populate a CSS grid. I could not figure out how to get the bars behind the industry titles. I could make a bar chart with the bars, or I could make this CSS grid, but I could not figure out how to do both together.
class IndustriesEmploying extends React.Component {
    render() {
        return (
          <div className='IndustriesEmploying'>
            <section className='IndustriesEmployingGrid'>
              <div className='Col1 JobTitles ColHeading'>
                <h5>Industry</h5>
              </div>
              <div className='Col2 ColHeading'>
                <h5>Occupation Jobs in Industry ({this.props.industryYear})</h5>
              </div>
              <div className='Col3 ColHeading'>
                <h5>% of Occupation in Industry ({this.props.industryYear})</h5>
              </div>
              <div className='Col4 ColHeading'>
                <h5>% of Total Jobs in Industry ({this.props.industryYear})</h5>
              </div>
              <div>
                <ul>
                  <h5>{this.props.titles}</h5>
                </ul>
              </div>
              <div>
                <ul>
                  <h5>{this.props.inOccJobs}</h5>
                </ul>
              </div>
              <div>
                <ul>
                  <h5>{this.props.percentOfOccInIndustry}</h5>
                </ul>
              </div>
              <div>
                <ul>
                  <h5>{this.props.percentOfTotalJobsInInd}</h5>
                </ul>
              </div>
            </section>
          </div>
        );
    }
}


export default IndustriesEmploying;