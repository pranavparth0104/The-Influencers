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
        <br>
        </br>
        <br></br>
        

<h2>The top three Influencers in the Feed page will recieve cash prize of INR 51 rupees every 15 days , namely on the 1st and 15th day of the respective month . The time at which the top 3 are decided on the mentioned days will solely depend on The INFluencer team. </h2>
<br></br>
AND FOR EVERY POST THAT CROSSES 3K REVIEWS YOU EARN 101 RUPEES .
<br></br>
<br>
</br>
<br></br>
<h3>The INFluencers team</h3>        
     
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