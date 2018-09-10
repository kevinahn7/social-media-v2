import React from 'react';
import { Link } from 'react-router-dom';

const Error404 = () => {
  return(
    <div>
      <h2>Oops! This page does not exist!</h2>
      <h3>Click <Link to='/'>here</Link> to return home.</h3>
    </div>
  );
}

export default Error404;
