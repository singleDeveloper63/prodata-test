import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Register from './Pages/Register/js/register.js';
import Homepage from './Pages/Homepage/js/homepage.js';
import Login from './Pages/Login/js/login';
import Authentication from './Pages/Authentication/js/authentication';
import NotFound from './Pages/404/js/404';
import AdminPage from './Pages/AdminPanel/adminPanel';
import User from './Pages/User/user';
import PostPage from './Components/FullPost/fullpost';

class App extends React.Component{

  

  render() {

    return (
      <div className="noselect">
        <Switch>
            <Route exact path="/auth/register" component={ Register } />
            <Route exact path="/" component={ Homepage } />
            <Route exact path="/auth/login" component ={ Login } />
            <Route exact path="/auth/:uid/:token" component={ Authentication } />
            <Route exact path='/profile' component={ AdminPage } />
            <Route exact path="/user/?:name/:age?" component={ User }/>
            <Route exact path='/posts/:postID' render={ () => <PostPage postID='3' data='Post' /> }/>
            <Route error component={ NotFound } />
        </Switch>
      </div>
    );
  }
}                                                                                                                                                                                                                                                                                                                                                    

export default App;
