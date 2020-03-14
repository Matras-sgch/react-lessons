import React from 'react';
import s from'./MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) =>{


  let postElements = props.postData.map( p => <Post message={p.message} likes={p.likes}/>);

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
