import { useState } from "react";

const Addarticle =()=>{

    const [title , settitle] = useState("");

    const [ body, setbody] = useState("");
    let handlePublish = (e) =>{ e.preventDefault();
    let newArticle ={ title,body};
    let a=JSON.parse(localStorage.getItem("article"));
      a.push(newArticle);
      a=JSON.stringify(a);
      localStorage.setItem("article",a);
      alert("added");
      window.location.reload();
}

return(
    <div>
        <form onSubmit={handlePublish}>
            <input type="text" placeholder="title" value={title} onChange={(e)=>
            {settitle(e.target.value)}}  />

            <textarea cols="30" rows="10" value={body}
            onChange={(e)=> {setbody(e.target.value)}}></textarea>

            <input type="submit" value="publish"/>
        </form>
    </div>
)
}
export default Addarticle