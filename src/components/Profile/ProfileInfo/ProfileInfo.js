import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
  return(
    <div className={s.inf}>
      <div className={s.ava}>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3XPGQG8Ii8r3rLI8bo-hm5IqwcUbYZl-wTlvHnCebSktH_7lFig&s'/>
      </div>
      <div className={s.description}>
        description....
      </div>
    </div>
  );
}


export default ProfileInfo;
