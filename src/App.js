import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Product from './pages/Product';
import Save from './pages/save_bill';

function App() {
  return (
        <>
          <Router>
            <Switch>
              <Route path='/' exact component={Product} />
              <Route path='/product' exact component={Product} />
              <Route path='/save' exact component={Save} />
            </Switch>
          </Router>
        </>
      );
}


export default App;