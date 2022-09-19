import React from "react";

import { useEffect , useReducer} from "react";

import { useParams } from "react-router-dom";

import Articlelist from "./Articlelist";

const Searchpage = () => {

const [article , setarticle]= useReducer(null);

  let { searchVal} = useParams();
  console.log(searchVal);
  useEffect(() => {
       let a=localStorage.getItem("article");
       a=JSON.parse(a);
       setarticle(a);


  },[])

   return(
    <div>
        <h1>HELLO</h1>
        {article && <Articlelist article={ article.filter((article)=>{return article.title.includes(searchVal)})}/>}
    </div>
   )

}

export default Searchpage;