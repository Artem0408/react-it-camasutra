import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import Profileinfo from './Profileinfo';

const Profile = (props) => {
 
    return ( 
      <div>
       <Profileinfo/>
       <MyPosts posts = {props.state.profilePage.posts} 
                      newPostText={props.profilePage.newPostText}
                       dispatch = {props.dispatch} />
     </div>);
           
    }

       export default Profile;