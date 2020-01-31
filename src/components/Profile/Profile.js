import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from'./Profile.module.css';

const Profile = () =>{
  return(
    <div>
      <div>
        <img className = {s.img} src='https://i.mr-7.ru/photos/2019/11/6PfBp9Kgl9b2Fod4uo7j.jpg'/>
      </div>
      <div>
        ava + description...
      </div>
      <MyPosts />
    </div>
  );
}


export default Profile;
