import React from 'react';
import { render } from 'react-dom';
import OccupationSearch from './OccupationSearch';
import App from './App';
import NotFound from './NotFound';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Router } from 'react-router';
import registerServiceWorker from './registerServiceWorker';


const Root = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={OccupationSearch} />
                <Route path="/occupation/:occupationId" component={App} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}

render(<Root/>, document.querySelector('#root'));

// I have no idea what this does - deleting it has no obvious effect
registerServiceWorker();

