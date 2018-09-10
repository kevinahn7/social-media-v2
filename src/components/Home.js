import React from 'react';
import Profile from './Profile';
import Feed from './Feed';

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
        <Feed />
      </div>
    </div>
  );
}

export default Home;
