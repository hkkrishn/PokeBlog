import React, { Component } from 'react'
import {connect} from 'react-redux';
import {deletePost} from '../actions/postActions';



class Posts extends Component {
  handleClick = () =>{
    this.props.deletePost(this.props.post.id)
    this.props.history.push('/')
  }
  render() {
    console.log(this.props)
    const post = this.props.post ? (
    <div className ="post">
      <h4 className = "center">{this.props.post.title}</h4>
      <p>{this.props.post.body}</p>
      <div className = "center">
        <button className = "btn grey" onClick = {this.handleClick}>
          Delete Post
        </button>
      </div>
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

//interact with store
const mapDispatchToProps = (dispatch) =>{
  return {
    deletePost:(id) => { dispatch(deletePost(id)) } // dispatch action whenever we call this function 
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Posts) 