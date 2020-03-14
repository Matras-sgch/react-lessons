import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


const Dialogs = (props) => {





  let dialogElements = props.dialogsData.map( d => <DialogItem avatar={d.avatar} name={d.name} id={d.id}/>);
  let messageElements = props.messagesData.map( m => <Message avatar={m.avatar} message={m.message} />);

  return(
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.head}>Dialogs</div>
        {dialogElements}
      </div>
      <div className={s.messagesItems}>
        <div className={s.head}>Messages</div>
        {messageElements}
      </div>
    </div>
  );
}


export default Dialogs;
