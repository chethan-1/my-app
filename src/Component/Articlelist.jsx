import React from "react";

const Articlelist = ({ article }) =>{
 return(
    <div>
        {

            article && article.map(( article)=>
            {
                return(
                    <div>
                        <h1>{article.title}</h1>
                        <p>{article.body}</p>
                    </div>
                )
            })
}
    </div>
 );

}

export default Articlelist;