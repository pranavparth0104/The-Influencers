import React, {useState, useEffect,Component} from 'react';
import './Post.css';
import {db,auth} from './firebase';
import firebase from 'firebase'
import { star  } from "react-icons/bs";
import {BsFillChatFill } from "react-icons/bs";
import ImageContentHover from 'react-image-hover';
import { MDBMask, MDBView, MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { Image, Ref } from 'semantic-ui-react'


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import { Button, Icon, Label } from 'semantic-ui-react'
import Likebutton from './Counterlikes';

import Avatar from "@material-ui/core/Avatar";

import { makeStyles } from '@material-ui/core/styles';
import Profilediff from './Profilediff'
import styled from 'styled-components';
import Modal from '@material-ui/core/Modal';
import Dpbattle from './Dpbattle';


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
      width: 300,
      alignItems:'center',
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));
function Dp2({dpId, a  , imageUrl}) {
    const [open, setOpen] = useState(false);
  const [openPost, setOpenPost] = useState(false);
  const [openDp, setOpenDp] = useState(false);
  const [modalStyle] = useState(getModalStyle);
  const classes = useStyles();
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



    return(
        <div>
        <Image onClick={() => setOpenDp(true)} src={imageUrl} size='small' circular  />

        <Modal className="photodiv"
        open={openDp}
        
        onClose={() => setOpenDp(false)}>
          <div  style={modalStyle} className={classes.paper}>

         
        
          
          <Dpbattle username={user.displayName} />  

     
      
      
    </div>


    </Modal>
    </div>
    );






}

export default Dp2;