import React from 'react';
import {Route,Switch} from 'react-router-dom';
import Home from './Home/Home';
import Favorite from './Favorite/Favorite';
import NewRelease from './NewRelease/NewRelease';
import Nav from '../components/Nav/Nav';

class App extends React.Component{
  render(){
      
    return (
      <div>
        <Nav/>
        <Switch>
          <Route path="/favorite" component={Favorite}></Route>
          <Route path="/newrelease" component={NewRelease}></Route>
          <Route path="/" component={Home}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;