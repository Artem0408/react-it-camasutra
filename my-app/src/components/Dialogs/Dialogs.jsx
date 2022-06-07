import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import Photos from './Photos/Photos';


const Dialogs = (props) => {

  /* let dialogs=[
       { id: 1, name: "Dimych"},
       { id: 2, name: "Andrey"},
       { id: 3, name: "Sveta"},
       { id: 4, name: "Sasha"},
       { id: 5, name: "Victor"},
       { id: 6, name: "Valera"}
   ]*/
  let dialogsElements = props.dialogsPage.dialogs.map(d =>
    <DialogItem name={d.name} id={d.id} />);
  /* let messages=[
       { id: 1, message: "Hi"},
       { id: 2, message: "How is your kamasutra"},
       { id: 3, message: "Yo"},
       { id: 4, message: "Yo"},
       { id: 5, message: "Yo"},
       { id: 6, message: "Yo"}
   ]*/
  let messagesElements = props.dialogsPage.messages.map(m =>
    <Message message={m.message} />);

  let photosElements = props.dialogsPage.photos.map(p =>
    <Photos photo={p.photo} />);

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={s.photos}>
          {photosElements}
      </div>
        <div className={s.messages}>
          {messagesElements}
        </div>

      </div>
    );
};
export default Dialogs;