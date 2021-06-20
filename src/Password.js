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
  




function Password(){
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

      
    
    
    
     
    
     
      
      
    
       
      function email_verified(){


        alert('Mail to Reset your Password Has been sent to ' + email );
       
        var auth = firebase.auth();
        var emailAddress = email;

        auth.sendPasswordResetEmail(emailAddress).then(function() {
            // Email sent.
        }).catch(function(error) {
            // An error happened.
        });
  
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
         <br>
        </br>
        
        <br>
        </br>
           
        
      <img
      
       
       className="app_headerImage2"
       src="https://firebasestorage.googleapis.com/v0/b/inconnect-b0ef1.appspot.com/o/LOGO%2FMAIN%20LOGO.png?alt=media&token=4a81d674-8a4d-47d4-95e3-645a6b943c68"
        />
       
       <h4>Password Reset</h4>
       <form className="app_signup">
       <Input
       className="passwordss"
        placeholder="Recovery Email"
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
       />
        
       </form>

        <br></br>
       
        <Button type="submit" onClick={email_verified}> Reset Password</Button>
        
        <br>
        </br>
      
        <br>
        </br>
      
        
        
        
        
        <Button href='/'>Get back to Login</Button>
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

export default Password;