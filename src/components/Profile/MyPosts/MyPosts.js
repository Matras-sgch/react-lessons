import React from 'react';
import s from'./MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () =>{
  return(
      <div>
        My posts
        <textarea>New post</textarea>
        <button>add post</button>
        <div className={s.posts}>
          <Post message='hello there' likes='18'/>
          <Post message="Hello! It's my first post!" likes='21' />
        </div>
      </div>
  );
}


export default MyPosts;
