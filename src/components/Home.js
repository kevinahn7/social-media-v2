import React from 'react';
import Profile from './Profile';

const Home = () => {
  const gridContainer = {
    display: 'grid',
    gridTemplateColumns: '1fr 3fr',
    margin: '30px'
  }
  const gridItem = {
    marginRight: '20px'
  }
  return(
    <div style={gridContainer}>
      <div style={gridItem}>
        <Profile />
      </div>
      <div style={gridItem}>
        <h1>Another hello</h1>
      </div>
    </div>
  );
}

export default Home;
