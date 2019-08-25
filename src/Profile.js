import React from 'react';
import WithRouterSample from './WithRouterSample';
import RouterHookSample from './RouterHookSample';

const profileData = {
  bkjang: {
    name: '장봉기',
    description: 'Frontend Engineer'
  },
  jhkim: {
    name: '김지혜',
    description: 'Backend Engineer'
  }
}

function Profile({ match }) {
  const { username } = match.params;
  const profile = profileData[username];

  if (!profile) {
    return <div>존재하지 않는 사용자</div>;
  }
  return (
    <div>
      <h3>사용자명 : {profile.name}</h3>
      <h4>소개: {profile.description}</h4>
      <WithRouterSample />
      <RouterHookSample />
    </div>
  )
}

export default Profile;