import React from 'react';
import s from'./Post.module.css';

const Post = (props) =>{
  return(
    <div className={s.item}>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3XPGQG8Ii8r3rLI8bo-hm5IqwcUbYZl-wTlvHnCebSktH_7lFig&s'/>
      {props.message}
      <div>
        <span>
          {props.likes} like 
        </span>
      </div>
    </div>
  );
}


export default Post;
