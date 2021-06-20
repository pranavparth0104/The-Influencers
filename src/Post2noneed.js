import React, {useState, useEffect} from 'react';
import './Post2noneed.css';
import {db,auth} from './firebase';
import './App.css';
import firebase from 'firebase'
import { BsFillHeartFill } from "react-icons/bs";
import {BsFillChatFill } from "react-icons/bs";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Dp3 from './Dp3';


import Counter from './Counterlikes';
import { Button, Icon, Label } from 'semantic-ui-react'

import Avatar from "@material-ui/core/Avatar";


import Profilediff from './Profilediff'
var prl="kkk"

const usersList = [];


var like=0;




function Postnoneed({postId,user, username ,caption , imageUrl}) {
    const [comments,setComments]=useState([]);
    const [comment,setComment]=useState('');
    const [Likes,setLikes]=useState([]);
        const [dps, setDps] = useState([]);

    const [Like,setLike]=useState('');
    
  

  

    useEffect(() => {
        let unsubscribe;
        if(postId){
            unsubscribe = db
            .collection("posts")
            .doc(postId)
            .collection("comments")
            .orderBy('timestamp', 'desc')
            .onSnapshot((snapshot) =>{
                setComments(snapshot.docs.map((doc) => doc.data()));
            });
        }
        return () => {
            unsubscribe();
        }
    }, [postId]);
    

const postComment =(event) => {
    event.preventDefault();

    db.collection("posts").doc(postId).collection("comments").add({
       text:comment,
       username: user.displayName,
       timestamp:firebase.firestore.FieldValue.serverTimestamp()
    });
    setComment('');

}




const postLike =(event) => {
  event.preventDefault();
  like++;
  
  

  db.collection("posts").doc(postId).collection("likes").add({
     likes:like,
     
  });
  

}




const ButtonExampleLabeledBasic = (event) => (
    
    <div>
      <Button as="div" labelPosition="right">
        <Button color="red" basic >
          <Icon name="heart" />
          
        </Button>
        <Label basic color="red" pointing="left">
          <Counter />
        </Label>
      </Button>
      
    </div>
)
  
useEffect(() => {
  db
  .collection('dp')
  .where("username","==",username)
  
  .onSnapshot(snapshot => {
    setDps(snapshot.docs.map(doco =>({
     
        id1:doco.id,
       
      dp:doco.data()
     
    })));
  })
   

}, [])

  
  




 



    return (
      
      
        <div className="post22">
          

            <div className="post_header">
              

            {
            dps.map(({id1, dp}) =>(
              
            <Dp3 key={id1} postId={id1}  username={dp.userName}  imageUrl={dp.imageUrl}/>
          ))
         }
            <h3><Link to={{ pathname:"/Home_INF_COM_001/user_view_Profile", state:
                  username
                  }}>{username}</Link></h3>
            <div className="viewprofile">
            
            </div>

            </div>

            <img class= "post_image" src={imageUrl}></img>
            
            </div>
            
            
            
    )
}

export default Postnoneed
