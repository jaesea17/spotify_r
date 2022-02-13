import React from "react"
import Login from "./Login";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"

import Dashboard from "./Dashboard";


//getting the 'code' sent back
const code = new URLSearchParams(window.location.search).get('code')

const App = () => {
   return code ? <Dashboard code={code} /> : <Login />
};
export default App;