import React from 'react';
import Profile from './Profile';
import { NavLink, Route } from 'react-router-dom';

function Profiles() {
  return (
    <div>
      <h3>사용자 목록</h3>
      <ul>
        <li>
          <NavLink
            to='/profile/bkjang'
            activeStyle={{ background: 'blue', color: 'white' }}
            activeClassName='active'
            isActive={(match, location) => {
              return true
            }}
          >BKJang
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/profile/jhkim'
            activeStyle={{ background: 'blue', color: 'white' }}
          >JHKim
          </NavLink>
        </li>
      </ul>
      <Route path='/profile' exact render={() => {
        return <div>사용자를 선택해주세요.</div>;
      }} />
      <Route path='/profile/:username' component={Profile} />
    </div>
  )
}

export default Profiles;