import React from 'react';
import PropTypes from 'prop-types';

function Post(props){
  return (
    <div>
      <h2>{props.author}</h2>
      <h3>{props.postText}</h3>
      <h6>{props.timestamp}</h6>
      <hr/>
    </div>
  );
}

Post.propTypes = {
  author: PropTypes.string,
  postText: PropTypes.string,
  timestamp: PropTypes.string
};

export default Post;
