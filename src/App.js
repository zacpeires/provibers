import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { LandingPage, EventPage } from './containers'
import Navbar from './components/Navbar'

const App = () => {
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
  
          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
  });
  })

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
