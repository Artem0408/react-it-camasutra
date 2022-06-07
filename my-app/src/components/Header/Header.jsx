import React from 'react';
import s from './Header.module.css';
const Header = () =>{
    return(
        <header className= {s.header}>
      <img className= {s.headerimg} src= 'https://www.birthdaywishes.expert/wp-content/uploads/2015/10/cover-photo-good-morning-images.jpg'   />
      </header> 
    );
}
export default Header;