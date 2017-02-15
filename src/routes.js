import React from 'react';
import { Router, Route } from 'react-router';

import App from './App';
import Demo from './Views/Demo/Demo';

const Routes = (props) => (
 <Router {...props}>
   <Route path="/" component={App}>
       <Route path="/demo" component={Demo} />
   </Route>
 </Router>
);
export default Routes;