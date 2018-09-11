import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { v4 } from 'uuid';
import Post from './Post';

class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterPostList: [],
      author: 'Elly Maimon'
    }
    this.handleAddingNewPostToList = this.handleAddingNewPostToList.bind(this);
  };
  
  handleAddingNewPostToList = (e) => {
    e.preventDefault();
    const newPostText = e.target.elements.postText.value.trim();
    let newMasterPostList = this.state.masterPostList.slice();
    newMasterPostList.push(
      {
        postText: newPostText,
        author: this.state.author,
        timestamp: new Date().toString(),
        likes: 0,
        dislikes: 0,
        id: v4()
      }
    );
    this.sortListByLikes(newMasterPostList);
    this.setState({masterPostList: newMasterPostList});
    e.target.elements.postText.value = '';
  }

  handleLike = (post, index) => {
    let newMasterPostList = this.state.masterPostList;
    newMasterPostList[index].likes = (newMasterPostList[index].likes+1);
    this.setState({masterPostList: newMasterPostList});
    this.sortListByLikes(this.state.masterPostList);
  }

  handleDislike = (post, index) => {
    let newMasterPostList = this.state.masterPostList;
    newMasterPostList[index].dislikes = (newMasterPostList[index].dislikes+1);
    this.setState({masterPostList: newMasterPostList});
    this.sortListByLikes(this.state.masterPostList);
  }

  sortListByLikes = (list) => {
    list.sort(function(a,b) {
      return (a.likes-a.dislikes < b.likes-b.dislikes) ? 1 : ((b.likes-b.dislikes < a.likes-a.dislikes) ? -1 : 0);
    });
  }

  render() {
    return(
      <div>
        <Card>
          <CardContent>
            <h2>Feed</h2>
            <div>
              <form onSubmit={this.handleAddingNewPostToList}>
                <input type='text' name='postText' />
                <button>Submit</button>
              </form>
            </div>
            <div id='feedList'>
              {this.state.masterPostList.map((post, index) =>
                <Post
                  postText={post.postText}
                  author={post.author}
                  timestamp={post.timestamp}
                  likes={post.likes}
                  dislikes={post.dislikes}
                  key={post.id}
                  handleLike={this.handleLike}
                  handleDislike={this.handleDislike}
                  index={index}
                />
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

}

export default Feed;
