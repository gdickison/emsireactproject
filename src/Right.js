import React from 'react';
import { render } from 'react-dom';

class Right extends React.Component {
    render() {
        return (
            <ul id="right">
                <li className="earnings">
                    <h2>${this.props.regionalEarnings}/hr</h2>
                </li>
                <li className="earnings">
                    <h6>Median Hourly Earnings</h6>
                </li>
                <li className="earnings">
                    <h6>Nation: ${this.props.nationalAvgEarnings}/hr</h6>
                </li>
            </ul>
        )
    }
}

export default Right;