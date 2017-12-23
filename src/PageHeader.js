import React from 'react';
import './styles/PageHeader.css';

const PageHeader = (props) => {
  return (
      <div className='PageHeader'>
        <h2>Occupation Overview</h2>
        <h5>{props.occupationTitle} in {props.msa}</h5>
      </div>
  )
};

export default PageHeader;