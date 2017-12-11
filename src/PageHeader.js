import React from 'react';
// import './Header.css';

class PageHeader extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
    render(){
      console.log(this);
      return (<div className='PageHeader'>
                <h2>Occupation Overview</h2>
                {/* This needs to come from the API data */}
                <h5>{this.props.occupationTitle} in {this.props.msa}</h5>
              </div>);
  }
}



export default PageHeader;