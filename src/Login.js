import React, {useState, useEffect} from 'react';
import firebase from  "firebase";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import './App.css';


import { Redirect } from "react-router-dom";
import { db, auth, storage } from './firebase';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import {Input} from '@material-ui/core';
import { Button, Icon, Label } from 'semantic-ui-react'
import ImageUpload from './ImageUpload';
import InstagramEmbed from 'react-instagram-embed';
import { BsHouseDoorFill } from "react-icons/bs";


function getModalStyle() {
    const top = 50 ;
    const left = 50 ;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));
  




function Login(){
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [modalStyle] = useState(getModalStyle);
    const [openSignIn, setOpenSignIn] = useState(false);
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [user, setUser] = useState('null');


    



    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
           if (authUser){
             console.log(authUser);
             setUser(authUser);
         
          }
          else {
            setUser(null)
    
        }
      })
      return() =>{
        unsubscribe(); 
      }
    
      }, [user, username]);
    
    
      
     
    
    
      
      
    
       
    
    
      const signIn = (event) => {
        event.preventDefault();
    
        auth
        .signInWithEmailAndPassword(email, password)
        .catch((error) => alert(error.message))
        setOpenSignIn(false);

        
      }


      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          window.location.href='/feed_inf_com_00';
        } else {
          // No user is signed in.
        }
      });


    return (
        <div classname="app_main">

            
        
     
        <div className="app_header11">

        <img className="app_headerImage"
        src="https://firebasestorage.googleapis.com/v0/b/inconnect-b0ef1.appspot.com/o/LOGO%2Flogo3editedsdfghj.png?alt=media&token=a7b10d0f-ea48-4f0e-801a-59afc502fcd1"
        />
        
        </div>
        <br>
        </br>
        <br>
        </br>
        
        <br>
        </br>
        <br>
        </br>

        <div className="login">
         <center className = "loginbox">
         <h4>   THE INFluencers </h4>
         <br>
        </br>
        
        <br>
        </br>
           
       
       
       <h4></h4>
       <form className="app_signup">
        
        
       <Input className="LOGINPUT"
        placeholder="Email"
        
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
       />
       <br>
       </br>
       <Input className="LOGINPUT"
       
        placeholder="Password(min 6 char)"
        type="password" 
        value={password}
        onChange = {(e) => setPassword(e.target.value)}
        />
        <br></br>
        </form>
       
       <Button onClick={signIn}  >  Login</Button>
        
       <br></br>
       <br></br>
       
         <Button href='/user_Signup'>New to Influencers?...Sign Up!</Button>

         <br></br>
         <br></br>

         <a    href='/ResetPass'>Forgot Password</a>
      </center>
      </div>
      
      <br></br>
         <br></br>
         <br></br>
         <br></br>
     
    
      <div className="app_footer">

      
<div className="page-footer">

  <div className="footer-link">

  <Link to='/Aboutus' > <h3>About Us</h3></Link>
         <Link to='/TnC' ><h3>TnC</h3> </Link>

  </div>
  <hr></hr>

  
  
  <i>Copyright © 2020 : The INfluencer</i>
  <i>Powered by The Influencer's Community</i>
  
  
    
  
  
 

</div>


      
      </div>

      </div>
     
      
      
    
    );
}

export default Login;