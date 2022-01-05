import React from 'react';
import {BrowserRouter as Router,Route, Switch} from "react-router-dom";
import Home from './Pages/home';
import About from './Pages/about';
import Contact from './Pages/contact';
import './Styles/applications.scss';
import projects from "./local/projects.json";



function App() {
  return ( 
   <Router>
     <Switch>
       <Route path='/' component={Home} exact />
       <Route path='/about' component={About} exact />
       <Route path='/contact' component={Contact} exact />
     </Switch>
   </Router>
  );
}

export default App;
