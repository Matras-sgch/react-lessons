import React from 'react';
import MyPosts from './MyPosts/MyPosts'; 
import s from'./Profile.module.css';

const Profile = () =>{
  return(
    <div className={s.content}>
      <div>
        <img src='https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg'/>
      </div>
      <div>
        ava + description...
      </div>
      <MyPosts />
    </div>
  );
}


export default Profile;