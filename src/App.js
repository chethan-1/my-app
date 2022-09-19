

import React from "react";
import { BrowserRouter as Router,Route,Switch } from "react-router-dom";
import Search from "./Component/Search";
import Postpublished from './Component/Postpublished';
import Home from "./Component/Home";
import Searchpage from "./Component/Searchpage";
import Openforms from "./Component/Openforms";
const BrowserRouter =require("react-router-dom").BrowserRouter;
const Route = require("react-router-dom").Route;
const Link =require("react-router-dom").Link;
function App(){

         return(
            <Router>
                <div className="APP">
                    <Search/>
                    <Switch>
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



                    </Switch>
                </div>
            </Router>
         )
        
         
}

export default App;