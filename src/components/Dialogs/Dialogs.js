import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


const Dialogs = (props) => {

  let dialogsData = [
    {id:1, name:'Vova Yubko'},
    {id:2, name:'Marat Sergievich'},
    {id:3, name:'Polyakovski Sasha'},
    {id:4, name:'Zhdan'},
    {id:5, name:'Sudan'},
    {id:6, name:'Tudan'},
  ]

  let messagesData = [
    {id:1, message:'Hi'},
    {id:2, message:'Hello'},
    {id:3, message:'How are you?'}
  ]

  let dialogElements = dialogsData.map( d => <DialogItem name={d.name} id={d.id}/>);
  let messageElements = messagesData.map( m => <Message message={m.message} />);

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
