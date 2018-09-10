import React from 'react';
import PropTypes from 'prop-types';

function Post(props){
  return (
    <div>
      <h3>{props.postText}</h3>
      <hr/>
    </div>
  );
}

Post.propTypes = {
  postText: PropTypes.string
};

export default Post;
