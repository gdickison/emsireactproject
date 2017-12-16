import React from 'react';
// import './Header.css';

// class PageHeader extends React.Component {
//   constructor() {
//     super();
//     this.state = {};
//   }
//     render(){
//       console.log(this); // What is this for?
//       return (<div className='PageHeader'>
//                 {/* For styling I should give each element an I.D. */}
//                 <h2>Occupation Overview</h2>
//                 <h5>{this.props.occupationTitle} in {this.props.msa}</h5>
//               </div>);
//   }
// }

// The statless functional component works for this, so the issue must be where state happens, and not where state is displayed. So, this component is stateless, even though it will change based on the state of App.js.
const PageHeader = (props) => {
  return (
      <div className='PageHeader'>
        {/* For styling I should give each element an I.D. */}
        <h2>Occupation Overview</h2>
        <h5>{props.occupationTitle} in {props.msa}</h5>
      </div>
  )
};

export default PageHeader;