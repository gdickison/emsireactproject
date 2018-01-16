import React from 'react';
// import PropTypes from 'prop-types';
// import { Route, Redirect } from 'react-router-dom';
import './styles/OccupationSearch.css';


class OccupationSearch extends React.Component {

    goToOccupation(event) {
        event.preventDefault();
        // grab the text from the box
        const occupationId = this.occupationInput.defaultValue;
        console.log(`Going to ${occupationId}`);
        // go to the results page (the app)
        this.props.history.push(`/occupation/${occupationId}`);
    }

    render() {
        return (
            <div className='form'>
                <div className="fieldset">
                    <h1>Occupation Search</h1>
                    <h5>Select an Occupation</h5>
                    <form action="./App" className="occupation-selector" onSubmit={(e) => this.goToOccupation(e)}>
                        <input type="text" id='enterOccupation'required placeholder="Occupation" defaultValue="Computer Programmers" ref={(input) => {this.occupationInput = input}}/>
                        <button type="submit">Run</button>
                    </form>
                </div>
            </div>
        )
    }
}

OccupationSearch.contextTypes = {
    router: React.PropTypes
}

export default OccupationSearch;

