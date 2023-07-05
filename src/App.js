// import React from 'react';
// import Navbar from './Navbar';

// const App = () => {
//   return (
//     <div>
//       <Navbar />
//       {/* Add the rest of your application content here */}
//     </div>
//   );
// }

// export default App;

import "./App.css"
import Navbar from "./common/Navbar/Navbar"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

function App(){
  return(
    <>
    <Router>
    <Navbar />
    <Switch>
      <Route path='/'></Route>
    </Switch>
    </Router>
      
    </>
  )
}
export default App