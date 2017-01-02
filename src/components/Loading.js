import React from 'react';

const Loading = ({ loading, children }) => {
  if (loading) return <h1>Loading...</h1>;

  return <div>{children}</div>
}

export default Loading;
