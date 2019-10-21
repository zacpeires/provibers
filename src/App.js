import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { LandingPage } from './containers'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className="App">
    <Navbar />
        <Switch>
          <Route exact path="/" component={LandingPage} />
        </Switch>
    </div>
  );
}

export default App;
