import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Games from './pages/Games';
import PopUp from './pages/PopUp';

class App extends Component {
  render() {
    const App = () => (
      <div>
        <Switch>
          <Route exact path='/' component={Games}/>
          <Route path='/popup' component={PopUp}/>
        </Switch>
      </div>
    )
    return (
      <Switch>
        <App/>
      </Switch>
    );
  }
}

export default App;