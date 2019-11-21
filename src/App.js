import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { LandingPage, EventPage } from './containers'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className="App">
    <Navbar />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/:eventName"  component={EventPage} />
        </Switch>
    </div>
  );
}

export default App;
