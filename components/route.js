// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GithubProfileCard from './components/GithubProfileCard';
// Import other components you want to route to

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/contacts" exact component={GithubProfileCard} />
      </Switch>
    </Router>
  );
}

export default App;
