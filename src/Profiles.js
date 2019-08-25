import React from 'react';
import Profile from './Profile';
import { Link, Route } from 'react-router-dom';

function Profiles() {
  return (
    <div>
      <h3>사용자 목록</h3>
      <ul>
        <li>
          <Link to='/profile/bkjang'>BKJang</Link>
        </li>
        <li>
          <Link to='/profile/jhkim'>JHKim</Link>
        </li>
      </ul>
      <Route path='/profile' exact render={() => {
        return <div>사용자를 선택해주세요.</div>;
      }} />
      <Route path='/profile/:username' component={Profile}/>
    </div>
  )
}

export default Profiles;