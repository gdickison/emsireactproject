import React from 'react';
import Header from './Header';
import OccSummary from './OccSummary';
import OccRegionalTrend from './OccRegionalTrend';
import IndustriesEmploying from './IndustriesEmploying';
import GoogleChart from './GoogleChart';
import ExampleChart from './GoogleChartTwo';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      {/* occ, msa, and occupation are props. They need to be filled in dynamically from the API */}
      <Header occ="Computer Programmers" msa="Seattle-Tacoma"/>
      <OccSummary occupation="Computer Programmers" numJobs="12,352" year="2015" percent="190" aboveBelow="above" percentChange="+10.2" yearRange="2013-2018" natlPercentChange="+8.5" wage="57.24" natlWage="38.20"/>
      <OccRegionalTrend />
      <GoogleChart />
      <IndustriesEmploying occ="Computer Programmers"/>
      <ExampleChart />
    </div>
  );
};

export default App;