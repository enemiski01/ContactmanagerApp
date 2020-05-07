import React, { Component } from "react";
import Header from "./component/layout/Header";
import Contacts from "./component/contacts/Contacts";
import AddContact from "./component/contacts/addContact";
import EditContact from "./component/contacts/EditContact";
import About from './component/Pages/About';
import NotFound from './component/Pages/NotFound';

import Test from './component/test/Test';

import { HashRouter as Router, Route, Switch } from 'react-router-dom'


import { Provider } from "./context";

import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {

  render() {
    return (
      <Provider>
        <Router>
        <div className="App">
          <Header branding="Contact Manager" />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Contacts} />

              <Route exact path="/contact/add" component={AddContact} />

              <Route exact path="/contact/edit/:id" component={EditContact} />

              <Route exact path="/about" component={About} />

              < Route exact path="/test" component={Test} />

              <Route component={NotFound} />
              
            </Switch>
          </div>
        </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
