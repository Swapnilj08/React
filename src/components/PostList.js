import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

 class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    console.log(this.props.posts);
    return <div>Post List</div>;
  }
}

//to map redux result to react
const mapStateToProp=(state)=>{

  return {posts:state.post};
}

export default connect(
  mapStateToProp,
  { fetchPosts }
)(PostList);
