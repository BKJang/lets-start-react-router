import React from 'react';
import useReactRouter from 'use-react-router';

function RouterHookSample() {
  const { history, location, match } = useReactRouter();
  console.log(history);
  console.log(location);
  console.log(match);
  return (
    <div>
      Functional Component
    </div>
  )
}

export default RouterHookSample;