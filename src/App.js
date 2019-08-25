import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Profiles from './Profiles';
import historySample from './HistorySample';

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to='/'>홈</Link>
        </li>
        <li>
          <Link to='/about'>소개</Link>
        </li>
        <li>
          <Link to='/profile'>사용자 목록</Link>
        </li>
        <li>
          <Link to='/history'>history Example</Link>
        </li>
      </ul>
      <hr />
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/about' component={About} />
        <Route path='/profile' component={Profiles} />
        <Route path='/history' component={historySample} />
        <Route render={({ location }) => (
          <div>
            <h2>Page is not found</h2>
            <h3>{location.pathname}</h3>
          </div>)}
          />
      </Switch>
    </div>
      );
    }
    
    export default App;
