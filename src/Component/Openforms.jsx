import React,{ Component } from 'react';
import ReactDOM from 'react-router-dom';
import { useReducer } from "react-router-dom";
const Openforms=()=>{

    const [title,settitle]= useReducer("");
    const [body,setbody ] =useReducer("");
    let handlePublish =(e)=>{e.preventDefault();
     let newState= Reducer(title,body);
    let a=JSON.parse(localStorage.getItem("article"));
        a.push(newState);
        a=JSON.stringify(a);

        localStorage.setItem("article",a);
        alert("added")
        window.location.reload();
        }

    return(
        <div className='openforms'>
            <h1>ENTER YOUR ARTICLE</h1>
            <forms id="formcontent" onSubmit={handlePublish}>
            
                <input type='text' placeholder='TITLE' id="title" value={title} onChange={(e)=>{settitle(e.target.value)}}></input>
                <textarea cols="30" rows="10" type='text' placeholder='enter data' id='textpara' value={body} onchange={(e)=>{setbody(e.target.value)}}></textarea>
                <button id="publishform">PUBLISH</button>
            </forms>
        </div>
    )
}

export default Openforms;