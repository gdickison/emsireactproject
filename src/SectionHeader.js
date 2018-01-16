import React from 'react';
// import { Component } from 'react-dom';
import './styles/SectionHeader.css';

class SectionHeader extends React.Component {
    render() {
        return(
            <h5 className="SectionHeader">{ this.props.sectionTitle } {this.props.occupationTitle}</h5>
        )
    }
}

export default SectionHeader;