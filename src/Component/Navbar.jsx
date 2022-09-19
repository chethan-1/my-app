import { useState } from "react";

import {Link} from 'react-router-dom'

const Navbar =()=>{
         const[Searchval, setSearchval]= useState("");
         return(
            <nav>
                <div>
                    <Link to={` search${Searchval}`}></Link>

                    <input type='Search' value={Searchval} onChange={(e)=>{setSearchval(e.target.value)}}/>
                    <button onClick={()=>{setSearchval("")}}>CLEAR</button>
                </div>
                <div>
                    <Link to="/add">NEWPOST</Link>
                    <Link to='/'>PUBLISHED</Link>
                </div>
            </nav>
         );
     
}
 
export default Navbar;