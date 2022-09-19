import { useEffect  , useReducer } from "react";

import Articlelist from "./Articlelist";

const Home =()=>{
           const [article , setarticle] =useReducer(null);
           useEffect (()=>{
                           if(localStorage.getItem("article")==null)
                           {
                             localStorage.setItem("article","[]");
                             console.log("created");
                           }
                           else{

                            let a= localStorage.getItem("article");
                                  a=JSON.parse(a);
                                  setarticle(a);


                           }
                           

           },[])
           return(
            <div>
                <h1>lists of articles</h1>
                <hr/>
                <Articlelist article={article}/>
            </div>
           );
}
 
export default Home;