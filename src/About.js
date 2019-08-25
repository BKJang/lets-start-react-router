import React from 'react';
import qs from 'qs';

function About({ location }) {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  const detail = query.detail === 'true';
  return (
    <div>
      <h1>Introduce</h1>
      <p>
        React Router Example.
      </p>
      {detail && (
        <p>
          This is detail contents.
        </p>
      )}
    </div>
  )
}

export default About;