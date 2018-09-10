import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { v4 } from 'uuid';
import Post from './Post';

class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterPostList: []
    }
    this.handleAddingNewPostToList = this.handleAddingNewPostToList.bind(this);
  };


  handleAddingNewPostToList = (e) => {
    e.preventDefault();
    const newPostText = e.target.elements.postText.value.trim();
    let newMasterPostList = this.state.masterPostList.slice();
    newMasterPostList.push({postText: newPostText, id: v4()});
    this.setState({masterPostList: newMasterPostList});
    e.target.elements.postText.value = "";
  }

  render() {
    return(
      <div>
        <Card>
          <CardContent>
            <h2>Feed</h2>
            <div>
              <form onSubmit={this.handleAddingNewPostToList}>
                <input type="text" name="postText" />
                <button>Submit</button>
              </form>
            </div>
            <div id="feedList">
              {this.state.masterPostList.map((post) =>
                <Post
                  postText={post.postText}
                  key={post.id}
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
