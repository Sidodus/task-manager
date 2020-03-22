import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import Header from "./components/layouts/Header";
import About from "./pages/About";
import FormInput from "./todo/FormInput";
import Todo from "./todo/Todo";
import CompletedTodos from "./todo/CompletedTodos";
import FormInputEdit from "./todo/FormInputEdit";
import NotFound from "./pages/NotFound";
import Footer from "./components/layouts/Footer";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "popper.js/dist/popper";
import "jquery/dist/jquery";

import "../src/fontawesome/css/all.min.css";
import "../src/animate.css";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="container-fluid bg-dark">
            <Header
              branding1="Task"
              branding2="Manager"
              home="Home"
              add="Add A Task"
              about="About"
            />
          </div>
          <Switch>
            <Route exact path="/" component={Todo} />
            <Route exact path="/todo/complete" component={CompletedTodos} />
            <Route exact path="/todo/about" component={About} />
            <Route exact path="/todo/add" component={FormInput} />
            <Route exact path="/todo/edit/:id" component={FormInputEdit} />
            <Route component={NotFound} />
          </Switch>
          <div className="container-fluid">
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
