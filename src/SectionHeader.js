import React from 'react';
import { Component } from 'react-dom';

class SectionHeader extends React.Component {
    render() {
        return(
            <h5 className="sectionTitle">{ this.props.sectionTitle } {this.props.occupationTitle}</h5>
        )
    }
}

export default SectionHeader;