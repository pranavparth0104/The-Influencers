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


function Dp3({dpId, username  , imageUrl}) {

    return(
        <Avatar
            className="post_avatar"
            alt='inconnect'
            src={imageUrl}
            />
    )






}

export default Dp3;