import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./Login";
import MyLibrary from "./MyLibrary";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"

import Dashboard from "./Dashboard";


//getting the 'code' sent back
const code = new URLSearchParams(window.location.search).get('code')

const App = () => {
   return (
         <>
            <Switch>
               <Route exact path="/">
                  {code ? <Dashboard code={code} /> : <Login />}
               </Route>
               <Route path="/mylibrary">
                  <MyLibrary />
               </Route>
            </Switch>
         </>
      )
};
export default App;