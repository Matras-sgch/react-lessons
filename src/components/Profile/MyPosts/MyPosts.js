import React from 'react';
import s from'./MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () =>{

  let postData = [
    {id: 1, message:'hello there', likes:'18'},
    {id: 2, message:"Hello! It's my first post!", likes:'21'},
  ]

  let postElements = postData.map( p => <Post message={p.message} likes={p.likes}/>);

  return(
      <div className={s.MyPosts}>
        <h3>My posts</h3>
        <div className={s.NewPost}>
          <div>
            <textarea>New post</textarea>
          </div>
          <div>
            <button>add post</button>
          </div>
        </div>
        <div className={s.posts}>
          {postElements}
        </div>
      </div>
  );
}


export default MyPosts;
