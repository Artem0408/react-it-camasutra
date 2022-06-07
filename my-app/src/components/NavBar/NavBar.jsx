import React from 'react';
import s from './NavBar.module.css';
import { NavLink } from 'react-router-dom';

const NavBar = () =>{
   return(

<nav className= {s.nav} >
  <div className={s.item}>
<div > 
  <NavLink to='/Profile' activeClassName= {s.activelink}><h3>Profile</h3></NavLink>
  </div>
  <div>
  <NavLink to='/Dialogs' activeClassName= {s.activelink}><h3>Messagers</h3></NavLink>
  </div>
  <div>
  <NavLink to='/News' activeClassName= {s.activelink}><h3>News</h3></NavLink>
  </div>
  <div >
  <NavLink to='/Music' activeClassName= {s.activelink}><h3>Music</h3></NavLink>
  </div>
  <div>
  <NavLink to='/Settings' activeClassName= {s.activelink}><h3>Settings</h3></NavLink>
  </div>
  <div>
  <NavLink to='/Friends' activeClassName= {s.activelink}> <h3>Friends</h3></NavLink>
   </div>
   <div className={s.str} >
   <figure>
  <img className={s.foto} src='https://i.pinimg.com/564x/3c/4b/1d/3c4b1d5dd8f1b6725b4d35b1cba5d7a6.jpg'
   width='30px' height='30px' alt='Sveta'/>
   <figcaption>Sveta</figcaption>
   </figure>
   </div>
  
   <div className={s.str}>
   <figure>
  <img className={s.foto} src='https://i.pinimg.com/originals/1f/b3/b8/1fb3b8ef5c071daa09749dedf3951c6e.jpg'
   width='30px' height='30px' alt='Tania'/>
   <figcaption>Tania</figcaption>
   </figure>
   </div>
   <div className={s.str}> 
   <figure>
  <img className={s.foto} src='https://ic.pics.livejournal.com/harmoniq_app/67697618/191064/191064_original.jpg' 
  width='30px' height='30px' alt='Olia' />
  <figcaption>Olia</figcaption>
  </figure>  
    </div>
  
</div><br/>
</nav>);
}
export default NavBar;