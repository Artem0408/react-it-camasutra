import React from 'react';
import s from './Post.module.css';


const Post = (props) => {
    return (
      <div>
       <div className={s.item1} >
       <img className={s.item2} src="https://static-news.moneycontrol.com/static-mcnews/2017/09/Facebook-people-770x433.jpg" wight='100px' height='100px' /> 
       </div><br/>
       <h4 className={s.item}> text </h4><br/>
        <span>{props.message}</span> 
       <div> 
       <span className={s.item}>like {props.quantity} </span><br/>
       <span className={s.item}>dislike {props.quantity1} </span><br/>
      </div>
      </div>
    );
    }
       export default Post;