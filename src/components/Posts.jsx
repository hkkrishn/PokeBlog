import React, { Component } from 'react'
import {connect} from 'react-redux';



class Posts extends Component {
  render() {
    const post = this.props.post ? (
    <div className ="post">
      <h4 className = "center">{this.props.post.title}</h4>
      <p>{this.props.post.body}</p>
    </div>
    ):(
      <div className ="center"> Loading Post...</div>
    )
    return (
      <div className = "container">
         {post}
      </div>
    )
  }
};


const mapStateToProps = (state,ownProps) => {
  //ownprops props before redux
  let id = ownProps.match.params.post_id
  return {
    post:state.posts.find(post => post.id === id) // this has inbuilt return statement
  }
}

export default connect(mapStateToProps)(Posts) 