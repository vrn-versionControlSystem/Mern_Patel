import React from 'react'
import {Link} from 'react-router-dom';
import './All.css';

const Nav = () => {
  return (
   <>
      <div className='Nav'>
      <h1>Welcome to project Deploy</h1>


      <ul>
        <li> <Link to='/' >Display</Link> </li>
        <li> <Link to='/add' >Add</Link></li>
      </ul>

        
        

      </div>
      
   </>


  );
}

export default Nav