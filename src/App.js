import React, { Component } from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import Main from './main/Main';
import Message from './message/Message';
import Letter from './letter/Letter';
import Remembrance from './remembrance/Remembrance';
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
            <Route exact path="/letter" component={Message} />
            <Route exact path="/army-letter" component={Letter} />
            <Route exact path="/remembrance" component={Remembrance} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
