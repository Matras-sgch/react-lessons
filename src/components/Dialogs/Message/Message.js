import React from 'react';
import s from './../Dialogs.module.css'
import {NavLink} from 'react-router-dom'



const Message = (props) => {
  return(
    <div className={s.message}><img src={props.avatar}/><div className={s.messageItem}>{props.message}</div></div>
  );
}

export default Message;
