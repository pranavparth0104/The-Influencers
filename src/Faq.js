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

        <div className="home">
        <center className = "loginbox">
         <br>
        </br>
        
        <br>
        </br>
        <h3>I am Having Trouble uploading my Profile Pic. What Should i do? </h3>
     <h5>It happens mostly due to Internet speed but try visiting the home page and coming back to your profile page.</h5>

<br></br>
<br></br>



<h2>What does the feed page display?</h2>
<h5>The feed page displays the posts of Influencers who have recieved maximum number of reviews ,this does not include the fact what their average star count is  </h5>
<br></br>
<br></br>


<h2>How can I earn and what is the earning policy ?</h2>
<h5>The top three Influencers in the Feed page will recieve cash prize of INR 61 rupees every 15 days , namely on the 1st and 15th day of the respective month . The time at which the top 3 are decided on the mentioned days will solely depend on The INFluencer team. </h5>
<br></br>
AND FOR EVERY POST THAT CROSSES 3K REVIEWS YOU EARN 101 RUPEES .
<br></br>
<br></br>
<h3>How will i receive the Payment?</h3>
<h5>THE top 3 INFluencers will recieve an email from the team on the result days . The respective user shall send his paytm/gpay number in response to the mail. The money will be credited within 2 days of recieving your email. </h5>
<br>
</br>
<br>
</br>
<h2>I am having trouble in deleting a Post ?</h2>
<h5>You can only delete your posts from your profile page. Sometimes the deletion process may take some time. Consider waiting for a few seconds if such an issue occurs. </h5>
<br></br>
AND FOR EVERY POST THAT CROSSES 3K REVIEWS YOU EARN 101 RUPEES .
<br></br>

<h3>What does the Home page display?</h3>
<h5>The home page displays the latest posts made by The INFluencers . </h5>
<br></br>
<br></br>


<h3>How can i Get Reviews?</h3>
<h5>Your fellow INFluencers can search your account  up using your username and can review all your posts. Every user can review a post only once. </h5>
<br></br>
<br></br>

<h3>Are the Usernames Unique?</h3>
<h5>All the usernames and email Ids are unique . One can only form one account using one E-mail. </h5>
<br></br>
<br></br>
        <br>
        </br>
        <br></br>
          
        
     
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

  

  
  
  <i>Copyright © 2020 : The INfluencer</i>
  <i>Powered by The Influencer's Community</i>
  
  
    
  
  
 

</div>


      
      </div>

      </div>
     
      
      
    
    );
}

export default Login;