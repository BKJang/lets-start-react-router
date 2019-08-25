import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Profile from './Profile';

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to='/'>Link to Home</Link>
        </li>
        <li>
          <Link to='/about'>Link to Introduce</Link>
        </li>
      </ul>
      <hr />
      <Route path='/' exact={true} component={Home} />
      <Route path='/about' component={About} />
      <Route path='/profile/:username' component={Profile} />
    </div>
  );
}

export default App;
