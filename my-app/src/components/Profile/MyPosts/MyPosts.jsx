import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {
 /* let posts= [
    {id: 1,message:'Hi,how are you?', quantity: 60, quantity1: 5},
    {id: 2,message:"It's my first post.", quantity: 40, quantity1: 3},
  ]*/
  let postElements= props.posts.map(p => (
    <Post id={p.id}
          message={p.message} 
          quantity={p.quantity}
          quantity1={p.quantity1}
    />
  ));
   let newPostElement = React.createRef();
  let addPost= ()=>{
     props.dispatch({ type : 'ADD-POST'});
   };
   let Remove= ()=> {
    props.addPost();
  };
  let onPostChange=()=>{
    let text = newPostElement.current.value;
    props.dispatch({ type : 'UPDATE-NEW-POST-TEXT',
     newText : text });
  }
  return (
     <div>
      <div className = {s.MyPosts}><h3>My posts</h3></div> 
       <div >
       <img src="https://www.online-image-editor.com/styles/2019/images/power_girl.png" wight='100px' height='100px' /> 
       </div><br/>
      <div>
        <textarea onChange={onPostChange} 
        ref={newPostElement} value={props.newPostText}/>
        <button onClick={ addPost } >Add post</button>
        <button onClick={ Remove } >Remove</button>
        </div><br/>
        <div className={s.Post}>
        {postElements}
       </div>
      </div>
    );
    }
       export default MyPosts;