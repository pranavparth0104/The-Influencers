import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import App2 from './App2';
import Home from './Home';
import Signup from './Signup';
import Login from './Login';
import ImageUpload from './ImageUpload';
import Profile from './Profile';
import Profilediff from './Profilediff';
import Aboutus from './Aboutus';
import Tnc from './Tnc';
import Password from './Password';
import Verify from './Verify';
import Faq from './Faq';
import Help from './Help';
import Home2 from './Home2';


import { Search } from 'semantic-ui-react';
function App() {
  return (
    <div className="app">
    <Route exact path="/" component={Login}/>
    <Route exact path="/Home_INF_COM_001" component={Home}/>
    <Route exact path="/user_Signup" component={Signup}/>
    <Route exact path="/feed_inf_com_00" component={App2}/>
    <Route exact path="/ImageUpload" component={ImageUpload}/>
    <Route exact path="/Home_INF_COM_001/user_Profile" component={Profile}/>
    <Route exact path="/Home_INF_COM_001/user_view_Profile" component={Profilediff}/>
    <Route exact path="/Aboutus" component={Aboutus}/>
    <Route exact path="/TnC" component={Tnc}/>
    <Route exact path="/user_Signup/Verifyemail" component={Verify}/>
    <Route exact path="/ResetPass" component={Password}/>
    <Route exact path="/feed_inf_com_00/12frequently_asked_question09876" component={Faq}/>
    <Route exact path="/feed_inf_com_00/help_support" component={Help}/>
    <Route exact path="/Home_INF_COM_002" component={Home2}/>
    </div>
  );
}

export default App;
