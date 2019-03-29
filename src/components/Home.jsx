import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import Pokeball from '../pokeball.png'
import {connect} from 'react-redux';

class Home extends Component {
  render() {
    const {posts} = this.props
    const postList = posts.length ? (posts.map(post =>{
      return(
        <div className = "post card " key = {post.id}>
        <img src ={Pokeball} alt ="pokeball"></img>
          <div className = "card-content ">
          <Link to ={`/${post.id}`}>
            <span className = "card-title red-text">
              {post.title}
            </span>
          </Link>
            <p>{post.body}</p>
          </div>
        </div>
      )
    })):(
      <div className = "center">No Posts Yet</div>
    )
    return (
      <div className = "container">
        <h4 className = "center">HomePage</h4>
        {postList}
    </div>
    )
  }
}



const mapStateToProps = (state) => {
  return{
    posts:state.posts
  }
}


export default connect(mapStateToProps)(Home)

