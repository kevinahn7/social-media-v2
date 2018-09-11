import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import ThumbUp from '@material-ui/icons/ThumbUp';
import ThumbDown from '@material-ui/icons/ThumbDown';

class Post extends React.Component{
  constructor(props) {
    super(props);
    this.likePost = this.likePost.bind(this);
    this.dislikePost = this.dislikePost.bind(this);
  };

  likePost = () => {
    this.props.handleLike(this, this.props.index);
  }

  dislikePost = () => {
    this.props.handleDislike(this, this.props.index);
  }

  render() {
    return (
      <div>
        <h2>{this.props.author}</h2>
        <h3>{this.props.postText}</h3>
        <h6>{this.props.timestamp}</h6>
        <span>{this.props.likes}</span>
        <Button onClick={this.likePost}>
          <ThumbUp />
        </Button>
        <span>{this.props.dislikes}</span>
        <Button onClick={this.dislikePost}>
          <ThumbDown />
        </Button>

        <hr/>
      </div>
    );
  }
}

Post.propTypes = {
  author: PropTypes.string,
  postText: PropTypes.string,
  timestamp: PropTypes.string,
  likes: PropTypes.number,
  dislikes: PropTypes.number,
  handleLike: PropTypes.func,
  handleDislike: PropTypes.func,
  index: PropTypes.number
};

export default Post;
