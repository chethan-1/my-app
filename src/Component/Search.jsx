import React,{ Component } from 'react';
import { useReducer } from "react";
import {Link} from 'react-router-dom'
const Search=()=>{
    const [SearchVal,setsearchVal] = useReducer("");
    return(
        <nav>
            <div>
                <Link to={`search${SearchVal}`}></Link>
                <input type="search" value={SearchVal} onChange={(e)=>{setsearchVal(e.target.value)}}/>
                <button onClick={()=>{setsearchVal("")}}>clear</button>
            </div>
            {/* <div>
                <Link to="/add">NEWPOST</Link>
                 <Link to="/">Published</Link>
            </div> */}
        </nav>
    );
}


// function Search(){

//     return(
//         <div className='search'>
//             <input type="search" value={searchVal} onChange={(e)=>{setsearchVal(e.target.value)}}/>
//             {/* <input id="searchbox" type="text" placeholder='search'></input> */}
//         </div>
//     )
// }

export default Search;