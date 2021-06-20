import React, {useState, useEffect} from 'react';
import firebase from  "firebase";
import './App.css';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";


 
import { db, auth, storage } from './firebase';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import {Input} from '@material-ui/core';
import { Button, Icon, Label } from 'semantic-ui-react'
import ImageUpload from './ImageUpload';
import InstagramEmbed from 'react-instagram-embed';
import { BsHouseDoorFill } from "react-icons/bs";



var usersRef = db.collection('userss');



function Signup(){
   
    const [open, setOpen] = useState(false);
    
    
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [user, setUser] = useState('null');
    const [p,setP] = useState('')


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
    
     var k="https://firebasestorage.googleapis.com/v0/b/inconnect-b0ef1.appspot.com/o/dp%2F87611090_834105877053988_3947571839777472310_n.jpg?alt=media&token=ac219206-6003-4385-b1a4-8e1f730e00c2"
    
     
    
    
      
      
    
       
    
    
     const signup=(event) => {
      event.preventDefault();

      usersRef.where('username', '==', username).get()
       .then(snapshot => {
       if (snapshot.empty) {


        auth.createUserWithEmailAndPassword(email, password)
        .then((authUser) => {
          return authUser.user.updateProfile({
            displayName : username
          })
         
        })
        

        .catch((error) => alert(error.message))
        setOpen(false);

        db.collection('userss').add({
          username : username,
          email : email

        });
    
 
        
       } else {
        alert('username already taken');
      } 
    })
          }


          firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
              // User is signed in.
              window.location.href='/user_Signup/Verifyemail';
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
        


        <center className="signupbox">
        <h4>   THE INFluencers </h4>
       
        
     
        <br>
        </br>
        <br>
        </br>
        
       <form className="app_signup">
        
        <Input className="LOGINPUT"
        placeholder="Username"
        type="text"
        value={username}
        onChange={(e) => setUserName(e.target.value)}
        
       />
       <br></br>
       <Input className="LOGINPUT"
        placeholder="Email"
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
       />
       <br></br>
       
       <Input className="LOGINPUT"
        placeholder="Password(min 6 char)"
        type="password"
        value={password}
        onChange = {(e) => setPassword(e.target.value)}
        /><br></br>
        
        
</form>
        
        <Button  onClick={signup}> Sign Up</Button>
        
      
        
        <br></br>
        <br></br>
        
        
        <Button href='/'> Already have an account....Login!</Button>
      </center>

      <br></br>
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

export default Signup;