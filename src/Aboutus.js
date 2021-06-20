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

        <div className="ok">
        <center className = "okbox">
         <br>
        </br>
        <img
      
       
      className="app_headerImage2"
      src="https://firebasestorage.googleapis.com/v0/b/inconnect-b0ef1.appspot.com/o/LOGO%2FMAIN%20LOGO.png?alt=media&token=4a81d674-8a4d-47d4-95e3-645a6b943c68"
       />
        
        <br>
        </br>
        <br>
        </br>
        <br></br>
        <h4>THE INFluencers is an innitiative of two software developers</h4>
<br></br>
 <h5>  Pranav Parth (pranav.parth01@gmail.com) and Siddhartha Samant(7hiddenlayers@gmail.com)  . </h5>
<h4>The team wishes to provide a platform to people who want to become a public figure and earn by doing the same . </h4>
<br></br> 
<h4>Feel free to contact the team regarding any queries.</h4>
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