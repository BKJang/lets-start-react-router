import React from 'react';
import { Route, Link } from 'react-router-dom';
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
      <Route path='/' exact={true} component={Home} />
      <Route path='/about' component={About} />
      <Route path='/profile' component={Profiles} />
      <Route path='/history' component={historySample} />
    </div>
  );
}

export default App;
