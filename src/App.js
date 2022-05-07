import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router,Route, Switch} from "react-router-dom";
import Home from './Pages/home';
import About from './Pages/about';
import Contact from './Pages/contact';
import altabaixa from './Pages/altabaixa';
import acin from './Pages/acin';
import voglia from './Pages/voglia';
import qf22 from './Pages/qf22';
import mezoo from './Pages/mezoo';
import './Styles/applications.scss';
import GridLoader from "react-spinners/GridLoader";


function App() {
  const [loading, setLoading] = useState(false);
    useEffect(()=>{
      setLoading(true)
      setTimeout(()=>{
          setLoading(false)
      },3000)
    },[]);

  return ( 

    <div>
     {loading ? (
        <div className="loader">
        <GridLoader color="#fdfb3a" loading={loading} size={20} />
        </div>
      ) : (
        <>     
   <Router>
     <Switch>
       <Route path='/' component={Home} exact />
       <Route path='/about' component={About} exact />
       <Route path='/contact' component={Contact} exact />
       <Route path='/altabaixa' component={altabaixa} exact />
       <Route path='/acin' component={acin} exact />
       <Route path='/voglia' component={voglia} exact />
       <Route path='/qf22' component={qf22} exact />
       <Route path='/mezoo' component={mezoo} exact />
     </Switch>
   </Router>
      </>
      )} 
   </div>
  );
}

export default App;
