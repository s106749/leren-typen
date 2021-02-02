import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom';
// import Exercise from './exercise/Exercise';
// import Home from './home/Home';
import Overview from './overview/Overview';
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <AppBar position="static">
            <Toolbar>
              <Link className="nav-button" to="/">
                <IconButton edge="start" color="inherit" aria-label="home">
                  <HomeIcon />
                </IconButton>
              </Link>
              <Link className="nav-button" to="/overzicht">
                <Button color="inherit">
                  Overzicht
                </Button>
              </Link>
            </Toolbar>
          </AppBar>
          <Switch>
            {/* <Route exact path='/' render={() => {return (<Redirect to="/home" />)}}><Home /></Route> */}
            <Route exact path='/overzicht'><Overview /></Route>
            {/* <Route exact path='/oefening/:exercise' component={ Exercise }/> */}
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;