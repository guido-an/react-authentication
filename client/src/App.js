import React from "react";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import Signup from "./components/Signup";
import Avatar from "./components/Avatar";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import AuthService from "./services/authService";

class App extends React.Component {
  state = {
    loggedInUser: null,
  };

  service = new AuthService();

  componentDidMount() {
    this.service
      .loggedin()
      .then((user) => {
        this.setState({
          loggedInUser: user,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // LIFT UP THE STATE OF THE USER
  // 1 create a function which set the state of the loggedin user
  // 2 in the Route we pass down as props the function just created
  // 3 in the child component we call this function when the user signup/login

  getTheUser = (user) => {
    this.setState({
      loggedInUser: user,
    });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <Navbar getTheUser={this.getTheUser} />
        {this.state.loggedInUser && (
          <div>
            {`Hello ${this.state.loggedInUser.username}, welcome back!`}
            <img
              src={`http://localhost:5000/uploads/${this.state.loggedInUser.avatarUrl}`}
              alt="user avatar"
            />
          </div>
        )}
        <Switch>
          <Route exact path="/avatar" component={Avatar} />
          <Route exact path="/signup" component={Signup} />
          {/* <Route exact path='/login' component={Login} /> */}
          <Route
            exact
            path="/login"
            render={() => <Login getTheUser={this.getTheUser} />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
