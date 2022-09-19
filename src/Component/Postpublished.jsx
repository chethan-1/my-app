import React,{ Component } from 'react';
import {Link} from 'react-router-dom'
function Postpublished(){

    return(
        <nav>
        <div className='postpublished'>
            <button id='new-post'>NEW POST</button>
            <button id='published'>PUBLISHED</button>
        </div>
         <div>
         <Link to="/add">NEWPOST</Link>
          <Link to="/">Published</Link>
     </div>
     </nav>
    )
}

export default Postpublished;