
import react from 'react';


import React, {useState, useEffect} from 'react';
import './App.css';
import Post from './Post';
import Appe2 from './App2' ;

import firebase from  "firebase";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import home from './Home';
 
import { db, auth, storage } from './firebase';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import {Input} from '@material-ui/core';
import { Button, Icon, Label } from 'semantic-ui-react'
import ImageUpload from './ImageUpload';
import InstagramEmbed from 'react-instagram-embed';
import { BsHouseDoorFill } from "react-icons/bs";
import App2 from './App2';

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
  

const navbar1 = () => {
    
    return(
     
         <div className="app_loginContainer">
           <Button onClick={() => auth.signOut()}>Logout <BsHouseDoorFill/> </Button>
            <a>
            
           <Button ><Link to="/Appe2"> Home</Link> <BsHouseDoorFill/> </Button>
            
          
           </a>
           </div>
        
     );
}


export default navbar1;