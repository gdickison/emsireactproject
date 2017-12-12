import React from 'react';
import { render } from 'react-dom';
import './index.css';
import OccupationSearch from './OccupationSearch';
import App from './App';
import NotFound from './NotFound';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import { match } from 'react-router';
import registerServiceWorker from './registerServiceWorker';


// This is how you route in React
const Root = () => {
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route exact path="/" component={OccupationSearch} />
                    <Route path="/occupation/:occupationId" component={App} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        </BrowserRouter>
    )
}

// Render out the Root component, and it will route as directed in the BrowserRouter element
render(<Root/>, document.querySelector('#root'));

// I have no idea what this does - deleting it has no obvious effect
registerServiceWorker();

