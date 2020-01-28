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
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
      </div>
  );
}


export default MyPosts;
