import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';


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
            <div>
                <h1>This will be a search form</h1>
                <form action="./App" className="occupation-selector" onSubmit={(e) => this.goToOccupation(e)}>
                    <h2>Enter an occupation</h2>
                    <input type="text" required placeholder="Occupation" defaultValue="Computer Programmers" ref={(input) => {this.occupationInput = input}}/>
                    <button type="submit">See Occupation Results</button>
                </form>
            </div>
        )
    }
}

OccupationSearch.contextTypes = {
    router: React.PropTypes
}

export default OccupationSearch;

