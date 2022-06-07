import React from 'react';
import s from './Profileinfo.module.css';


const Profileinfo = () => {
    return ( 
      <div>
       <div className={s.img}>
        <img  src='https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_960_720.jpg' width='1140px' height='100px' />
          </div>
      <div><h4>ava+discription</h4></div><br/>
     </div>);
    }

       export default Profileinfo;