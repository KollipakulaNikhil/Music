// script.js
// Import dependencies and initialize variables
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Define components and routes
const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/browse" component={Browse} />
                <Route path="/search" component={Search} />
            </Switch>
        </BrowserRouter>
    );
};

const Home = () => {
    return <h1>Welcome to the music streaming website!</h1>;
};

const Browse = () => {
    return <h1>Browse music</h1>;
};

const Search = () => {
    return <h1>Search music</h1>;
};

// Render the app
ReactDOM.render(<App />, document.getElementById('root'));