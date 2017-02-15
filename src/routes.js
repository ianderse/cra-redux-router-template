import React from 'react';
import { Router, Route } from 'react-router';

import App from './App';
import Demo from './Views/Demo/Demo';
import Movies from './Views/Movies/MoviesContainer';

const Routes = (props) => (
 <Router {...props}>
   <Route path="/" component={App}>
       <Route path="/demo" component={Demo} />
       <Route path="/movies" component={Movies} />
   </Route>
 </Router>
);
export default Routes;