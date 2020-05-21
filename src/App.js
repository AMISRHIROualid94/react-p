import React from 'react';
import './App.css';
import {BrowserRouter,Route} from 'react-router-dom';
import Index from './components/index/index';
import {Contact} from './components/Contact/index';
import Navbar from './components/Navbar/index';
import Work from './components/Work';
import { Portfolio } from './components/Portfolio';
import { About } from './components/About';
import { Profile } from './components/Profile';

class App extends React.Component {
  render(){
  return (
    <BrowserRouter>
      <Navbar/>
        <Route exact path="/" component={Index}/>
        <Route path="/contact" component={Contact}/>
    </BrowserRouter>

  )}
}

export default App;
