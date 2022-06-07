import React from 'react';
import s from './Photos.module.css';
import { NavLink } from 'react-router-dom';


const Photos = (props) => {
  return <div className={s.photo}>
    <img src={props.photo} width='70px' height='50px'/>
 </div>
}
export default Photos;