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


import Profilediff from './Profilediff'
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(25),
    height: theme.spacing(25),
  },
}));

function Dp({dpId, username  , imageUrl}) {
  const classes = useStyles();

    return(
      <Avatar
        
      alt='inconnect'
      src={imageUrl}
      className={classes.large}
      />
    )






}

export default Dp;