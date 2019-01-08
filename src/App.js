import React, { Component } from 'react';
import Header from './header/Header';
import Main from './main/Main';
import { 
  BrowserRouter as Router, Route, Switch 
} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="application">
          <Header />
          <Switch>
            <Route exact path="/yuka" component={Main} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
