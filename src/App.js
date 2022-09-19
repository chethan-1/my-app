

import React from "react";
import { BrowserRouter,Routes,Route} from "react-router-dom";
import Search from "./Component/Search";
import Postpublished from './Component/Postpublished';
import Home from "./Component/Home";
import Searchpage from "./Component/Searchpage";
import Openforms from "./Component/Openforms";
// const BrowserRouter =require("react-router-dom").BrowserRouter;
// const route = require("react-router-dom").Route;
// const Link =require("react-router-dom").Link;

function App(){

         return(
            <BrowserRouter>
                <div className="APP">
                    <Search/>
                    <Routes>
                        <Route exact path="/">
                            <Home/>
                        </Route>
                        <Route path="/add">
                            <Openforms/>
                            <Postpublished/>
                        </Route>    
                        <Route path="/Search:searchVal">
                            <Searchpage/>
                        </Route>



                    </Routes>
                </div>
            </BrowserRouter>
         )
        
         
}

export default App;