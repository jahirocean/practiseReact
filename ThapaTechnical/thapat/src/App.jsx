import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from './Home'
import About from './About'
import Service from './Service'
import Contact from './Contact'
import Navbar from './Navbar'
const App = () => {
    return(
        <>
        <Navbar/>
        <Switch>
        <Route path='/' exact component={ Home}/>
        <Route path='/about'  component={ About}/>
        <Route path='/service'  component={ Service}/>
        <Route path='/contact'  component={ Contact}/>
        <Redirect to='/' />
        </Switch>           
         </>
    )
}

export default App;