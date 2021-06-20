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


 
import { db, auth, storage } from './firebase';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import {Input} from '@material-ui/core';
import { Button, Icon, Label } from 'semantic-ui-react'
import ImageUpload from './ImageUpload';
import InstagramEmbed from 'react-instagram-embed';
import { BsHouseDoorFill } from "react-icons/bs";

var status=''; 

    



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
var emaill=user.email;
    
    
      var email_verify;
  if(user){

  email_verify = user.emailVerified;
  }
    
     
    
     if (!email_verify)
     {
         status='Not verified';
         
     }
     else
     {
         status = 'Verified';
     }
        
      
      
    
       
      function email_verified(){


        alert('Verification Mail has been send to your Email id : '+emaill+'......Verify and check the verification Status......If Verification Email Not received Click on Verify Once again.');
       
        var user = firebase.auth().currentUser;
  
        user.sendEmailVerification().then(function() {
           
          // Email sent.
        }).catch(function(error) {
          // An error happened.
        });
  
       }
       function reload(){
           window.location.reload();
       }
      
      
      

    return (
        <div classname="app_main">

            
        
     
        <div className="app_header">

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
        
        <h2>The Influencers</h2>

     
       <h4>Verify your Email id</h4>
       <form className="app_signup">
        
       </form>

       <h4>Click on the link below to receive a verification email</h4>
       
        <Button disabled={!user} type="submit" onClick={email_verified}> Verify</Button>
        
        <br>
        </br>
        <h4>After verifying check the Verification Status</h4>
        
        <Button disabled={!user} type="submit" onClick={reload}>Check Verification</Button>
        <br>
        </br>
        <i>Verification Status: {status}</i>
        <br>
        </br>
        
        <Button disabled={!email_verify} href='/feed_inf_com_00'>Login to your Account</Button>
      </center>
        
        
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
       <div className="app_footer">

      
<div className="page-footer">

  <hr></hr>

  
  
  <i>Copyright © 2020 : The INfluencer</i>
  <i>Powered by The Influencer's Community</i>
  
  
    
  
  
 

</div>


      
      </div>

      </div>
     
      
      
    
    );
}

export default Login;