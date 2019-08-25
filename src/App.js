import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Profiles from './Profiles';

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
      </ul>
      <hr />
      <Route path='/' exact={true} component={Home} />
      <Route path='/about' component={About} />
      <Route path='/profile/' component={Profiles} />
    </div>
  );
}

export default App;
