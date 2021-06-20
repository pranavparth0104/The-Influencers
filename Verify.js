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

      
    var status='';
     
    
      var email_verify = user.emailVerified;
    
     
    
     if (!email_verify)
     {
         status='Not verified';
         
     }
     else
     {
         status = 'Verified';
     }
        
      
      
    
       
      function email_verified(){


        alert('Verification Mail has been send to your Email id. Veryfy and check the verification Status');
       
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
        src="https://firebasestorage.googleapis.com/v0/b/inconnect-b0ef1.appspot.com/o/dp%2FLOGO786.png?alt=media&token=adeb1a58-5085-4a3f-b33a-9b6d8078624c"
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
         <br>
        </br>
        
        <br>
        </br>
           
        
      <img
      
       
       className="app_headerImage2"
       src="https://firebasestorage.googleapis.com/v0/b/inconnect-b0ef1.appspot.com/o/dp%2FLOGO786.png?alt=media&token=adeb1a58-5085-4a3f-b33a-9b6d8078624c"
       />
       <h4>   Login to see photos </h4>
       <h4>and videos of your friends</h4>
       <form className="app_signup">
        
        
       
        <Button type="submit" onClick={email_verified}> Verify</Button>
        </form>
        <br>
        </br>
        <Button type="submit" onClick={reload}>Check Verification</Button>
        <br>
        </br>
        <i>Verification Status: {status}</i>
        <br>
        </br>
        
        <Button disabled={!email_verify}><Link to='/' >Login to your Account</Link></Button>
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

  <div className="footer-link">

    <a>About Us</a>
    <a>T&C</a>


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