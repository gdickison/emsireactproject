import React from 'react';
// import './Header.css';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
    render(){
      console.log(this);
      return (<div className='Header'>
                <h2>Occupation Overview</h2>
                {/* This needs to come from the API data */}
                <h5>{this.props.occ} in {this.props.msa}</h5>
              </div>);
  }
}



export default Header;